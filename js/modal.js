// Функции для работы с модальными окнами
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Возвращаем скролл
    }
}

// Закрытие модального окна при клике вне его содержимого
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
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
        const form = document.querySelector('.contact-form');
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