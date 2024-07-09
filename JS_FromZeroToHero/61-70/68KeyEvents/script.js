document.addEventListener("DOMContentLoaded", () => {
  const eventTypeDisplay = document.getElementById("eventType");
  const keyPressedDisplay = document.getElementById("keyPressed");
  const keyCodeDisplay = document.getElementById("keyCode");
  const inputArea = document.getElementById("inputArea");

  function displayEventInfo(event) {
    eventTypeDisplay.textContent = `Event Type: ${event.type}`;
    keyPressedDisplay.textContent = `Key Pressed: ${event.key}`;
    keyCodeDisplay.textContent = `Key Code: ${event.code}`;
  }

  inputArea.addEventListener("keydown", displayEventInfo);
  inputArea.addEventListener("keyup", displayEventInfo);
  inputArea.addEventListener("keypress", displayEventInfo);
});
