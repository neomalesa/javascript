
// The socila media post object
const post = {
  username: "code_ninja",
  caption: "Just wrote some clean JavaScript!",
  likes: 42,
  comments: ["Great job!", "Keep it up!"],
  
  // Method to increase likes
  addLike() {
    this.likes += 1;
    console.log(`Likes increased to: ${this.likes}`);
  }
};

// Testing the addLike method
post.addLike(); 

// Object destructuring..
const { username, caption } = post;

//Print username + caption
console.log(`Username: ${username}`);
console.log(`Caption: ${caption}`);