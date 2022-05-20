const addToFavorites = () => {
    let btns = document.querySelector('.favorites-btn');
    btns.addEventListener('click', addToFavsClicked);
}

const cart = document.querySelector('.favs');

const addToFavsClicked = (e) => {
    const btn = e.target;
    const shopItem = btn.closest('.product-overlay');
    const title = shopItem.querySelector('.product-name').textContent;
    const price = shopItem.querySelector('.product-price').textContent;
    const img = shopItem.querySelector('.product-img').src;
    
    addItemToFavorites(title, price, img);
}

const addItemToFavorites = (title, price, img) => {
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
    alert('Producto agregado a favoritos');
}


const removeFromCartClicked = (e) => {
    const btn = e.target;
    cart.innerHTML = '';
    alert('Favoritos eliminados');
}
let btns = document.querySelector('.fav-refresh-btn');
btns.addEventListener('click', removeFromCartClicked);

export {addToFavorites};