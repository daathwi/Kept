import type { ReactNode } from "react";

type IconProps = { className?: string };

export type ProcessIconId = "visit" | "build" | "launch" | "keep";

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function VisitIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M4 8.5h16v10H4z" />
      <path d="M9 8.5l1.3-2.8h3.4L15 8.5" />
      <circle cx="12" cy="13.2" r="2.4" />
      <path d="M3 20.5h18" />
    </Frame>
  );
}

function BuildIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M4 18.5h16" />
      <path d="M7 18.5V9.2L12 5.5l5 3.7v9.3" />
      <path d="M10 18.5v-4.2h4v4.2" />
      <path d="M9.5 11.5h5" />
    </Frame>
  );
}

function LaunchIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M12 19.5v-7" />
      <path d="M8.5 15.2 12 5.5l3.5 9.7" />
      <path d="M5.5 19.5h13" />
      <path d="M9.2 12.2H6.8L8 9.4" />
      <path d="M14.8 12.2h2.4L16 9.4" />
    </Frame>
  );
}

function KeepIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M12 20.2s-6.5-3.6-6.5-8.4V6.8L12 4.5l6.5 2.3v5c0 4.8-6.5 8.4-6.5 8.4z" />
      <path d="M9.4 11.6 11.2 13.4 14.8 9.8" />
    </Frame>
  );
}

const icons: Record<ProcessIconId, (props: IconProps) => ReactNode> = {
  visit: VisitIcon,
  build: BuildIcon,
  launch: LaunchIcon,
  keep: KeepIcon,
};

export function ProcessIcon({ id, className }: { id: ProcessIconId; className?: string }) {
  const Icon = icons[id];
  return <Icon className={className} />;
}
