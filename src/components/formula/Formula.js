import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  // будем иметь доступ без создания инстанса данного класса поэтому static
  static className() {
    return `excel__formula`
  }
  // перезатираем родительский toHTML
  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>`
  }
}
