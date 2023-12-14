
// npm test CommonJS
// const { template } = require('@babel/core')
// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

// browser ES module
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

function paginateManagement(items, rows) {
    const products =items
    const rowsPerPage = rows

const showPageNumbers= () =>  {
    const totalPages = getTotalPages(products,rowsPerPage)
    const paginationDiv  = document.querySelector('.pagination')
    for(let page =1 ; page <= totalPages ; page++ ){
        const pageButton = document.createElement('button')
        pageButton.textContent = page
        pageButton.setAttribute('id',page)
        paginationDiv.appendChild(pageButton)
        pageButton.addEventListener('click', pageHandler)
    }
}
const  showItemsOfCurrentPage = (currentPageNumber) => {
    const ItemsOfCurrentPage =getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
   
    const productsUl = document.getElementById('products')
    ItemsOfCurrentPage.forEach((item)=>{
    const liElement = document.createElement('li')
    liElement.textContent =`ID:${item.id},NAME:${item.name}`
    productsUl.appendChild(liElement)

    })
const pageHandler= (event)  =>{
    const productsUl = document.getElementById('products')
    productsUl.textContent= ''

    const buttonStyle = document.querySelectorAll('button')
    console.log(currentPage)
    buttonStyle.forEach((page) => (page.style ='border: 1px solid #999' ))

    const currentPage = event?.target.id ?? 1
    showItemsOfCurrentPage(currentPage)

    const buttonBackground  = document.getElementById(currentPage)
     buttonBackground.style = 'background-color: LightSteelBlue'
    
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