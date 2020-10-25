import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  // будем иметь доступ без создания инстанса данного класса поэтому static
  static className() {
    return `excel__formula`
  }

  constructor($root,) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }
  // перезатираем родительский toHTML
  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>`
  }
  onInput(event) {
    console.log('Formula onInput', event)
  }
}
