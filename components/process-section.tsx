import { process as processContent } from "@/content/homepage";
import { ProcessIcon } from "@/components/process-icons";

export function ProcessSection() {
  return (
    <section className="process">
      <div className="wrap section-head">
        <span className="kicker">{processContent.kicker}</span>
        <h2>{processContent.title}</h2>
      </div>
      <div className="wrap">
        <ol className="steps">
          {processContent.steps.map((step, index) => (
            <li key={step.num} className="step">
              {index < processContent.steps.length - 1 ? (
                <span className="step-connector" aria-hidden="true" />
              ) : null}
              <span className="num mono">{step.num}</span>
              <div className="step-icon" aria-hidden="true">
                <ProcessIcon id={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.meta ? <span className="meta">{step.meta}</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
