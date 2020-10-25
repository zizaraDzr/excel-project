export class DomListener {
  constructor($root, listeners = []) {
    // if (!$root) {
    //   throw new Error('no $root')
    // }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    console.log(this.listeners);
  }
  removeDomListeners() {}
}