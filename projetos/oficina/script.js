// Interações demonstrativas: não usa contatos de empresas reais.
document.querySelectorAll('.demo-action').forEach(button => button.addEventListener('click', () => {
 const feedback = document.querySelector('.demo-feedback');
 feedback.textContent = 'Esta é uma empresa fictícia. Em um site real, este botão abriria o contato da empresa. Para pedir um site assim, volte ao portfólio e fale com Eduardo.';
 feedback.scrollIntoView({behavior: 'smooth', block: 'nearest'});
}));
