class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        let hasUserLiked = this._likes.some(user => user === username);

        if (hasUserLiked) {
            throw new Error("You can't like the same article twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this article!");
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let doesIdExist = this._comments.some(comment => comment.id === id);
        if (!doesIdExist || id === undefined) {
            this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        } else if (doesIdExist) {
            this._comments[id - 1].replies.push({ id: id + Number(`.${this._comments[id - 1].replies.length + 1}`), username, content });
            return "You replied successfully";
        }
    }

    toString(sortingType) {
        if (sortingType === "asc") {
            this._comments.sort((a, b) => a.id - b.id);
            this._comments.forEach(data => data.replies.sort((a, b) => a.id - b.id));
        } else if (sortingType === "desc") {
            this._comments.sort((a, b) => b.id - a.id);
            this._comments.forEach(data => data.replies.sort((a, b) => b.id - a.id));
        } else if (sortingType === "username") {
            this._comments.sort((a, b) => a.username.localeCompare(b.username));
            this._comments.forEach(data => data.replies.sort((a, b) => a.username.localeCompare(b.username)));
        }
        let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;
        this._comments.forEach(data => {
            output += `-- ${data.id}. ${data.username}: ${data.content}\n`;
            if (data.replies.length > 0) {
                data.replies.forEach(reply => {
                    output += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                });
            }
        });
        return output.trim();
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));