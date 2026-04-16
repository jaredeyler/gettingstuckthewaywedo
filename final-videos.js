const videoCards = document.querySelectorAll('.video-card');
console.log(videoCards);

videoCards.forEach(function(card) {
    const thumbnail = card.querySelector('img');
    thumbnail.addEventListener('click', function() {
        thumbnail.classList.add('hidden');
        const iframe = card.querySelector('iframe');
        iframe.classList.remove('hidden');
    });
});

console.log(videoCards.length);