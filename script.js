function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        var chatOutput = document.getElementById('chat-output');
        chatOutput.innerHTML += '<p class="user-message">' + userInput + '</p>';
        document.getElementById('user-input').value = '';

        // MatrixBot animasyonu için cevap yazımını simüle et
        simulateMatrixBotResponse();
    }
}

function simulateMatrixBotResponse() {
    var chatOutput = document.getElementById('chat-output');
    var matrixBotResponse = "Matrix Bot: " + generateChatbotResponse();

    var typingAnimation = document.createElement('span');
    typingAnimation.className = 'typing-animation';
    chatOutput.appendChild(typingAnimation);

    var index = 0;
    var typingInterval = setInterval(function() {
        typingAnimation.innerHTML = matrixBotResponse.substring(0, index) + '|';
        chatOutput.scrollTop = chatOutput.scrollHeight;

        index++;

        if (index > matrixBotResponse.length) {
            clearInterval(typingInterval);
            typingAnimation.innerHTML = matrixBotResponse;
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }
    }, 50);
}

function generateChatbotResponse() {
    var responses = ["Merhaba!", "Nasılsınız?", "Matrix'in içinde kaybolmaya hazır mısınız?"];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function resetChat() {
    var chatOutput = document.getElementById('chat-output');
    chatOutput.innerHTML = '';
}
