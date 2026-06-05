// login.js — E-Wallet
// Validações futuras de login podem ser adicionadas aqui.

document.querySelector('form')?.addEventListener('submit', function (e) {
    const email = this.querySelector('input[type="email"]').value;
    const senha = this.querySelector('input[type="password"]').value;

    if (!email || !senha) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
    // Aqui poderia ser feita autenticação via API
});