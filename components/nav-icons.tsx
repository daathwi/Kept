import type { ReactNode } from "react";
import type { NavIconId } from "@/content/homepage";

type IconProps = {
  className?: string;
};

function IconFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function AboutIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 19.5c1.6-3.2 4-4.8 6.5-4.8s4.9 1.6 6.5 4.8" />
    </IconFrame>
  );
}

function PortfolioIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4 8.5h16v10.5H4z" />
      <path d="M9 8.5l1.2-2.5h3.6L15 8.5" />
      <circle cx="12" cy="13.5" r="2.6" />
    </IconFrame>
  );
}

function PlansIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M8 5h11v14H8z" />
      <path d="M5 8h3M5 12h3M5 16h3" />
      <path d="M11 9.5h5M11 13h5M11 16.5h3.5" />
    </IconFrame>
  );
}

function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.96.52 3.8 1.44 5.4L2 22l4.92-1.55a9.86 9.86 0 0 0 5.12 1.4h.01c5.46 0 9.89-4.4 9.89-9.85C21.93 6.4 17.5 2 12.04 2Zm5.75 13.98c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.18-4.94-4.37-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.3.59-.37.79-.37h.57c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.38-.43.51-.14.14-.29.29-.12.56.16.27.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.26 1.4.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.61-.13.24.09 1.55.73 1.81.86.27.14.44.2.51.31.07.11.07.64-.17 1.32Z" />
    </svg>
  );
}

const icons: Record<NavIconId, (props: IconProps) => ReactNode> = {
  about: AboutIcon,
  portfolio: PortfolioIcon,
  plans: PlansIcon,
  whatsapp: WhatsAppIcon,
};

export function NavIcon({ id, className }: { id: NavIconId; className?: string }) {
  const Icon = icons[id];
  return <Icon className={className} />;
}
