let searchBtn = document.querySelector('.bx-search');
let navbar = document.querySelector('.header-bottom')
searchBtn.addEventListener('click', ()=>{
navbar.classList.toggle('showInput');
})

let closeMenuIcon = document.querySelector('#bx-x');

let user = document.querySelector('.bx-user');
let userAccount = document.querySelector('.user-information')
user.addEventListener('click', ()=>{
    userAccount.style.right = "0px"
})

closeMenuIcon.addEventListener('click', ()=>{
    userAccount.style.right = "-400px"
})

let shopping = document.querySelector('.shopping')
let shoppingBag = document.querySelector('.bx-shopping-bag');
let closeMenu = document.querySelector('.bx-x-circle')
shoppingBag.addEventListener('click', ()=>{
    shopping.style.right = '0px'
});

closeMenu.addEventListener('click', ()=>{
    shopping.style.right = "-400px"
});


// Sidebar open and close 
let menuOpenBtn = document.querySelector('.bx-menu')
let menuCloseBtn = document.querySelector('.bx-x')
let navigation = document.querySelector('.navigation');

menuOpenBtn.addEventListener("click", ()=>{
    navigation.style.left = "0"
})
menuCloseBtn.addEventListener("click", ()=>{
    navigation.style.left = "-100%"
})

let pageSubMenu =  document.querySelector('.pages-sub-menu')
let shopSubMenu =  document.querySelector('.shop-sub-menu')
let pagesArrow = document.querySelector('.pages-sub-menu-arrow')
let shopArrow = document.querySelector('.shop-sub-menu-arrow')

pagesArrow.addEventListener('click', ()=>{
    navigation.classList.toggle("show1")
})
shopArrow.addEventListener("click", ()=>{
    navigation.classList.toggle("show2")
});



// Testimonial section 
 const customerImg = document.querySelector('#customer-img');
 const customerName = document.querySelector("#customer-name");
 const customerText = document.querySelector("#customer-text");
const testBtn = document.querySelectorAll('.test-btn');  


let index = 0;
let customers = [];

function Customer(img, name, text){
    this.img = img ;
    this.name = name;
    this.text = text;
}

function creatCustomer(img, name, text){
    let Img = `./img/${img}.jpg`;
    
    let customer = new Customer(Img, name, text);
    customers.push(customer);
}

creatCustomer(0, "Sumit", 'This company is realy honest and they know that how to complete their work perfectly. I say you to belive them and give a chance to help you.')
creatCustomer(1, "Mark Zukarbark", 'It ordered a product in this ecommerce site and they delivery me the product in the perfect time and the product was absolutely thats which i chose.')
creatCustomer(2, "Tom Cruise", 'This company is realy honest and they know that how to complete their work perfectly. I say you to belive them and give a chance to help you.')
creatCustomer(3, "Harry", 'It is the best e-commerce site for order any product in online. They sells product in cheaper rate and the delivery system is absolutely awesome.')


testBtn.forEach(function(button){
    button.addEventListener('click', (e)=>{
        if(e.target.parentElement.classList.contains('prev-btn')){
            if(index === 0){
                index = customers.length;
            }
            index--
            customerImg.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }

        if(e.target.parentElement.classList.contains('next-btn')){
            index++
            if(index === customers.length){
                index = 0;
            }
            customerImg.src = customers[index].img;
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    });
  
});

// Pro-details-page 

let mainImg = document.getElementById('main-img');
let smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}
