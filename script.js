const chat = document.getElementById('chat');

function addMessage(text, sender = 'bot') {
  const div = document.createElement('div');
  div.className = `${sender} message`;
  div.innerHTML = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function handleAnswer(answer) {
  const buttons = document.querySelector('.options');
  if (buttons) buttons.remove();

  addMessage(answer === 'sí' ? 'Sí' : 'No', 'user');

  if (answer === 'sí') {
    setTimeout(() => {
      addMessage("Escriba el código:");

      const input = document.createElement('input');
      input.type = 'number';
      input.placeholder = "Ingresá el código";
      input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          const value = input.value.trim();
          if (value !== "") {
            addMessage(value, 'user');
            addMessage("¡Felicidades! 🎉 El cofre está escondido en el SUM.");
            input.remove();
          }
        }
      });

      chat.appendChild(input);
      input.focus();
      chat.scrollTop = chat.scrollHeight;
    }, 500);

  } else {
    setTimeout(() => {
      addMessage("Bueno, ¡es momento de empezar a jugar para ganarse el código secreto que abre el cofre! 🗝️");

      // 👇 Crear el botón de "Volver al inicio"
      const restartBtn = document.createElement('button');
      restartBtn.textContent = "Volver al inicio";
      restartBtn.className = 'restart-button';
      restartBtn.onclick = restartChat;

      const container = document.createElement('div');
      container.className = 'options';
      container.appendChild(restartBtn);
      chat.appendChild(container);
      chat.scrollTop = chat.scrollHeight;
    }, 500);
  }
}

function restartChat() {
  chat.innerHTML = `
    <div class="bot message">
      ¡Bienvenidos a todos a la semana de los jardines! 🙂<br>¿Tenés el código secreto?
    </div>
    <div class="options">
      <button onclick="handleAnswer('sí')">Sí</button>
      <button onclick="handleAnswer('no')">No</button>
    </div>
  `;
}
