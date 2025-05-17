const chat = document.getElementById('chat');

function addMessage(text, sender = 'bot') {
  const div = document.createElement('div');
  div.className = `${sender} message`;
  div.innerHTML = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function handleAnswer(answer) {
  // Eliminar botones para que no se puedan volver a presionar
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
      addMessage("Bueno, ¡Es momento de empezar a jugar para ganarse el código secreto que abre el cofre! 🗝️");
    }, 500);
  }
}
