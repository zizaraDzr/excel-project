import { $ } from "../../core/dom"

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }
  getRoot() {
    const $root = $.create("div", "excel")
    this.components = this.components.map(Component => {
      // вот она статика. Обратились className до создания инстанса класса
      const $div = $.create("div", Component.className())
      // const component = new Component($div)
      const component = new Component()
      $div.html(component.toHTML())
      $root.append($div)
      return component
      // $root.insertAdjacentHTML("beforeend", component.toHTML())
    })

    return $root
  }
  render() {
    // this.$el.inserAdjacentHTML('afterbegin', `<h1>test</h1>`)
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init());
  }
}