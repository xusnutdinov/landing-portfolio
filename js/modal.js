const modalBtn = document.querySelectorAll('[data-modal]');
const modalCloseBtn = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal')

modalBtn.forEach( function (item) {
    item.addEventListener('click', function (event) {
        let modalContentId = '#' + event.currentTarget.getAttribute('data-modal');
        let modalContent = document.querySelector(modalContentId);
        modalContent.querySelector('.modal__content').addEventListener('click', function (event){
            event.stopPropagation();
        });
        modalContent.classList.add('active');
        body.classList.add('lock');
    });
});

modalCloseBtn.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let modalContent = event.currentTarget.closest('.modal');
        modalContent.classList.remove('active');
        body.classList.remove('lock');
    });
});

modal.forEach(function (item) {
   item.addEventListener('click', function (event) {
       let currentModal = event.currentTarget;

       currentModal.classList.remove('active');
       body.classList.remove('lock');
   })
});

