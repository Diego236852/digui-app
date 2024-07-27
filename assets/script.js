window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('info-screen').classList.remove('hidden');
        updateDots(1);
    }, 3000); // Espera 3 segundos antes de hacer la transición
});

let currentPage = 1;

function nextPage() {
    document.getElementById('page-' + currentPage).classList.add('hidden');
    currentPage++;
    document.getElementById('page-' + currentPage).classList.remove('hidden');
    updateDots(currentPage);
}

function updateDots(page) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('dot-' + i).classList.remove('active');
    }
    document.getElementById('dot-' + page).classList.add('active');
}

function showLogin() {
    document.getElementById('info-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}
