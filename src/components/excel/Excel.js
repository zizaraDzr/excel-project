import { $ } from "../../core/dom"

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
  getRoot() {
    const $root = $.create("div", "excel")
    this.components.forEach(Component => {
      const $div = $.create("div", Component.className())
      const component = new Component($div)
      console.log(component);
      $div.innerHTML = component.toHTML()
      $root.append($div)
      // $root.insertAdjacentHTML("beforeend", component.toHTML())
    })

    return $root
  }
  render() {
    this.$el.append(this.getRoot())
  }
}