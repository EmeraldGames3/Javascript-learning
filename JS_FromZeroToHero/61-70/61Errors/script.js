function runExample() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    try {
      // Intentionally cause a ReferenceError
      nonExistentFunction();
    } catch (error) {
      handleError(error, outputDiv);
    } finally {
      outputDiv.innerHTML += '<p>Finished attempting to call nonExistentFunction.</p>';
    }
  
    try {
      // Intentionally cause a TypeError
      nullFunction();
    } catch (error) {
      handleError(error, outputDiv);
    } finally {
      outputDiv.innerHTML += '<p>Finished attempting to call nullFunction.</p>';
    }
  
    try {
      // Intentionally cause a custom error
      checkAge(-1);
    } catch (error) {
      handleError(error, outputDiv);
    } finally {
      outputDiv.innerHTML += '<p>Finished attempting to check age.</p>';
    }
  }
  
  function handleError(error, outputDiv) {
    outputDiv.innerHTML += `<p style="color: red;">Error: ${error.message}</p>`;
  }
  
  function nullFunction() {
    let func = null;
    func();
  }
  
  function checkAge(age) {
    if (age < 0) {
      throw new Error('Age cannot be negative.');
    }
  }
  