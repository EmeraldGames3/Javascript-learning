// Simulating asynchronous operations with setTimeout
function fetchUserData(userId, callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    console.log(`User data for user ${userId}`);
    callback({ userId: userId, name: "John Doe" });
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    console.log(`Posts for user ${userId}`);
    callback([
      { postId: 1, content: "Post 1" },
      { postId: 2, content: "Post 2" },
    ]);
  }, 1000);
}

function fetchPostComments(postId, callback) {
  console.log("Fetching post comments...");
  setTimeout(() => {
    console.log(`Comments for post ${postId}`);
    callback([
      { commentId: 1, text: "Comment 1" },
      { commentId: 2, text: "Comment 2" },
    ]);
  }, 1000);
}

// Demonstrating callback hell
fetchUserData(1, (userData) => {
  fetchUserPosts(userData.userId, (posts) => {
    posts.forEach((post) => {
      fetchPostComments(post.postId, (comments) => {
        console.log(`Comments for post ${post.postId}:`, comments);
      });
    });
  });
});
