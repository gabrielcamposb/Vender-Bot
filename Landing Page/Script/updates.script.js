document.querySelectorAll('.update').forEach((update) => {
    update.addEventListener('mouseover', () => {
        update.style.background = 'rgba(0, 0, 0, 0.1)';
    });

    update.addEventListener('mouseout', () => {
        update.style.background = 'white';
    });
});

document.querySelectorAll('.update').forEach((update) => {
    update.addEventListener('click', () => {
        update.style.color = 'red';
    });
});