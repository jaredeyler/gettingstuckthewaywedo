const filterButtons = document.querySelectorAll('.journal-filters button');
console.log(filterButtons);

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const filter = button.getAttribute('data-filter');
        
        const entryButtons = document.querySelectorAll('.journal-catalog_nav button');
        
        entryButtons.forEach(function(entry) {
            const tags = entry.getAttribute('data-tags').split(' ');
            console.log(tags);
            
            if (filter === 'all') {
                entry.classList.remove('hidden');
            } else if (tags.includes(filter)) {
                entry.classList.remove('hidden')
            } else {
                entry.classList.add('hidden');
            }
        });
    });
});
