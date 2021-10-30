function search() {
   const filter = document.getElementById('searchText').value;
   let lis = document.getElementsByTagName('li');

   let matches = 0;

   for (let i = 0; i < lis.length; i++){
      let town = lis[i].innerHTML;

      if (filter.length != 0 && town.indexOf(filter) != -1){
         matches++;
         lis[i].style.fontWeight = 'bold';
         lis[i].style.textDecoration = 'underline';
      } else {
         lis[i].style.fontWeight = '';
         lis[i].style.textDecoration = '';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`
}
