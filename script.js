// MODAL PAG INDEX


function areFieldsFilled() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    return username !== '' && password !== '';
}

function handleFormSubmit(event) {
    // Impede o envio do formulário padrão
    event.preventDefault();
    const caixaFundo = document.getElementsByClassName('modal-content');
    const errorMessage = document.getElementById('errorMessage');

    if (areFieldsFilled()) {
        // Se os campos estiverem preenchidos, esconda a mensagem de erro e vá para o próximo modal
        errorMessage.style.display = 'none';

        showNextModal('modal2');
    } else {
        // Caso contrário, exiba a mensagem de erro
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        
    }
}

function showNextModal(modalId) {
    const modals = document.querySelectorAll('.modal');
    const modal1 = document.querySelector('#modal1')
    modals.forEach(modal => modal.style.display = 'none');

    const nextModal = document.getElementById(modalId);
    if (nextModal) {
        nextModal.style.display = 'flex';
       modal1.style.display = 'flex'
    }
}

// Exibe a primeira modal ao clicar no botão "INICIAR TESTE"
document.querySelector('.btnIniciar').addEventListener('click', function() {
    showNextModal('modal1');
});

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";

    // Redireciona para a página de jogo após o fechamento do modal
    if (modalId === 'modal3') {
        window.location.href = 'quest1.html';
    }
}

// TERMINO MODAL PAG INDEX 