import { site } from "@/content/site";
import { contact } from "@/content/homepage";
import { ContactForm } from "@/components/contact-form";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap">
        <div className="signoff">
          <div className="signoff-copy">
            <h2>{contact.title}</h2>
            <p>{contact.body}</p>
            <p className="sig">{contact.signature}</p>
          </div>
          <div className="signoff-form">
            <ContactForm />
          </div>
        </div>
        <div className="foot-rule">
          <span>
            {site.name} — {site.tagline.toLowerCase()}
          </span>
        </div>
      </div>
    </footer>
  );
}
