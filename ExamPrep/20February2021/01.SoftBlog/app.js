function solve() {
   const creatorInp = document.getElementById('creator');
   const titleInp = document.getElementById('title');
   const categoryInp = document.getElementById('category');
   const contentInp = document.getElementById('content');

   const form = document.querySelector('form');

   const postsSection = document.querySelector('main section');
   const archiveSection = document.querySelector('ol');

   const createBtn = document.querySelector('form button');
   createBtn.addEventListener('click', createPost);

   function createPost(event) {
      event.preventDefault();

      const deleteBtn = createElement('button', { className: 'btn delete' }, 'Delete');
      const archiveBtn = createElement('button', { className: 'btn archive' }, 'Archive');

      const article =
         createElement('article', {},
            createElement('h1', {}, titleInp.value),
            createElement('p', {}, 'Category: ',
               createElement('strong', {}, categoryInp.value)),
            createElement('p', {}, 'Creator: ',
               createElement('strong', {}, creatorInp.value)),
            createElement('p', {}, contentInp.value),
            createElement('div', { className: 'buttons' },
               deleteBtn,
               archiveBtn)
         );

      deleteBtn.addEventListener('click', deletePost.bind(null, article));
      archiveBtn.addEventListener('click', archivePost.bind(null, article));

      postsSection.appendChild(article);

      form.reset();
   }

   function deletePost(article) {
      article.remove();
   }

   function archivePost(article) {
      const element = createElement('li', {}, article.firstChild.textContent);

      const archivedItems = Array.from(archiveSection.children);
      archivedItems.push(element);

      archiveSection.innerHTML = '';
      archivedItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
      archivedItems.forEach(a => {
         archiveSection.appendChild(a)
      });

      article.remove();
   }

   function createElement(type, attr, ...content) {
      const element = document.createElement(type);

      for (let prop in attr) {
         element[prop] = attr[prop];
      }

      for (let item of content) {
         if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
         }
         element.appendChild(item);
      }

      return element;
   }
}