/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var numerodos;
	var suma;
	numerouno=txtIdNumeroUno.value;
	numerodos=txtIdNumeroDos.value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	suma=numerouno + numerodos;
	alert ("El resultado de la suma es " + suma);
}
