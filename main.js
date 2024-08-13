const switcher = document.getElementById('languageSwitcher');
switcher.addEventListener('change', (event) => {
    const lang = event.target.value;
    document.querySelectorAll('#content div').forEach((div) => {
        div.classList.add('hidden');
    });
    document.querySelector(`.${lang}`).classList.remove('hidden');
});