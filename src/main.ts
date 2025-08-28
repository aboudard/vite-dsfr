import "@gouvfr/dsfr/dist/dsfr.min.css";
import "@gouvfr/dsfr/dist/utility/utility.min.css";
import falcon from "./assets/falcon.png";
import "./style.css";
import "./greeter";
import "./other";

import { hello } from "./test";

const app = document.querySelector<HTMLDivElement>("#content")!;

app.innerHTML = `
      <div class="fr-container">
        <h1>${hello}</h1>
        <img id="falcon" />
        <greeter-component>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.</greeter-component>
        <other-component>Texte du message</other-component>
        <div class="fr-notice fr-notice--info fr-mb-2v">
          <div class="fr-container">
            <div class="fr-notice__body">
              <p>
                <span class="fr-notice__title"
                  >Titre du bandeau assez long</span
                >
                <span class="fr-notice__desc"
                  >Texte de description plutot long lorem ipsum sit consectetur
                  adipiscing elit. Sed</span
                >
                <a
                  title="Lien de consultation - nouvelle fenêtre"
                  href="#"
                  target="_blank"
                  rel="noopener external"
                  class="fr-notice__link"
                  >Lien de consultation</a
                >
              </p>
              <button
                title="Masquer le message"
                onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)"
                type="button"
                class="fr-btn--close fr-btn"
              >
                Masquer le message
              </button>
            </div>
          </div>
        </div>

        <div class="fr-grid-row fr-mb-2v">
          <div class="fr-col"><p class="fr-badge">Libellé badge</p></div>
          <div class="fr-col">
            <button class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left" type="button">Libellé bouton</button>
          </div>
        </div>
        <div class="fr-input-group">
          <label class="fr-label" for="text-input">
            Libellé champ de saisie
            <span class="fr-hint-text">Texte de description additionnel</span>
          </label>
          <input
            class="fr-input"
            aria-describedby="input-messages"
            id="text-input"
            type="text"
          />
          <div
            class="fr-messages-group"
            id="input-messages"
            aria-live="polite"
          ></div>
        </div>
      </div>
`;
document.getElementById("falcon")!.setAttribute("src", falcon);
