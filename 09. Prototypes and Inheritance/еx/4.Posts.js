function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class socialMediaPost extends Post {
        constructor(name,title,likes, dislikes) {
            super(name,title)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            if(this.comments.length===0){
               return `${super.toString()}\nRating: ${this.likes} - ${this.dislikes}\nComments:\n`
                //`Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes} - ${this.dislikes}`
            }else{
                let str=`${super.toString()}\nRating: ${this.likes - this.dislikes}\nComments:\n`;
                for (let i = 0; i < this.comments.length; i++) {
                    const element = this.comments[i];
                    if(i+1===this.comments.length){
                        str+=` * ${element}`;
                    }else{
                        str+=` * ${element}\n`;
                    }
                    
                }
                return str;
            }
        }
    }
    class BlogPost extends Post{
        constructor(name,title,views){
super(name,title);
this.views=views;
        }
        view(){
            return this.views++;
        }
        toString() {
            return `${super.toString()}\nViews: ${this.views}`
        }
    }
//     let post = new Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content

// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());

// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// //  * Good post
// //  * Very good post
// //  * Wow!
return{
    Post,
    BlogPost:BlogPost,
    socialMediaPost:socialMediaPost,
}
}

solve();