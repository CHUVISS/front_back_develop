// Функции для работы с модальными окнами
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('modal--active');
    document.body.style.overflow = 'auto';
  }
}

// Закрытие модального окна при клике вне его содержимого
document.addEventListener('DOMContentLoaded', function() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('modal--active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Закрытие по клавише Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('modal--active')) {
          modal.classList.remove('modal--active');
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
});

// Функция для обработки формы обратной связи
function handleContactForm(e) {
  e.preventDefault();
  
  // Здесь обычно отправка формы на сервер
  // Для демонстрации просто показываем модальное окно успеха
  setTimeout(() => {
    openModal('successModal');
    
    // Сброс формы
    const form = document.querySelector('.form');
    if (form) form.reset();
  }, 1000);
  
  return false;
}

// Функция для обработки подписки на новости
function handleSubscription(e) {
  e.preventDefault();
  
  const emailInput = document.querySelector('#subscriptionEmail');
  if (emailInput && emailInput.value) {
    setTimeout(() => {
      openModal('subscriptionModal');
      emailInput.value = ''; // Очищаем поле ввода
    }, 1000);
  } else {
    alert('Пожалуйста, введите email для подписки');
  }
  
  return false;
}

// Функция для добавления товара в корзину
function addToCart(productId) {
  const cartBtn = document.querySelector(`[data-product="${productId}"]`);
  if (cartBtn) {
    const originalText = cartBtn.innerHTML;
    cartBtn.innerHTML = '<i class="fas fa-check"></i> Добавлено';
    cartBtn.classList.add('button--disabled');
    cartBtn.disabled = true;
    
    setTimeout(() => {
      cartBtn.innerHTML = originalText;
      cartBtn.classList.remove('button--disabled');
      cartBtn.disabled = false;
    }, 2000);
  }
}

// Функция для выбора карточки товара
function selectProductCard(cardId) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.classList.remove('product-card--selected');
  });
  
  const selectedCard = document.getElementById(cardId);
  if (selectedCard) {
    selectedCard.classList.add('product-card--selected');
  }
}