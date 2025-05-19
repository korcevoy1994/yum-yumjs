function applyPromoCode(code) {
  const discountLabel = document.querySelector('.discount-amount');
  const toPayLabel = document.querySelector('.to-pay-amount');
  let discount = 0;

  if (code === "SUSHI10") {
    discount = 10;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const finalAmount = total - discount;

  if (discountLabel) discountLabel.textContent = `−${discount} L`;
  if (toPayLabel) toPayLabel.textContent = `${finalAmount} L`;
}

document.querySelector('.promo-apply')?.addEventListener('click', () => {
  const input = document.querySelector('.promo-input');
  if (input) applyPromoCode(input.value.trim());
});