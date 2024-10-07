const form = document.querySelector('.community .comment form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = form.querySelector('input[type="text"]');

    const comment = document.createElement('p');
    comment.textContent = input.value;

    const time = document.createElement('time');
    time.datetime = new Date().toISOString();
    time.textContent = new Date().toLocaleString();
    comment.appendChild(time);

    const community = input.closest('.community');
    community.querySelector('.replied').appendChild(comment);
    input.value = '';
});