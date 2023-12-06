import { getItemsOfCurrentPage ,getTotalPages } from "./lib/paginate.js"
import { products } from "./data/products.js"

function paginateManagement(items , rows){
const products = items
const rowsPerPage = rows

const showPageNumbers = () => {
    const totoalPages = getTotalPages(allItems  ,rowsPerPage)
    const paginationageDiv  = document.querySelector('.pagination')
    for(let page = 1 ; page <= totoalPages;page++ ) {
    const buttonPage = document.createElement('button')
    buttonPage.textContent = page
    buttonPage.setAttribute('id',page)
    paginationageDiv.appendChild(buttonPage)
    buttonPage.addEventListener('click', pageHandler)
    }

}
const showItemsOfCurrentPage =(currentPageNumber)=> {
    const  ItemsOfCurrent = getItemsOfCurrentPage(
        currentPageNumber,products,rowsPerPage
    )
    const productsUl = document.getElementById('products')
    items.ItemsOfCurrent.forEach((items)=>{
        const liElement = document.createElement('li')
        liElement.textContent = (`ID:${items.id} , NAME:${items.name}`)
    })
        
}
    const pageHandler = (event)=> {
    const pageNumberBotton =document.getElementById('product')
    pageNumberBotton.textContent = ''
    
    const buttonStyle  = document.createElement('button') 
    buttonStyle.forEach((page)=>(page.style = 'border: 1px solid #999'))
    
    const currentPage =event?.target.id ?? 1
    console.log(currentPage)
    showItemsOfCurrentPage(currentPage)


}

}
