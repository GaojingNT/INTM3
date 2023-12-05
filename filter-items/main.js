// import{product} from './data/products.js'


const items = require('./data/products.js');

function itemList(userItems){
    const items =userItems

    const initialPage = () =>{
        const input = document.querySelector('input')
        input.addEventListener('input',filterItemsHandler)   
        showItems(items) 
    }
    const filterItemsHandler = (event) =>{
        const inputValue  = event.target.value.toLowerCase()
        const filter = items.filter((product)=>
        product.keywords.toLowerCase().includes(inputValue))
        showItems(filter)

    } 
    const showItems = (items) => {
        const productsUl = document.querySelector('#ul')
        productsUl.textContent= ''
        items.forEach((product) => {
            const liElement = document.createElement('li')
            liElement.textContent = `ID:${product.id},NAME:${product.name}`
            productsUl.appendChild(liElement)
        });
    }
    return {
        initialPage,
        filterItemsHandler,
        showItems
      }
}