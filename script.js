const gift = document.getElementById('gift');
const giftLid = document.getElementById('giftLid');
const giftButton = document.getElementById('giftButton');
const message = document.getElementById('message');

function openGift(){
  if (gift.classList.contains('open')) return;
  gift.classList.add('open');
  message.classList.add('show');
  // opcional: enfoque de accesibilidad
  message.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

giftButton.addEventListener('click', openGift);

// También permite tocar/click en la caja completa
gift.addEventListener('click', (e) => {
  // evita que el click repetido dispare raro
  openGift();
});
