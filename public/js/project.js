class Project extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
  }

  render() {}
}

customElements.define("project", Project);
