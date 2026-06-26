import { Smartphone, BatteryCharging, Plug, CircleDot, X } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import "./Covered.css";

const icons = [Smartphone, BatteryCharging, Plug, CircleDot];

export default function Covered() {
  const { t } = useLanguage();

  return (
    <section className="section covered" id="covered">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.covered.eyebrow}</span>
          <h2>{t.covered.title}</h2>
          <p>{t.covered.subtitle}</p>
        </div>

        <div className="covered__grid">
          {t.covered.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div className="covered-card" key={i}>
                <div className="covered-card__icon">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
        {/* Excluded items removed per request */}
      </div>
    </section>
  );
}
