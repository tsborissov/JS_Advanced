function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.style.display = 'none';
      para.textContent = word;
      div.appendChild(para);
      content.appendChild(div);

      div.addEventListener('click', unhide);
   }

   function unhide(ev) {
      ev.currenTarget.firstChild.style.display = '';
   }
}