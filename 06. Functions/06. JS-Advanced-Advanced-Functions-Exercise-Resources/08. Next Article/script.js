function getArticleGenerator(articles) {
    const articlesArr = articles;
    const content = document.getElementById('content');

    return function showNext() {
        if (articlesArr.length == 0) return;

        const newArticle = document.createElement('article');
        newArticle.textContent = articlesArr.shift();
        content.appendChild(newArticle);
    }
}
