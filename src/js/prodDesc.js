import {carrouselProd} from './carrouselFunction.js';
import { addToCart } from './cart.js';
function mostrarImagen(imagesArray, name, sizes, colors, brand, price, description, stock, discount, id) { 
    //* Creating the product info
    // Generar la imagen
    const image = document.createElement('IMG');
    image.src = imagesArray[0];
    image.alt = "product image";
    image.classList.add('product-img');

    const prev = document.createElement('div');
    prev.classList.add('previus', 'hero-btns');
    prev.innerHTML = '<';
    prev.id = 'previus-prod';
    const next = document.createElement('div');
    next.classList.add('next', 'hero-btns');
    next.innerHTML = '>';
    next.id = 'next-prod';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('product-img-desc-container', 'product-img-container');
    imageContainer.appendChild(image);
    imageContainer.appendChild(prev);
    imageContainer.appendChild(next);

    carrouselProd(imageContainer, imagesArray);

    const productDescriptionTitle = document.createElement('h3');
    productDescriptionTitle.classList.add('product-description-title');
    productDescriptionTitle.innerHTML = 'Descripción';
    
    const productDescription = document.createElement('p');
    productDescription.classList.add('product-desc');
    productDescription.innerHTML = description;
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.appendChild(imageContainer);
    productInfo.appendChild(productDescriptionTitle);
    productInfo.appendChild(productDescription);
    
    //* Creating the product description
    const brandName = document.createElement('p');
    brandName.classList.add('product-brand');
    brandName.innerHTML = brand;
    
    const title = document.createElement('h2');
    title.classList.add('product-name');
    title.innerHTML = name;

    
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price', 'product-price-desc');
    let formatedPrice = price.toLocaleString('en-US');
    productPrice.innerHTML = `$${formatedPrice}`;
    
    const size = document.createElement('p');
    size.classList.add('product-sizes');
    size.innerHTML = `<span class="bold">Medidas:</span> ${sizes}`;
    
    const color = document.createElement('p');
    color.classList.add('product-color');
    color.innerHTML = `<span class="bold">Colores:</span> ${colors}`;
    
    const stockInfo = document.createElement('p');
    stockInfo.classList.add('product-stock');
    stockInfo.innerHTML = `<span class="bold">Stock:</span> ${stock}`;

    const buyButton = document.createElement('button');
    buyButton.classList.add('buy-btn');
    buyButton.innerHTML = 'Comprar ahora';

    const favoritesButton = document.createElement('button');
    favoritesButton.classList.add('favorites-btn');
    favoritesButton.innerHTML = 'Agregar a favoritos';
    
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-btn');
    addToCartButton.innerHTML = 'Agregar al carrito';
    addToCartButton.addEventListener('click', () => {
        addToCart();
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    buttonsContainer.appendChild(buyButton);
    buttonsContainer.appendChild(favoritesButton);
    buttonsContainer.appendChild(addToCartButton);
    
    const productDescriptionContainer = document.createElement('div');
    productDescriptionContainer.classList.add('product-description-container');
    productDescriptionContainer.appendChild(brandName);
    productDescriptionContainer.appendChild(title);
    productDescriptionContainer.appendChild(productPrice);
    if (discount != 0) {
        let disc = price / 100;
        let newPrice = disc * discount - price;
        newPrice -= newPrice * 2; 
        newPrice = newPrice.toLocaleString('en-US')

        const discountPrice = document.createElement('p');
        discountPrice.classList.add('product-price', 'product-discount-price', 'product-price-desc');
        discountPrice.innerHTML = `$${newPrice}`;
        

        const discountInfo = document.createElement('p');
        discountInfo.classList.add('product-discount-info');
        discountInfo.innerHTML = `${discount}% OFF`;
        
        const discountContainer = document.createElement('div');
        discountContainer.classList.add('product-discount-container');
        discountContainer.appendChild(discountPrice);
        discountContainer.appendChild(discountInfo);

        productPrice.classList.add('old-price');
        productPrice.classList.remove('product-price', 'product-price-desc');
        
        productDescriptionContainer.appendChild(discountContainer);
    }
    productDescriptionContainer.appendChild(size);
    productDescriptionContainer.appendChild(color);
    productDescriptionContainer.appendChild(stockInfo);
    productDescriptionContainer.appendChild(buttonsContainer);

    //* Creating the product overall container
    const productOverlay = document.createElement('div');
    productOverlay.classList.add('product-overlay', 'container');
    productOverlay.appendChild(productInfo);
    productOverlay.appendChild(productDescriptionContainer);

    const overlay = document.createElement('DIV');
    overlay.appendChild(productOverlay);
    overlay.classList.add('overlay');
    
    // Boton para cerrar img
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // Al presionar, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');   
}

export { mostrarImagen };