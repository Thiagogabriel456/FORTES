document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('arquivo', fileInput.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Arquivo enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar o arquivo:', error);
        alert('Erro ao enviar o arquivo');
    });
});
