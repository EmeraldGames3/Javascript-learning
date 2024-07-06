document.querySelector('.btnLogin-popup').addEventListener('click', () => {
    document.querySelector('.wrapper').classList.add('active-popup');
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.register').style.display = 'none';
  });
  
  document.querySelector('.register-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
    document.querySelector('.wrapper').style.height = '560px'; // Increase height for register form
  });
  
  document.querySelector('.login-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.wrapper').style.height = '440px'; // Reset height for login form
  });
  
  document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    // Implement login and register functionalities here
  });
  