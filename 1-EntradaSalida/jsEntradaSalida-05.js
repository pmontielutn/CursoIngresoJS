/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edad;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado=document.getElementById('txtIdNombre').value;
	//edad=txtIdEdad.value; 
	edad=document.getElementById('txtIdEdad').value;
	alert("Usted se llama " + nombreIngresado + " y tiene " + edad + " años");
	//document.write("Usted se llama " + nombreIngresado + " y tiene " + edad + " años");
	//console.log("Usted se llama " + nombreIngresado + " y tiene " + edad + " años")

}
//txtIdNombre
//txtIdEdad
//Entradas
//prompt o id declarando variables
//Salidas
//por alert
//id
//console.log - se ve en consola con f12
//document.write usa el html