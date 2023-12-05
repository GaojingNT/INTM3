let currentFontSize = null,
  currentFontColor = null,
  currentBgColor = null
window.addEventListener('load', () => {
  currentFontSize = localStorage.getItem('yourFontSize')
  currentFontColor = localStorage.getItem('yourFontColor')
  currentBgColor = localStorage.getItem('yourBgColor')
  setBodyStyle()
})
function setBodyStyle() {
  document.body.style = `font-size:${currentFontSize};color:${currentFontColor};background-color:${currentBgColor}`
}
const colorInput = document.getElementById('color-bg')
colorInput.addEventListener('input', (e) => {
  currentBgColor = e.target.value
  localStorage.setItem('yourBgColor', e.target.value)
  setBodyStyle()
})
const fontColorInput = document.getElementById('color-font')
fontColorInput.addEventListener('input', (e) => {
  currentFontColor = e.target.value
  localStorage.setItem('yourFontColor', e.target.value)
  setBodyStyle()
})
const fontSizeInput = document.getElementById('size-font')
fontSizeInput.addEventListener('input', (e) => {
  currentFontSize = `${e.target.value}px`
  localStorage.setItem('yourFontSize', `${e.target.value}px`)
  setBodyStyle()
})