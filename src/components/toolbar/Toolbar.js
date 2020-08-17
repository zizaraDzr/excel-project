import { ExcelComponent } from "../../core/ExcelComponent";

export class Toolbar extends ExcelComponent {
  // будем иметь доступ без создания инстанса данного класса поэтому static
  static className() {
    return `excel__toolbar`
  }
  // перезатираем родительский toHTML
  toHTML() {
    return `<div class="button">
    <i class="material-icons">format_align_left</i>
</div>
<div class="button">
    <i class="material-icons">format_align_right</i>
</div>
<div class="button">
    <i class="material-icons">format_align_center</i>
</div>
<div class="button">
    <i class="material-icons">format_bold</i>
</div>
<div class="button">
    <i class="material-icons">format_italic</i>
</div>
<div class="button">
    <i class="material-icons">format_underlined</i>
</div>`
  }
}