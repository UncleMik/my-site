// Только один открытый пункт FAQ одновременно
document.querySelectorAll('.faq__item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq__item').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
