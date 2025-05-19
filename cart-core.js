let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateHeaderCart();
}

function addToCart(product) {
  const index = cart.findIndex(p => p.id === product.id);
  if (index !== -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
}

function changeQty(id, delta) {
  const item = cart.find(p => p.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
  }
}

function clearCart() {
  cart = [];
  saveCart();
}

function attachEvents() {
  document.querySelectorAll('.plus').forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();
      changeQty(btn.dataset.id, 1);
    })
  );

  document.querySelectorAll('.minus').forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();
      changeQty(btn.dataset.id, -1);
    })
  );

  document.querySelectorAll('.delete-product').forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();
      removeFromCart(btn.dataset.id);
    })
  );
}

document.querySelector('.clear-cart')?.addEventListener('click', e => {
  e.preventDefault();
  clearCart();
});

function updateHeaderCart() {
  const totalAmountEl = document.querySelector('.total-amount');
  const badgeEl = document.querySelector('.badge');

  let totalSum = 0;
  let totalQty = 0;

  cart.forEach(item => {
    totalSum += item.price * item.qty;
    totalQty += item.qty;
  });

  if (totalAmountEl) totalAmountEl.textContent = `${totalSum} L`;
  if (badgeEl) badgeEl.textContent = totalQty;
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseInt(btn.dataset.price),
      image: btn.dataset.image,
      weight: btn.dataset.weight,
      pcs: btn.dataset.pcs
    };
    addToCart(product);
  });
});

renderCart();
updateHeaderCart();