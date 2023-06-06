
const cipher = { 
  encode: function(mover,mensaje){

    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';
    if(mensaje && mover){
      for (let index = 0; index < mensaje.length; index++) {
        if( /[A-Z]/g.test(mensaje[index])){

        let extraer = mensaje[index] ;
        let posición = letras.indexOf(extraer);
        let nuevaPosicion = (posición+(mover%26))%26;

        resultado += letras[nuevaPosicion];
        } else {
          console.log(mensaje[index])
          resultado += mensaje[index]
        }

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
        
        if( /[A-Z]/g.test(mensaje[index])){
          let extraer = mensaje[index] ;
          let posición = letras.indexOf(extraer);
          let nuevaPosicion = (26+(posición-(mover%26)))%26;
        
          resultado += letras[nuevaPosicion];
        } else {
          resultado += " "
        }
        
      }
      return resultado;
     } 
     throw new TypeError("Ingrese una clave y un mensaje");
   }




}
export default cipher;

