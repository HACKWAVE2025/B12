async function handleUserInput() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage('You', message);
  userInput.value = '';

  await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sender: "You", message })
  });

  setTimeout(() => {
    addMessage('Chat Bot', 'AI response coming soon...');
  }, 1000);
}
document.addEventListener('DOMContentLoaded', function() {
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const logoutButton = document.getElementById('logout-button'); // Get the logout button

  // Function to add a message to the chat
  function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (sender === 'You') {
      messageElement.classList.add('user');
    } else {
      messageElement.classList.add('bot');
    }
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
  }

  // Function to handle user input
  function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
      addMessage('You', message);
      userInput.value = '';

      // Simulate a response from the chat bot
      setTimeout(() => {
        addMessage('Chat Bot', 'Thank you for your message. I will get back to you soon. For urgent matters, please use the symptom checker.');
      }, 1000);
    }
  }

  // Event listener for the send button
  sendButton.addEventListener('click', handleUserInput);

  // Event listener for the Enter key
  userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  });

  // Event listener for the logout button
  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      localStorage.removeItem('loggedIn'); // Clear logged in state
      window.location.href = 'login.html'; // Redirect to login page
    });
  }

  // Initial welcome message
  addMessage('Chat Bot', 'Welcome to Health Chat Bot! How can I assist you today? You can use the navigation on the left or the quick access cards below.');
});