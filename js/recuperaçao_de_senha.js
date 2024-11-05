document.getElementById('recoveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const codigo = document.getElementById('codigo').value;
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (novaSenha !== confirmaSenha) {
        alert('As senhas não coincidem');
        return;
    }

    // Here you can add your password recovery logic
    console.log('Código:', codigo);
    console.log('Nova Senha:', novaSenha);
    
    alert('Senha trocada com sucesso');
});

document.getElementById('reenviar').addEventListener('click', function() {
    // Logic to resend the code
    alert('Código reenviado');
});
