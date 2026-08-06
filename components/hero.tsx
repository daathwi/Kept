import { seatsFilledPercent, seatsOpen, site, whatsappUrl } from "@/content/site";
import { hero } from "@/content/homepage";

export function Hero() {
  const open = seatsOpen();
  const filledPct = seatsFilledPercent();

  return (
    <div className="hero-shell wrap">
      <div className="perf-top" aria-hidden="true" />
      <div className="ticket hero">
        <aside className="ticket-badge" aria-label="Client seat availability">
          <span className="ticket-badge-pulse" aria-hidden="true" />
          <p className="ticket-badge-status mono">Filling fast</p>
          <p className="ticket-badge-open mono">
            <span className="ticket-badge-num">{open}</span>
            <span className="ticket-badge-unit">open</span>
          </p>
          <div
            className="ticket-badge-bar"
            role="progressbar"
            aria-valuenow={site.seats.filled}
            aria-valuemin={0}
            aria-valuemax={site.seats.total}
            aria-label={`${open} of ${site.seats.total} seats still open`}
          >
            <span style={{ width: `${filledPct}%` }} />
          </div>
          <p className="ticket-badge-sub mono">
            {site.seats.filled} / {site.seats.total}
          </p>
        </aside>

        <div className="ticket-main">
          <div className="ticket-meta">
            <span className="eyebrow">
              Ticket No. {hero.ticketNo} , {hero.status}
            </span>
          </div>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.cta}
            </a>
            <span className="hero-note">{hero.note}</span>
          </div>
        </div>

        <div className="ticket-tear" aria-hidden="true" />
      </div>
    </div>
  );
}
