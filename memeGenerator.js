const memeForm = document.getElementById('meme-form');
const memesContainer = document.getElementById('memes-container');

memeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const imageUrl = document.getElementById('image-url').value;

    if (!topText || !bottomText || !imageUrl) {
        alert('All fields are required.');
        return;
    }

    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');
    memeDiv.innerHTML = `
        <img src="${imageUrl}" alt="Meme Image">
        <p class="top-text">${topText}</p>
        <p class="bottom-text">${bottomText}</p>
        <button class="delete-button">Delete</button>
    `;

    memesContainer.appendChild(memeDiv);

    memeForm.reset();
});

memesContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
    }
});
