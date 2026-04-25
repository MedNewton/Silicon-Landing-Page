"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  Button,
  ClickAwayListener,
  Fade,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NextLink from "next/link";
import { Link as LocaleLink } from "@/i18n/navigation";

export type DropdownItem = {
  label: string;
  href: string;
  /**
   * When true, the href is treated as a locale-aware internal route handled by
   * next-intl's Link (e.g. "/blog"). Otherwise the href is used as a raw
   * anchor/external href.
   */
  localeAware?: boolean;
  /** Open in a new tab (external links). */
  external?: boolean;
};

export type HeaderDropdownProps = {
  label: string;
  items: DropdownItem[];
  /** Disables hover-to-open (useful for touch-only contexts). */
  disableHover?: boolean;
};

const triggerSx = {
  minWidth: 0,
  px: 1.25,
  py: 0.75,
  borderRadius: 2,
  textTransform: "none",
  color: "#3D537B",
  fontSize: "0.95rem",
  fontWeight: 500,
  gap: 0.25,
  transition: "color 0.2s ease, background 0.2s ease",
  "&:hover": {
    color: "#1E2B42",
    background: "rgba(255, 255, 255, 0.4)",
  },
};

const paperSx = {
  mt: 1,
  minWidth: 220,
  borderRadius: 3,
  overflow: "hidden",
  background:
    "linear-gradient(273.13deg, rgba(245, 244, 252, 0.92) -6.55%, rgba(240, 244, 253, 0.92) 106.12%)",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  boxShadow: "0 24px 60px rgba(15, 27, 60, 0.18)",
  p: 1,
};

const itemSx = {
  display: "block",
  px: 1.5,
  py: 1,
  borderRadius: 2,
  color: "#1E2B42",
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: 500,
  transition: "background 0.2s ease, color 0.2s ease",
  outline: "none",
  "&:hover, &:focus-visible": {
    background:
      "linear-gradient(273.13deg, rgba(101, 71, 165, 0.12) -6.55%, rgba(63, 109, 221, 0.12) 106.12%)",
    color: "#1E2B42",
  },
};

export default function HeaderDropdown({
  label,
  items,
  disableHover = false,
}: HeaderDropdownProps) {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const itemsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, [cancelClose]);

  const handleOpen = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const handleToggle = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setOpen((prev) => !prev);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
    setFocusIndex(null);
  }, []);

  const handleTriggerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setOpen(true);
        setFocusIndex(0);
      } else if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose],
  );

  const handleMenuKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        anchorRef.current?.focus();
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setFocusIndex((prev) => {
          const next = prev === null ? 0 : (prev + 1) % items.length;
          return next;
        });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setFocusIndex((prev) => {
          const next =
            prev === null ? items.length - 1 : (prev - 1 + items.length) % items.length;
          return next;
        });
      } else if (event.key === "Tab") {
        handleClose();
      }
    },
    [handleClose, items.length],
  );

  useEffect(() => {
    if (open && focusIndex !== null) {
      itemsRef.current[focusIndex]?.focus();
    }
  }, [open, focusIndex]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const hoverProps = disableHover
    ? {}
    : { onMouseEnter: handleOpen, onMouseLeave: scheduleClose };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ position: "relative" }}
        {...hoverProps}
      >
        <Button
          ref={anchorRef}
          name={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
          disableRipple
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={open ? menuId : undefined}
          onClick={handleToggle}
          onKeyDown={handleTriggerKeyDown}
          sx={triggerSx}
          endIcon={
            <KeyboardArrowDownIcon
              fontSize="small"
              sx={{
                transition: "transform 0.2s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          }
        >
          {label}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
          modifiers={[
            { name: "offset", options: { offset: [0, 4] } },
          ]}
          sx={{ zIndex: (t) => t.zIndex.appBar + 2 }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={180}>
              <Paper
                elevation={0}
                sx={paperSx}
                id={menuId}
                role="menu"
                onMouseEnter={handleOpen}
                onMouseLeave={scheduleClose}
                onKeyDown={handleMenuKeyDown}
              >
                <Stack>
                  {items.map((item, index) => {
                    const commonProps = {
                      role: "menuitem",
                      ref: (el: HTMLAnchorElement | null) => {
                        itemsRef.current[index] = el;
                      },
                      tabIndex: -1,
                      onClick: handleClose,
                      sx: itemSx,
                    };

                    const labelNode: ReactNode = (
                      <Typography
                        component="span"
                        sx={{ fontSize: "0.9rem", fontWeight: 500 }}
                      >
                        {item.label}
                      </Typography>
                    );

                    if (item.localeAware) {
                      return (
                        <LocaleLink
                          key={`${item.label}-${item.href}`}
                          href={item.href}
                          {...commonProps}
                        >
                          {labelNode}
                        </LocaleLink>
                      );
                    }

                    return (
                      <NextLink
                        key={`${item.label}-${item.href}`}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        {...commonProps}
                      >
                        {labelNode}
                      </NextLink>
                    );
                  })}
                </Stack>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Stack>
    </ClickAwayListener>
  );
}
