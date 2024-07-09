document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("element");
  const toggleClassButton = document.getElementById("toggleClassButton");
  const checkClassButton = document.getElementById("checkClassButton");
  const classStatus = document.getElementById("classStatus");

  // Function to add and remove classes on mouse events
  element.addEventListener("mouseover", () => {
    element.classList.add("hovered");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("hovered");
  });

  element.addEventListener("click", () => {
    element.classList.add("clicked");
    setTimeout(() => {
      element.classList.remove("clicked");
    }, 500);
  });

  element.addEventListener("dblclick", () => {
    element.classList.toggle("double-clicked");
  });

  // Toggle the 'active' class on button click
  toggleClassButton.addEventListener("click", () => {
    element.classList.toggle("active");
  });

  // Check if the 'active' class is present
  checkClassButton.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      classStatus.textContent = "'active' class is present.";
    } else {
      classStatus.textContent = "'active' class is not present.";
    }
  });

  // Display initial classes
  console.log("Initial classes:", element.classList);
});
