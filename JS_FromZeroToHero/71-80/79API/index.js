document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const dataContainer = document.getElementById("dataContainer");

  fetchButton.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        dataContainer.innerHTML = ""; // Clear previous data
        data.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            `;
          dataContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        dataContainer.innerHTML = `<p style="color: red;">An error occurred: ${error.message}</p>`;
      });
  });
});
