// cart-core.js

// Глобальная переменная cart
window.cart = JSON.parse(localStorage.getItem('cart')) || [];

// Сохранение корзины
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(window.cart));
}

// Добавление товара
function addToCart(product) {
  const index = window.cart.findIndex(p => p.id === product.id);
  if (index !== -1) {
    window.cart[index].qty += 1;
  } else {
    window.cart.push({ ...product, qty: 1 });
  }
  saveCart();
  renderCart();
  updateHeaderCart();
}

// Удаление товара
function removeFromCart(id) {
  window.cart = window.cart.filter(p => p.id !== id);
  saveCart();
  renderCart();
  updateHeaderCart();
}

// Изменение количества
function changeQty(id, delta) {
  const item = window.cart.find(p => p.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    renderCart();
    updateHeaderCart();
  }
}

// Очистка корзины
function clearCart() {
  window.cart = [];
  saveCart();
  renderCart();
  updateHeaderCart();
}

// Экспорт функций в window (если нужно глобально)
window.saveCart = saveCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;
window.clearCart = clearCart;
