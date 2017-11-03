export default class AbstractView {
  get template() {
    throw new Error(`template method must be overridden in children`);
  }

  render() {
    const d = document.createElement(`div`);
    d.innerHTML = this.template;
    return d.cloneNode(true);
  }

  bind() {}
  unbind() {}

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind();
    return this._element;
  }
}
