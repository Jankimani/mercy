function start() {
    document.getElementById('welcome-message').classList.add('hidden');
    document.getElementById('start-btn').classList.add('hidden');
    document.getElementById('hug-message').classList.remove('hidden');
}

function restart() {
    document.getElementById('hug-message').classList.add('hidden');
    document.getElementById('welcome-message').classList.remove('hidden');
    document.getElementById('start-btn').classList.remove('hidden');
}
