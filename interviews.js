const interviewCards = document.querySelectorAll('.interview-card');
console.log(interviewCards);

interviewCards.forEach(function(card) {
    const thumbnail = card.querySelector('img');
    thumbnail.addEventListener('click', function() {
        thumbnail.classList.add('hidden');
        const iframe = card.querySelector('iframe');
        iframe.classList.remove('hidden');
    });
});

console.log(interviewCards.length);