import { mostrarImagen } from './prodDesc.js';
const container = document.getElementById('products');
const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.getElementById('input-btn');
const all = document.getElementById('all');
const sports = document.getElementById('sports');
const tech = document.getElementById('tech');
const video = document.getElementById('video');
const home = document.getElementById('home');
const toys = document.getElementById('toys');

class FetchTemplate {
    static byId(id) {
        return fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let name = data.name;
            let price = data.price;
            let description = data.description;
            let images = data.images;
            let brand = data.brand;
            let stock = data.stock;
            let discount = data.discount;
            let id = data.id;
            let colors = data.colors;
            let sizes = data.sizes;
            let imagesArray = images.split(' ')
            mostrarImagen(imagesArray, name, sizes, colors, brand, price, description, stock, discount, id);
        })
        .catch(err => console.log(err));
    }
    static allProducts(products) {
        fetch(`http://localhost:3000${products}`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let name = data[i].name;
                let price = data[i].price;
                let description = data[i].description;
                let images = data[i].images;
                let brand = data[i].brand;
                let stock = data[i].stock;
                let discount = data[i].discount;
                let id = data[i].id;
                let imagesArray = images.split(' ')

                //* Creating the product image
                const img = document.createElement('img');
                img.src = imagesArray[0];
                img.alt = "product image";
                img.classList.add('product-img');

                const imgContainer = document.createElement('div');
                imgContainer.classList.add('product-img-container');
                imgContainer.appendChild(img);

                //* Creating the product price
                const productPrice = document.createElement('p');
                productPrice.classList.add('product-price');
                productPrice.innerHTML = `$${price}`;

                //* Creating the product name
                const productName = document.createElement('h3');
                productName.classList.add('product-name');
                productName.innerHTML = name;

                //* Creating the product description
                const productDescription = document.createElement('p');
                productDescription.classList.add('product-description');
                productDescription.innerHTML = description;

                //* Creating the info container
                const productInfo = document.createElement('div');
                productInfo.classList.add('product-info');
                productInfo.appendChild(productPrice);
                productInfo.appendChild(productName);
                productInfo.appendChild(productDescription);

                //* Creating the product container
                const productContainer = document.createElement('div');
                productContainer.classList.add('product-container');
                productContainer.id = id;
                productContainer.appendChild(imgContainer);
                productContainer.appendChild(productInfo);

                container.appendChild(productContainer);
            }
            const productsArray = document.querySelectorAll('.product-container');
            productsArray.forEach(product => {
                product.addEventListener('click', () => {
                    const id = product.id;
                    this.byId(id);
                })
            })
        })
        .catch(err => console.log(err));
    }
    static byCategory(category) {
        this.allProducts(`/products/category/${category}`);
    }
    static byName(name) {
        this.allProducts(`/products/search/${name}`);
    }
}

FetchTemplate.allProducts('/products');

form.addEventListener('submit', e => {
    e.preventDefault();
    container.innerHTML = '';
    const name = input.value;
    FetchTemplate.byName(name);
});

all.onclick = () => {
    container.innerHTML = '';
    FetchTemplate.allProducts('/products');
}
tech.onclick = () => {
    container.innerHTML = '';
    FetchTemplate.byCategory('technology');
}
sports.onclick = () => {
    container.innerHTML = '';
    FetchTemplate.byCategory('sports');
}
video.onclick = () => {
    container.innerHTML = '';
    FetchTemplate.byCategory('video');
}
home.onclick = () => {
    container.innerHTML = '';
    FetchTemplate.byCategory('home');
}
toys.onclick = () => {
    container.innerHTML = '';
    FetchTemplate.byCategory('toys');
}