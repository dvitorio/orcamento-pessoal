const btnRegister = document.getElementById('btnRegister');

/*var subTotal = [];

btnRegister.onclick = ()=> {

     let registro = {
          valor: document.getElementById('registerValue').value,
     }

     subTotal.push(registro);
     localStorage.setItem('registro', JSON.stringify(registro));
     document.getElementById('displayResult').value = registro.valor;

     document.getElementById('registerValue').value = '';
};*/

btnRegister.onclick = ()=>{

     const registerValue = document.getElementById('registerValue').value;

     console.log(registerValue);

     document.getElementById('displayResult').value = registerValue;
}






