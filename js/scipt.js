// Função para enviar mensagem do usuário
function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();
    if (message !== "") {
        var chatBox = document.getElementById('chatBox');
        var newMessage = document.createElement('div');
        newMessage.classList.add('message', 'user-message');

        // Imagem do usuário
        var userImg = document.createElement('img');
        userImg.src = 'img/icon-perfil.png';  // A imagem do usuário, altere o caminho conforme necessário
        userImg.alt = 'Usuário';

        // Criando a mensagem do usuário
        var messageText = document.createElement('div');
        messageText.classList.add('message-text');
        messageText.textContent = message;

        // Adicionando a imagem e a mensagem do usuário ao chat
        newMessage.appendChild(userImg);
        newMessage.appendChild(messageText);
        chatBox.appendChild(newMessage);
        messageInput.value = ""; // Limpa o campo de entrada

        // Rolando a tela para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simula uma resposta da empresa após 2 segundos
        setTimeout(function() {
            sendCompanyResponse();
        }, 2000);
    }
}

// Função para enviar mensagem da empresa
function sendCompanyResponse() {
    var chatBox = document.getElementById('chatBox');
    var companyMessage = document.createElement('div');
    companyMessage.classList.add('message', 'company-message');

    // Imagem da empresa
    var companyImg = document.createElement('img');
    companyImg.src = 'img/natura1.png';  // A imagem da empresa, altere o caminho conforme necessário
    companyImg.alt = 'Empresa';

    // Criando a mensagem da empresa
    var messageText = document.createElement('div');
    messageText.classList.add('message-text');
    messageText.textContent = "Olá! Como posso ajudá-lo?";

    // Adicionando a imagem e a mensagem da empresa ao chat
    companyMessage.appendChild(companyImg);
    companyMessage.appendChild(messageText);
    chatBox.appendChild(companyMessage);

    // Rolando a tela para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}