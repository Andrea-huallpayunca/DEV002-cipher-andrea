import cipher from './cipher.js';

function base(){
    document.getElementById('mensaje').addEventListener('keyup', function () {
        this.value = this.value.toUpperCase();
    })
    
    document.getElementById('desplazar').addEventListener('keyup', function () {
        if (this.value>=1 && this.value!='') {
        this.value = parseInt(this.value) ;
        } else {
        this.value=''
        }
    })
}


base();

document.getElementById('mostrar').onclick = function(){
    
    let passwordInput = document.getElementById('desplazar');

    // eslint-disable-next-line no-cond-assign, no-constant-condition
    if ( passwordInput.type=='password') {
        document.getElementById('mostrar').textContent = 'Ocultar';
        passwordInput.type='number';
    }  else {
        document.getElementById('mostrar').textContent = 'Mostrar';
        passwordInput.type='password'; 
    }
}

document.getElementById('codificar').onclick= function () {
    document.getElementById('mensajeResultante').value =
    cipher.encode(document.getElementById('desplazar').value,document.getElementById('mensaje').value);
}

document.getElementById('decodificar').onclick= function () {
    document.getElementById('mensajeResultante').value =
    cipher.decode(document.getElementById('desplazar').value,document.getElementById('mensaje').value);
}
