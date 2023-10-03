const password = document.getElementById('senhaUsuario');
const icon = document.getElementById('icon');
const password2 = document.getElementById('confirmaSenhaUsuario');
const icon2 = document.getElementById('icon-2');


function showHidePassword(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        icon.classList.add('hide');
    }else {
        password.setAttribute('type', 'password');
        icon.classList.remove('hide');
    }
}

function showHidePassword2(){
    if(password2.type === 'password'){
        password2.setAttribute('type', 'text');
        icon2.classList.add('hide');
    }else {
        password2.setAttribute('type', 'password');
        icon2.classList.remove('hide');
    }
}