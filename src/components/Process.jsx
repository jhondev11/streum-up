import { useLanguage } from "../i18n/useLanguage";
import "./Process.css";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="section process" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.howItWorks.eyebrow}</span>
          <h2>{t.howItWorks.title}</h2>
        </div>

        <div className="process__row">
          {t.howItWorks.steps.map((step, i) => (
            <div className="process__step" key={i}>
              <span className="mono process__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < t.howItWorks.steps.length - 1 && <span className="process__connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
