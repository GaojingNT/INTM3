// import{product} from './data/products.js'


const items = require('./data/products.js');

function itemList(userItems){
    const items =userItems

    // ฟังก์ชัน initialPage ในที่นี้เป็นการเตรียมหน้าเพจเริ่มต้น
    const initialPage = () => {
    // เลือกอิลิเมนต์ input จากเอกสาร HTML
    const input = document.querySelector('input');
    
    // เพิ่มการฟังก์ชัน filterItemsHandler เมื่อมีการ input ในอิลิเมนต์ input
    input.addEventListener('input', filterItemsHandler);
    
    // เรียกใช้ showItems เพื่อแสดงรายการสินค้าทั้งหมด
    showItems(items);
    }

    
    // ฟังก์ชัน filterItemsHandler ในที่นี้เป็นการจัดการเหตุการณ์เมื่อมีการ input ใน input field
    const filterItemsHandler = (event) => {
    // ดึงค่าที่ป้อนลงใน input แล้วแปลงเป็นตัวอักษรตัวเล็ก
    const inputValue = event.target.value.toLowerCase(); 
    
    // กรองรายการสินค้าที่มีคำหลักที่มีการรวมคำที่ผู้ใช้ป้อนลงใน input
    const filteredProducts = items.filter((product) =>
      product.keywords.toLowerCase().includes(inputValue)
    );
    
    // เรียกใช้ showItems เพื่อแสดงรายการสินค้าที่ผ่านการกรอง
    showItems(filteredProducts);
  }


    // ฟังก์ชัน showItems ในที่นี้เป็นการแสดงรายการสินค้า
    const showItems = (items) => {
    // เลือกอิลิเมนต์ <ul> จากเอกสาร HTML
    const productsUl = document.querySelector('#ul');
    
    // ลบข้อความทั้งหมดภายใน <ul> เพื่อเตรียมการแสดงผลรายการสินค้าใหม่
    productsUl.textContent = '';
    
    // สร้าง <li> element สำหรับแต่ละรายการสินค้าแล้วแสดงผลใน <ul>
    items.forEach((product) => {
      const liElement = document.createElement('li');
      liElement.textContent = `ID:${product.id}, NAME:${product.name}`;
      productsUl.appendChild(liElement);
    });
  }
  
    return {
        initialPage,
        filterItemsHandler,
        showItems
      }
}