/* eslint-disable no-param-reassign */
/* eslint-disable no-extend-native */
interface Number {
  toMoneyString(c?: number): string
}
Number.prototype.toMoneyString = function (precision: number) {
  if (!this && this !== 0) return ''
  if (precision === undefined) precision = 2
  let str = this.toFixed(precision)
  let parts = str.split('.')
  parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  return parts.join('.')
}
