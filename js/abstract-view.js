import getElementFromTemplate from './getElementFromTemplate';

class AbstractView {
  /* возвращает строку, содержащую разметку */
  get template() {
    throw new Error(`template method must be overridden in children`);
  }

  /* создавать DOM-элемент на основе шаблона, который возвращается геттером template */
  render() {
    return getElementFromTemplate(this.template);
  }

  /* метод, который будет добавлять обработчики событий. Метод по умолчанию ничего не делает.
     Если нужно обработать какое-то событие, то этот метод должен быть переопределён
     в наследнике с необходимой логикой */
  bind() {}

  /* возвращает DOM-элемент, соответствующий представлению.
     Метод должен создавать DOM-элемент с помощью метода render, добавлять ему обработчики,
     с помощью метода bind и возвращать созданный элемент.
     Метод должен использовать ленивые вычисления — элемент должен создаваться при первом
     обращении к методу с помощью метода getMarkup, должны добавляться обработчики (если возможно).
     При последующих обращениях должен использоваться элемент, созданный при первом вызове метода. */
  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind();
    return this._element;
  }

}

export default AbstractView;
