class Other extends HTMLElement {

  connectedCallback() {
    // You can add additional logic here if needed when the component is added to the DOM
    this.innerHTML = `
            <div class="fr-alert fr-alert--info fr-mb-2v">
                <h3 class="fr-alert__title">Titre du message d&#39;information</h3>
                <div class="fr-alert__body">
                    <p>Texte du message</p>
                </div>
            </div>
        `;
  }
}

customElements.define("other-component", Other);
