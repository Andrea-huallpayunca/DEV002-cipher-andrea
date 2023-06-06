
const cipher = { 
  encode: function(mover,mensaje){

    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';
    if(mensaje && mover){
      for (let index = 0; index < mensaje.length; index++) {
        let extraer = mensaje[index] ;
        let posición = letras.indexOf(extraer);
        let nuevaPosicion = (posición+(mover%26))%26;

        resultado += letras[nuevaPosicion];
      }
      return resultado;
    } 
    throw new TypeError("Ingrese una clave y un mensaje");
  },

  decode: function(mover,mensaje){
  
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';
    
    if(mensaje && mover){
      for (let index = 0; index < mensaje.length; index++) {
    
        let extraer = mensaje[index] ;
        let posición = letras.indexOf(extraer);
        let nuevaPosicion = (26+(posición-(mover%26)))%26;
        
        resultado += letras[nuevaPosicion];
      }
      return resultado;
     } 
     throw new TypeError("Ingrese una clave y un mensaje");
   }




}
export default cipher;

