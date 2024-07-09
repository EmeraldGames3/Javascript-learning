document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const usersDiv = document.getElementById("users");
      data.users.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `<strong>ID:</strong> ${user.id} <br>
                               <strong>Name:</strong> ${user.name} <br>
                               <strong>Email:</strong> ${user.email}`;
        usersDiv.appendChild(userDiv);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
