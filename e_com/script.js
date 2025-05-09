function showCategory(category) {
  const container = document.getElementById('products-container');
  container.innerHTML = ''; // clear old content
  const items = products[category];

  items.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
       
     <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id}, '${category}')">Add to Cart</button>
      <button onclick="buyNow(${product.id}, '${category}')" class="buy-now">Buy Now</button>
     
    `;
    container.appendChild(div);
  });
}



function addToCart(id, category) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = products[category].find(p => p.id === id);
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${item.name} added to cart`);
}

// Initial load
if (document.getElementById('products-container')) {
  showCategory('Electronics'); // default
}

// Cart logic
if (document.getElementById('cart-container')) {
  displayCart();
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-container');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    let total = 0;
    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
      `;
      container.appendChild(div);
      total += item.price;
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`;
    container.appendChild(totalDiv);
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1); // remove 1 item at position `index`
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart(); // refresh the cart view
}
