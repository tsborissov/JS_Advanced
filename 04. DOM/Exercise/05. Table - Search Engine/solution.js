function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const search = document.getElementById('searchField').value;
      const rows = Array.from(document.querySelectorAll('tbody tr'));

      if (search.length == 0) {
         return;
      }

      rows.forEach(row => {
         let isMatch = false;
         const cells = Array.from(row.getElementsByTagName('td'));

         cells.forEach(cell => {
            if (cell.innerText.includes(search)) {
               isMatch = true;
            }
         })

         if (isMatch) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      })
   }
}