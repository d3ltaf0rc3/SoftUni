function solve() {
   let button = document.getElementById('send');
   button.addEventListener('click', handler);

   function handler() {
      let newDiv = document.createElement('div');
      let parentDiv = document.getElementById('chat_messages');
      let text = document.getElementById('chat_input').value;
      
      newDiv.textContent = text;
      newDiv.classList.add('message');
      newDiv.classList.add('my-message');
      newDiv.setAttribute('id', 'chat_messages');
      
      parentDiv.appendChild(newDiv);
      document.getElementById('chat_input').value = null;
   }
}


