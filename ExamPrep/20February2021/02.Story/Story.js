class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }

        if (username == this.creator) {
            throw new Error('You can\'t like your own story!');
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }

        this._likes.splice(this._likes.indexOf(username), 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id == undefined || !this._comments.some(c => c.Id == id)) {
            const newComment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []
            }

            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        }

        const currentComment = this._comments.find(c => c.Id == id);
        const newReply = {
            Id: `${currentComment.Id}` + '.' + `${currentComment.Replies.length + 1}`,
            Username: username,
            Content: content
        };

        currentComment.Replies.push(newReply);
        return 'You replied successfully';
    }

    toString(sortingType) {
        const result = [];
        const sortOrder = {
            asc: (a, b) => a.Id - b.Id,
            desc: (a, b) => b.Id - a.Id,
            username: (a, b) => a.Username.localeCompare(b.Username)
        }

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push('Comments:');

        this._comments.sort(sortOrder[sortingType]);

        this._comments.forEach(c => {
            result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
            c.Replies.sort(sortOrder[sortingType]);
            c.Replies.forEach(r => {
                result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`);
            });
        });

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));

console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
console.log(art.toString('asc'));
