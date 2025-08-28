declare global {
  namespace JSX {
    interface IntrinsicElements {
      "greeter-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "other-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

import React from "react";
import { Greeter } from "./Greeter";
import { Other } from "./Other";

export const App: React.FC<{ hello: string; falcon: string }> = ({
  hello,
  falcon,
}) => (
  <div className="fr-container">
    <h1>{hello}</h1>
    <img id="falcon" src={falcon} alt="Falcon" />
    <Greeter>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.
    </Greeter>
    <Other>Texte du message</Other>
    <div className="fr-notice fr-notice--info fr-mb-2v">
      <div className="fr-container">
        <div className="fr-notice__body">
          <p>
            <span className="fr-notice__title">
              Titre du bandeau assez long
            </span>
            <span className="fr-notice__desc">
              Texte de description plutot long lorem ipsum sit consectetur
              adipiscing elit. Sed
            </span>
            <a
              title="Lien de consultation - nouvelle fenêtre"
              href="https://example.com"
              target="_blank"
              rel="noopener external"
              className="fr-notice__link"
            >
              Lien de consultation
            </a>
          </p>
          <button
            title="Masquer le message"
            onClick={(e) => {
              const notice = (e.target as HTMLElement).closest(".fr-notice");
              if (notice && notice.parentNode)
                notice.parentNode.removeChild(notice);
            }}
            type="button"
            className="fr-btn--close fr-btn"
          >
            Masquer le message
          </button>
        </div>
      </div>
    </div>
    <div className="fr-grid-row fr-mb-2v">
      <div className="fr-col">
        <p className="fr-badge">Libellé badge</p>
      </div>
      <div className="fr-col">
        <button
          className="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left"
          type="button"
        >
          Libellé bouton
        </button>
      </div>
    </div>
    <div className="fr-input-group">
      <label className="fr-label" htmlFor="text-input">
        Libellé champ de saisie
        <span className="fr-hint-text">Texte de description additionnel</span>
      </label>
      <input
        className="fr-input"
        aria-describedby="input-messages"
        id="text-input"
        type="text"
      />
      <div
        className="fr-messages-group"
        id="input-messages"
        aria-live="polite"
      ></div>
    </div>
  </div>
);
