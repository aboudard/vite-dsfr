class GreeterComponent extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="fr-highlight fr-mb-2v">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.</p>
        <button class="fr-btn fr-btn--secondary fr-icon-chat-3-fill fr-btn--icon-left" id="greet-btn">greet</button>
      </div>
    `;
    this.querySelector('#greet-btn')!.addEventListener('click', () => alert("hello world"));
  }
}

customElements.define('greeter-component', GreeterComponent);