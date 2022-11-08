document.getElementById("contenedor").innerHTML ='<p><h1>este es un parrafo</h1></p>'


function alerta()
{
    alert("Mensaje de alerta");
}

function aumentar()
{
    var x = document.getElementById("contador").value;
    x++;
    document.getElementById("contador").value=x;
    //alert(x)
}

function disminuir()
{
    var x = document.getElementById("contador").value;
    x--;
    document.getElementById("contador").value=x;
    //alert(x)
}

function cambiarcolor(x){
    console.log("entro al metodo de camio de color")
   console.log(x); 
   var cuadro= document.getElementById("cuadro");

   switch (x) {
       case 1: cuadro.style.backgroundColor="#3CDF3C";  
               cuadro.style.width='400px';   
               cuadro.style.height='400px';      
           break;
           case 2: cuadro.style.backgroundColor="#BBC221"; 
           cuadro.style.width='100px';   
               cuadro.style.height='100px';           
           break;
           case 3: cuadro.style.backgroundColor="#1B37C2";  
           cuadro.style.width='150px';   
               cuadro.style.height='150px';          
           break;
           case 4: cuadro.style.backgroundColor="#AADF3C";           
           break;
       default:cuadro.style.backgroundColor="#FFDF3C"; 
           break;
   }
  
}