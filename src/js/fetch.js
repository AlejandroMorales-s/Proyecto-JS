const container = document.getElementById('products');
const productsContainer = document.querySelector('.products-container');
const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.getElementById('input-btn');

class FetchTemplate {
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
                productContainer.appendChild(imgContainer);
                productContainer.appendChild(productInfo);
        
                //* Putting the product container in the container
                const productsContainer = document.createElement('div');
                productsContainer.classList.add('products-container');
                productsContainer.appendChild(productContainer);

                container.appendChild(productsContainer);
            }
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

