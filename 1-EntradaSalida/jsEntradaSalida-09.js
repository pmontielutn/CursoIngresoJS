/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	
	//sueldo=txtIdSueldo.value
	sueldo= document.getElementById("txtIdSueldo").value;
	sueldo=parseFloat(sueldo);//decimal
	
	resultado= sueldo * 1.1;
	//txtIdResultado.value=resultado;
	document.getElementById("txtIdResultado").value=resultado.toFixed(2);
	//toFixed(2)=Fijar cantidad de caracteres después de la coma	
}

//txtIdSueldo
//txtIdResultado
/* En un recibo de sueldo este ejemplo es el indicado porque muestra el % solo
	var sueldo;
	var aumento;
	var resultado;
	//sueldo=txtIdSueldo.value
	sueldo= document.getElementById("txtIdSueldo").value;
	//sueldo=parseInt(sueldo);//entero
	sueldo=parseFloat(sueldo);//decimal
	aumento= sueldo * 0.1;
	//aumento= sueldo * 10 / 100;
	resultado= sueldo + aumento;
	//txtIdResultado.value=resultado;
	document.getElementById("txtIdResultado").value=resultado;
*/