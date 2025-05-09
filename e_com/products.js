const products = {
  Electronics: [
    { id: 1, name: "Echo Dot", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Fire TV Stick", price: 39.99, image: "https://via.placeholder.com/150" }
  ],
  Clothing: [
    { id: 3, name: "Men's Jacket", price: 59.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Women's Hoodie", price: 45.99, image: "https://via.placeholder.com/150" }
  ],
  Books: [
    { id: 5, name: "Atomic Habits", price: 14.99, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Deep Work", price: 17.99, image: "https://via.placeholder.com/150" }
  ]
};
function proceedFurther() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Hi, I would like to order:\n";
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `\nTotal: $${total.toFixed(2)}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "+917828706954"; // Use country code, e.g., 911234567890 for India
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


  window.open(whatsappURL, "_blank");
}
