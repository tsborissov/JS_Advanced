function lockedProfile() {
    
    Array
        .from(document.querySelectorAll('button'))
        .forEach(b => b.disabled = true);

    document.getElementById('main').addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.tagName == 'BUTTON'){
            onToggle(e);
        } else if (e.target.tagName == 'INPUT' && e.target.type == 'radio') {
            onLockToggle(e);
        }
    }

    function onToggle(e) {
        const profile = e.target.parentElement;
        const isUnlocked = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isUnlocked) {
            const infoDiv = Array
                .from(profile.querySelectorAll('div'))
                .find(d => d.id.includes('HiddenFields'));

            if (e.target.textContent == 'Show more') {
                e.target.textContent = 'Hide it';
                infoDiv.style.display = 'block';
            } else {
                e.target.textContent = 'Show more';
                infoDiv.style.display = 'none';
            }
        }
    }

    function onLockToggle(e) {
        const button = e.target.parentElement.querySelector('button');
        
        if (e.target.value == 'lock'){
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
}