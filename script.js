document.addEventListener('DOMContentLoaded',() =>{
  const products = [
    {id: 1, name : "Tea", price : 29.99},
    {id: 2, name : "Coffee", price : 59.99},
    {id: 3, name : "Laptop", price : 129.99},
    {id: 4, name : "Coffee", price : 59.99},
    {id: 5, name : "heheh", price : 1299.99}
  ]

const cart = [];

const productList = document.getElementById('product-list');

const cartItems = document.getElementById('cart-items');

const cartTotal = document.getElementById('cart-total');

const emptyCart = document.getElementById('empty-cart');

const totalPriceDisplay = document.getElementById('total-price');

const checkoutBtn = document.getElementById('checkout-btn');


products.forEach((product) => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML= `<span>${product.name} - ${product.price.toFixed(2)}</span> <button data-id="${product.id}">Add to cart </button>`;

  productList.appendChild(productDiv);
});

productList.addEventListener('click', (e)=>{
  if(e.target.tagName === 'BUTTON'){
    const productId =  parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    console.log(product);
    
    addToCart(product);
  }

})

function addToCart (product){
  cart.push(product);
  console.log(cart);
  renderCart();
}

function renderCart(){
  cartItems.innerHTML = "";
  let totalPrice = 0;

  if(cart.length > 0){
    emptyCart.classList.add('hidden');
    cartTotal.classList.remove('hidden');
    cart.forEach((item, index) => {
      totalPrice += item.price;
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `${item.name} - ${item.price.toFixed(2)}`;
      cartItems.appendChild(cartItem);
      totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
    })
  }else{
    emptyCart.classList.remove('hidden');
    totalPriceDisplay.textContent = `$0.00`
  }

  checkoutBtn.addEventListener('click', () =>{
    cart.length = 0;
    alert("Check out successfully");
    renderCart();
  })
};

});


