const btnRegister = document.getElementById('btnRegister');

var subTotal = [];

btnRegister.onclick = ()=>{
     let registro = {
          valor: document.getElementById('registerValue').value,
     } 
     subTotal.push(registro);
     document.getElementById('registerValue').value = '';
     console.log(subTotal);
};





