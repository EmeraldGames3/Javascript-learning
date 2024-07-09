// Simulating asynchronous operations with Promises
function fetchUserData(userId) {
  console.log("Fetching user data...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`User data for user ${userId}`);
      resolve({ userId: userId, name: "John Doe" });
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  console.log("Fetching user posts...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Posts for user ${userId}`);
      resolve([
        { postId: 1, content: "Post 1" },
        { postId: 2, content: "Post 2" },
      ]);
    }, 1000);
  });
}

function fetchPostComments(postId) {
  console.log("Fetching post comments...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Comments for post ${postId}`);
      resolve([
        { commentId: 1, text: "Comment 1" },
        { commentId: 2, text: "Comment 2" },
      ]);
    }, 1000);
  });
}

// Using Promises to avoid callback hell
fetchUserData(1)
  .then((userData) => {
    return fetchUserPosts(userData.userId);
  })
  .then((posts) => {
    return Promise.all(
      posts.map((post) => {
        return fetchPostComments(post.postId).then((comments) => {
          console.log(`Comments for post ${post.postId}:`, comments);
        });
      })
    );
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
