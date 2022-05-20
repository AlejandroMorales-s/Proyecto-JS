const addToCart = () => {
    let btns = document.querySelector('.add-to-cart-btn');
    btns.addEventListener('click', addToCartClicked);
}

const cart = document.querySelector('.cart');

const addToCartClicked = (e) => {
    const btn = e.target;
    const shopItem = btn.closest('.product-overlay');
    const title = shopItem.querySelector('.product-name').textContent;
    const price = shopItem.querySelector('.product-price').textContent;
    const img = shopItem.querySelector('.product-img').src;
    
    addItemToShoppingCart(title, price, img);
}

const addItemToShoppingCart = (title, price, img) => {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContents = `
        <div class="cart-item">
            <img class="cart-img" src="${img}" alt="">
            <div class="cart-item-details">
                <span class="cart-name">${title}</span>
                <span class="cart-price">${price}</span>
            </div>
        </div>
    `;
    shoppingCartRow.innerHTML = shoppingCartContents;
    cart.appendChild(shoppingCartRow);
    alert('Producto agregado a carrito de Compras');
}


const removeFromCartClicked = (e) => {
    const btn = e.target;
    cart.innerHTML = '';
    alert('Gracias por su compra');
}
let btns = document.querySelector('.cart-refresh-btn');
btns.addEventListener('click', removeFromCartClicked);

export {addToCart};