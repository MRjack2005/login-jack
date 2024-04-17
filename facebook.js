/*const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('input[type="password"]');

    togglePassword.addEventListener('click', function () {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });*/
    let btns = document.querySelectorAll("Iniciar sesión");

  btns.forEach((btn) =>{
    let x = e.pagex - btn.offsetLeft;
    let y = e.pagex - btn.offsetTop;
    btn.style.setProperty("--x", x +"px");
    btn.style.setProperty("--y", y +"px");
  })