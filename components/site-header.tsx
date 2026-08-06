import Link from "next/link";
import { site } from "@/content/site";
import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/">
          {site.name}
          <span>.</span>
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
