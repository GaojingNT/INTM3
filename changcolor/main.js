let currentBgColor =null
,currentFontColor = null
,currentFontSize =null 
window.addEventListener('load'  , () =>{
    currentBgColor = localStorage.getItem('yourBgColor')
    currentFontColor = localStorage.getItem('yourFontColor')
    currentFontSize= localStorage.getItem('yourFontsize')
})
function setBodyStyle(){
    document.body.style = `font-size:${currentFontSize};color:${currentFontColor};background-color:${currentBgColor}`
}
const colorInput  = document.getElementById('color-bg')
// console.log(colorInput)

colorInput.addEventListener('input' , (e)=> {
 currentBgColor =e.target.value //target: เป็น property ของ e ที่ระบุถึง element ที่เกิดเหตุการณ์ input. 
                                //value: เป็น property ของ target ที่ระบุถึงค่าที่ป้อนลงใน element.
//  console.log(currentBgColor) //เมื่อคลิกไปที่สีไหนจะปรากฎสีนั้นใน console
localStorage.setItem('yourBgColor', e.target.value) //สีที่เลือกไว้จะถูกเก็บไว้ใน localStorage โดยใช้ key 'yourBgColor'
setBodyStyle()
})
// ===========================================================================
const  fontColorInput = document.getElementById('color-font')
// console.log(fontColorInput)
fontColorInput.addEventListener('input' , (e)=> {
 currentFontColor =e.target.value
// console.log(currentFontColor)
localStorage.setItem('yourfontColor',e.target.value)
setBodyStyle()
})

const fontSizeInput = document.getElementById('size-font')
// console.log(fontSizeInput)
fontSizeInput.addEventListener('input',(e)=>{
 currentFontSize= `${e.target.value}px `
localStorage.setItem("yourFontSize" ,`${e.target.value}px `)
setBodyStyle()
})

