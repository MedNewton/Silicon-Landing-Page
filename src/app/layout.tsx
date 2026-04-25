// Root layout is a passthrough — <html>, <body>, fonts, and providers
// live in `src/app/[locale]/layout.tsx` so they can react to the active locale.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
