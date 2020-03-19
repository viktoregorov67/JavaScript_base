const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('fadeInDown');
    modal.classList.add('fadeOutDown');
    setTimeout(function () {
        modal.classList.add('hidden');
    }, 1000);
});

showBtn.addEventListener('click', function () {
    modal.classList.remove('fadeOutDown', 'hidden');
    modal.classList.add('animated', 'fadeInDown');
});