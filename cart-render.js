function renderCart() {
  const container = document.querySelector('.list-off-added-products');
  const headerTotal = document.querySelector('.cart-header-total');
  const footerTotal = document.querySelector('.cart-footer-total');
  container.innerHTML = '';

  let totalSum = 0;

  cart.forEach(item => {
    totalSum += item.price * item.qty;

    const li = document.createElement('li');
    li.className = 'added-item';
    li.innerHTML = `
      <div class="div-block-7">
        <div class="added-image-wrapper"><img src="${item.image}" width="100" class="product-image"></div>
        <div class="div-block-5">
          <div>
            <div class="added-product-name">${item.name}</div>
            <div class="div-block-3">
              <div class="weight">${item.weight}</div>
              <div class="pcs">${item.pcs}</div>
            </div>
          </div>
          <div>
            <div class="qty-buttons-wrapper">
              <a href="#" class="minus w-inline-block" data-id="${item.id}">−</a>
              <div class="counter"><div class="qty">${item.qty}</div></div>
              <a href="#" class="plus w-inline-block" data-id="${item.id}">+</a>
            </div>
          </div>
        </div>
      </div>
      <div class="div-block-6">
        <a href="#" class="delete-product w-inline-block" data-id="${item.id}">
        <div class="w-embed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="currentColor"></path>
        </svg>
        </div>
        </a>
        <div class="product-price">${item.price * item.qty} L</div>
      </div>
    `;
    container.appendChild(li);
  });

  if (headerTotal) headerTotal.textContent = `${totalSum} L`;
  if (footerTotal) footerTotal.textContent = `${totalSum} L`;

  attachEvents();
}