const vlogs = ["yqPmgSbzhvI", "B7tpTgqLdB8", "-HcuBk9bmHk","wVu1tToGAYI","E3IQKXP1QGE","Zi2wK5HwKm8"];

const randomIndex = Math.floor(Math.random() * vlogs.length);
const randomVlog = vlogs[randomIndex];
const filterButtons = document.querySelectorAll('.vlog-filters button');
console.log(randomVlog);

const iframe = document.querySelector('.video-display_vertical iframe');
iframe.setAttribute('src', 'https://www.youtube.com/embed/' + randomVlog);

const vlogButtons = document.querySelectorAll('.vlog-catalog_nav button');

vlogButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const iframe = document.querySelector('.video-display_vertical iframe');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + button.getAttribute('data-entry'));
    });
});

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const filter = button.getAttribute('data-filter');
        
        const entryButtons = document.querySelectorAll('.vlog-catalog_nav button');
        const videoFrame = document.querySelector(".video-display_vertical iframe");
        
        entryButtons.forEach(function(entry) {
            const tags = entry.getAttribute('data-tags');
            console.log(tags);
            
            if (filter === 'all') {
                entry.classList.remove('hidden');
            } else if (!tags) {
                 entry.classList.add('hidden');            
            } else if (tags.split(' ').includes(filter)) {
                entry.classList.remove('hidden')
            } else {
                entry.classList.add('hidden');
            }
        });
    });
});
