import { ExcelComponent } from "../../core/ExcelComponent";

export class Table extends ExcelComponent {
  static className() {
    return `excel__table`
  }
  toHTML() {
    return `<div class="row">
    <div class="row_info"></div>
    <div class="row_data">
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">B</div>
        <div class="column">B</div>
    </div>
</div>
<div class="row">
    <div class="row_info">1</div>
    <div class="row_data">
        <div class="cell selected" contenteditable>A1</div>
        <div class="cell" contenteditable>B1</div>
        <div class="cell" contenteditable>C1</div>
    </div>
</div>
<div class="row">
    <div class="row_info">2</div>
    <div class="row_data">
        <div class="cell" contenteditable>A1</div>
        <div class="cell" contenteditable>B1</div>
        <div class="cell" contenteditable>C1</div>
    </div>
</div>`
  }
}