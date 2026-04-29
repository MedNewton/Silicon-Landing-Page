import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env.js";

const TO = "a.catrame@fare-impresa.it";
const FROM = "Silicon Plan <notifications@silicon-plan.live>";

const contactSchema = z.object({
    name: z.string().trim().min(1).max(120),
    email: z.string().trim().email().max(200),
    subject: z.string().trim().min(1).max(200),
    message: z.string().trim().min(1).max(5000),
});

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "invalid_json" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;

    const html = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1E2B42; line-height: 1.5;">
            <h2 style="color: #1E2B42; margin-bottom: 16px;">New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
    `;

    const text = `New contact form submission

Name: ${name}
Email: ${email}
Subject: ${subject}

${message}`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: FROM,
            to: [TO],
            reply_to: email,
            subject: `[Silicon Plan contact] ${subject}`,
            html,
            text,
        }),
    });

    if (!resendResponse.ok) {
        const detail = await resendResponse.text().catch(() => "");
        console.error("Resend error", resendResponse.status, detail);
        return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
