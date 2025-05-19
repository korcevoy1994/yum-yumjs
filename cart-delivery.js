document.querySelectorAll('input[name="delivery"]').forEach(input => {
  input.addEventListener('change', () => {
    const deliveryPrice = parseInt(input.dataset.price) || 0;
    localStorage.setItem('delivery', deliveryPrice);

    const deliveryLabel = document.querySelector('.delivery-price');
    if (deliveryLabel) deliveryLabel.textContent = `${deliveryPrice} L`;

    recalculateTotal();
  });
});

function recalculateTotal() {
  const promoCode = document.querySelector('.promo-input')?.value || '';
  const delivery = parseInt(localStorage.getItem('delivery')) || 0;
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoCode === 'SUSHI10' ? 10 : 0;
  const finalAmount = total + delivery - discount;

  const toPayLabel = document.querySelector('.to-pay-amount');
  if (toPayLabel) toPayLabel.textContent = `${finalAmount} L`;
}