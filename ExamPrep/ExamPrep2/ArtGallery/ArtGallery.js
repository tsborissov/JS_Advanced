class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
        this._personality = {
            Vip: 500,
            Middle: 250
        }
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (this.possibleArticles[articleModel] == undefined) {
            throw new Error('This article model is not included in this gallery!');
        }

        const targetArticle = this.listOfArticles.filter(a => a.articleModel == articleModel && a.articleName == articleName)[0];

        if (targetArticle == undefined) {
            this.listOfArticles.push({articleModel, articleName, quantity});
        } else {
            targetArticle.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        const targetGuest = this.guests.filter(g => g.guestName == guestName)[0];

        if (targetGuest != undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = this._personality[personality] == undefined ? 50 : this._personality[personality];

        this.guests.push({guestName, points, purchaseArticle: 0});

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        const targetArticle = this.listOfArticles.filter(a => a.articleModel == articleModel && a.articleName == articleName)[0];
        if (targetArticle == undefined) {
            throw new Error('This article is not found.');
        }

        if (targetArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        const targetGuest = this.guests.filter(g => g.guestName == guestName)[0];
        if (targetGuest == undefined) {
            return 'This guest is not invited.';
        }

        const articlePoints = this.possibleArticles[articleModel.toLowerCase()];
        if (targetGuest.points < articlePoints) {
            return 'You need to more points to purchase the article.';
        }

        targetGuest.points -= articlePoints;
        targetGuest.purchaseArticle++;
        targetArticle.quantity--;

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
    }

    showGalleryInfo(criteria) {
        const result = [];

        if (criteria == 'article') {
            result.push('Articles information:');
            
            this.listOfArticles.forEach(a => {
                result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`);
            });
        } else if (criteria == 'guest') {
            result.push('Guests information:');

            this.guests.forEach(g => {
                result.push(`${g.guestName} - ${g.purchaseArticle}`);
            });
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
