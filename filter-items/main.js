//Node.js
// const { template } = require('@babel/core')
// const products = require('./data/products.js')

//Browser
import { products } from './data/products.js'

function itemList(userItems){
  const items = userItems

  const initialPage= () => {
    const input = document.querySelector('input')
    input.addEventListener('input', filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (e) =>{
    const inputValue = e.target.value.toLowerCase()
    const filter = items.filter((product) =>
        product.keywords.toLowerCase().includes(inputValue))
    showItems(filter)
    
  } 
  const showItems = (items) =>{
    const itemsUl=document.querySelector('#items')
    itemsUl.textContent=''
    items.forEach((product)=>{
      const newLi =document.createElement('li')
      newLi.textContent=`ID:${product.id}, NAME: ${product.name},KEYWORDS:${product.keywords}`
      itemsUl.appendChild(newLi)
    })

  }
  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}


// Node.js
// module.exports = itemList

//Browser
export { itemList }

const { initialPage, filterItemsHandler, showItems } = itemList(products)
initialPage()
