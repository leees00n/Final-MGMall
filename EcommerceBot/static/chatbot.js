const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

inputForm.addEventListener('submit', function(event) {

  event.preventDefault();

  const input = inputField.value;

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  fetch('/chatbot', {
    method: 'POST',
    body: JSON.stringify({inputValue: input}),
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    const response = data.message_response;
    console.log(response);
    message = document.createElement('div');
    message.classList.add('chatbot-message','chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({behavior: "smooth"});
  })
  .catch(error => {
    console.error(error);
  })
});