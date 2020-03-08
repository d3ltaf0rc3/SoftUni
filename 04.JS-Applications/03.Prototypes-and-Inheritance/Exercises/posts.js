function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            if (this.comments.length === 0) {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            } else {
                let commentsStr = "";
                this.comments.forEach(comment => {
                    commentsStr += ` * ${comment}\n`;
                });
                commentsStr = commentsStr.trim();
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:\n ${commentsStr}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };   
}

let classes = posts();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString());