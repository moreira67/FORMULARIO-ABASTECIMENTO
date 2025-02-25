document.getElementById('okButton').addEventListener('click', function() {
    // Pegando os valores dos campos
    const numMaquina = document.getElementById('num_maquina').value;
    const nomeOperador = document.getElementById('nome_operador').value;
    const dataAbastecimento = document.getElementById('data_abastecimento').value;
    const litrosAbastecidos = document.getElementById('litros_abastecidos').value;

    // Verificando se todos os campos estão preenchidos
    if (!numMaquina || !nomeOperador || !dataAbastecimento || !litrosAbastecidos) {
        // Exibir alerta de erro
        document.getElementById('alertMessage').style.display = 'block';
    } else {
        // Esconder alerta de erro, se tudo estiver preenchido
        document.getElementById('alertMessage').style.display = 'none';

        // Aqui você pode enviar os dados para a plataforma desejada
        enviarDados(numMaquina, nomeOperador, dataAbastecimento, litrosAbastecidos);
    }
});

function enviarDados(numMaquina, nomeOperador, dataAbastecimento, litrosAbastecidos) {
    // Exemplo simples de envio para o console (simulação)
    console.log("Dados enviados:");
    console.log("Número da máquina:", numMaquina);
    console.log("Nome do operador:", nomeOperador);
    console.log("Data do abastecimento:", dataAbastecimento);
    console.log("Litros abastecidos:", litrosAbastecidos);

    // Aqui você pode integrar com uma API ou outra plataforma, como o Firebase ou WhatsApp API.
}
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
        let video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        setInterval(function () {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let code = jsQR(imageData.data, canvas.width, canvas.height);

            if (code) {
                console.log("QR Code detectado:", code.data);
                // Aqui você pode redirecionar o usuário para a página com o formulário
                window.location.href = "index.html?qr=" + code.data; // exemplo de redirecionamento
            }
        }, 500);
    })
    .catch(function (error) {
        console.error("Erro ao acessar a câmera: ", error);
    });
