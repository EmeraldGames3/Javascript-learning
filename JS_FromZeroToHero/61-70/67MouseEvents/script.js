document.addEventListener("DOMContentLoaded", () => {
  const eventTypeDisplay = document.getElementById("eventType");
  const mousePositionDisplay = document.getElementById("mousePosition");
  const targetElementDisplay = document.getElementById("targetElement");
  const eventArea = document.getElementById("eventArea");

  function displayEventInfo(event) {
    eventTypeDisplay.textContent = `Event Type: ${event.type}`;
    mousePositionDisplay.textContent = `Mouse Position: (${event.clientX}, ${event.clientY})`;
    targetElementDisplay.textContent = `Target Element: ${event.target.tagName}`;
  }

  eventArea.addEventListener("mousemove", displayEventInfo);
  eventArea.addEventListener("click", displayEventInfo);
  eventArea.addEventListener("dblclick", displayEventInfo);
  eventArea.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Prevent the context menu from appearing
    displayEventInfo(event);
  });
});
