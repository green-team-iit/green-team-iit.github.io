// selecting elements from the DOM
let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

// opening and closing the cart
iconCart.addEventListener('click', function(){
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})

// event listner to closinh catr
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})

//  array containing product data
let product = [
    {
        id: 1,
        name:"woven placement",
        image: "woven placement.jpg",
        price: 2400,
        "options":[
            { name: "Size", values: ["Small", "Medium"] },
            { name: "Color", values: ["Black", "Brown"] },
        ]

        
    },
    {
        id: 2,
        name:"Bamboo Bottle",
        image: "bamboo bottle.jpg",
        price: 350,
        "options":[
            { name: "Size", values: ["Small", "Medium", "Large"] },
            { name: "Color", values: ["Brown"] },
        ]
    },
    {
        id: 3,
        name:"Eco-Friendly Pen",
        image: "Eco-Friendly Pen.jpg",
        price: 1500,
        "options":[
            {name: "Size", values:["standurd size"]},
            
            { name: "Color", values: ["Black", "Blue", "Red"] },
        ]
    },
    {
        id: 4,
        name:"Jute Bag",
        image: "jute bag.jpg",
        price: 1400,
        "options":[
            { name: "Size", values: ["Small", "Medium", "Large"] },
            { name: "Color", values: ["Brown", "Yellow"] },
        ]
    },
    {
        id: 5,
        name:"Handmade Earrings",
        image: "earrings.jpg",
        price: 2900,
        "options":[
            { name: "Size", values: ["4cm"] },
            { name: "Color", values: ["Red", "Blue", "Green"] },
        ]
    },
    {
        id: 6,
        name:"Tooth Brush",
        image: "tooth brush.jpg",
        price: 2000,
        "options":[
            { name: "Size", values: ["Small", "Medium", "Large"] },
            { name: "Color", values: ["Red", "Blue", "Green"] },
        ]
    },
    {
        id: 7,
        name:"Handmade Wall art",
        image: "handmade wall art.jpg",
        price: 5000,
        "options":[
            { name: "Size", values: ["Medium", "Large"] },
            { name: "Color", values: ["Green"] },
            
        ]
    },
    {
        id: 8,
        name:"Palm Leaf Plate",
        image: "palm plate.jpg",
        price: 2000,
        "options":[
            { name: "Size", values: ["Medium"] },
            { name: "Color", values: ["Brown"] },
        ]
    },
    {
        id: 9,
        name:"Handmade Necklace",
        image: "necklece.jpg",
        price: 3400,
        "options":[
            { name: "Size", values: ["40cm", "50cm"] },
            { name: "Color", values: ["Red", "Blue", "Green"] },
        ]
    },
    {
        id: 10,
        name:"Plant Pot",
        image: "plant pot.jpg",
        price: 2300,
        "options":[
            { name: "Size", values: ["Small", "Medium", "Large"] },
            { name: "Color", values: ["Brown"] },
        ]
    },
    {
        id: 11,
        name:"Yoga Mat",
        image: "mat.jpg",
        price: 4000,
        "options":[
            { name: "Size", values: [ "Medium", "Large"] },
            { name: "Color", values: ["Red", "Brown", "Gray"] },
        ]
    },
    {
        id: 12,
        name:"Handmade Hat",
        image: "hat.jpg",
        price: 3400,
        "options":[
            { name: "Size", values: [, "Medium", "Large"] },
            { name: "Color", values: ["brown", "white"] },
        ]
    },
   
]

addDataToHTML();
//show datas product in list 
function addDataToHTML(){
    // remove datas default from HTML
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    // add new data
    if(product != null) // if has data
    {
        product.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="img/${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button onclick="addCart(${product.id})">Add To Cart</button>`;
            // append product elements to the list
            listProductHTML.appendChild(newProduct);

        });
    }
}
//use sessionStorage so the cart doesn't get lost on refresh page
let listCart = null;
function checkCart(){
    if(sessionStorage.getItem("listCart")){
        listCart = JSON.parse(sessionStorage.getItem("listCart"));
    }else{
        listCart = [];
    }
}
checkCart();
function addCart($idProduct){
    let productsCopy = JSON.parse(JSON.stringify(product));
    // If this product is not in the cart
    if(!listCart[$idProduct]) 
    {
        listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
    }else{
        //If this product is already in the cart.
        //I just increased the quantity
        listCart[$idProduct].quantity++;
    }
    sessionStorage.setItem("listCart", JSON.stringify(listCart));
    addCartToHTML();
}
addCartToHTML();
// update cart data in html
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="img/${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
}
function changeQuantity($idProduct, $type){
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;

            // if quantity <= 0 then remove product in cart
            if(listCart[$idProduct].quantity <= 0){
                delete listCart[$idProduct];
            }
            break;

        default:
            break;
    }
    // save new data in sessionStorage
    sessionStorage.setItem("listCart", JSON.stringify(listCart));
    // reload html view cart
    addCartToHTML();
}