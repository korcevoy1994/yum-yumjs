function renderCheckoutSummary() {
  const container = document.querySelector('.checkout-list');
  const totalSumEl = document.querySelector('.checkout-sum');
  container.innerHTML = '';

  let totalSum = 0;

  cart.forEach(item => {
    totalSum += item.price * item.qty;

    const li = document.createElement('li');
    li.className = 'checkout-item';
    li.innerHTML = `
      <div>${item.name} × ${item.qty}</div>
      <div>${item.price * item.qty} L</div>
    `;
    container.appendChild(li);
  });

  if (totalSumEl) totalSumEl.textContent = `${totalSum} L`;
}

renderCheckoutSummary();