
// npm test CommonJS
// const { template } = require('@babel/core')
// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

// browser ES module
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

function paginateManagement(items, rows) {
  const rowsPerPage = rows; // กำหนดจำนวนรายการที่แสดงในแต่ละหน้า
  const products = items; // เก็บข้อมูลทั้งหมด


  const showItemsOfCurrentPage = (currentPageNumber) => {
    // เรียกใช้ฟังก์ชัน getItemsOfCurrentPage เพื่อรับข้อมูลรายการสินค้าในหน้าปัจจุบัน
    const ItemsOfCurrent = getItemsOfCurrentPage(
        products,
        currentPageNumber,
        rowsPerPage
    )

// หา DOM element ที่มี id เป็น 'products'
const productsUl = document.getElementById('products');
        // สร้าง elements ของรายการสินค้าแต่ละรายการและแสดงผลบนหน้า HTML
      ItemsOfCurrent.forEach((item)=>{
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      productsUl.appendChild(liElement)
    })
  }

  const pageHandler = (event) => {
    const productsUl = document.getElementById('products')
        // ลบข้อมูลทั้งหมดที่อยู่ใน 'products' เพื่อทำการรีเฟรชหน้า
    productsUl.textContent=''

     // ค้นหาทุก button และเปลี่ยน style เป็น border: 1px solid #999
    const pageStyle = document.querySelectorAll('button')
    pageStyle.forEach((page)=>(page.style = 'border: 1px solid #999'))
 // กำหนด currentPage โดยหาก event ไม่มีค่าหรือ target.id ไม่มีค่า 
 //ให้กำหนดเป็น 1

    const currentPage = event?.target.id ?? 1
    console.log(currentPage)

 // เรียกใช้ฟังก์ชัน showItemsOfCurrentPage เพื่อแสดงข้อมูลในหน้าปัจจุบัน
    showItemsOfCurrentPage(currentPage)

// ค้นหา button ของหน้าปัจจุบันและเปลี่ยน style เป็น background-color: LightSteelBlue
    const targetPageButton = document.getElementById(currentPage)
    targetPageButton.style = 'background-color: LightSteelBlue'

  }

  const showPageNumbers = () => {

        // คำนวณหาจำนวนหน้าทั้งหมด
    const totalPages = getTotalPages(products, rowsPerPage)

    // ค้นหา DOM element ที่มี class เป็น 'pagination'
    const paginateDiv = document.querySelector('.pagination')

   // สร้างปุ่มหน้าต่าง ๆ และเพิ่ม event listener สำหรับการคลิก
    for (let page = 1; page <= totalPages; page++) {
      const buttonPage = document.createElement('button')
      buttonPage.textContent = page
      buttonPage.setAttribute('id', page)
      paginateDiv.appendChild(buttonPage)
      buttonPage.addEventListener('click', pageHandler) // add event
    }
  }

return {
  showPageNumbers,
  pageHandler
}
}


// npm test CommonJS
// module.exports = paginateManagement

// browser ES module
export { paginateManagement }
const { showPageNumbers,  pageHandler } =
    paginateManagement(products, 10)
showPageNumbers()
pageHandler()
