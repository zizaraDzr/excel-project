import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
  // будем иметь доступ без создания инстанса данного класса поэтому static
  static className() {
    return `excel__header`
  }
  // перезатираем родительский toHTML
  toHTML() {
    return `
    <input type="text" value="Новая таблица" class="input"></input>
    <div>
        <div class="button">
            <i class="material-icons">delete</i>
        </div>
        <div class="button">
            <i class="material-icons">exit_to_app</i>
        </div>
    </div>`
  }
}