/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var numerouno;
	var numerodos;
	var resta;
	numerouno=txtIdNumeroUno.value;
	numerodos=txtIdNumeroDos.value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	resta=numerouno - numerodos;
	alert ("El resultado de la resta es " + resta);
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var producto;
	numerouno=txtIdNumeroUno.value;
	numerodos=txtIdNumeroDos.value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	producto=numerouno * numerodos;
	alert ("El resultado de la multiplicación es " + producto);
}

function dividir()
{
	var numerouno;
	var numerodos;
	var cociente;
	numerouno=txtIdNumeroUno.value;
	numerodos=txtIdNumeroDos.value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	cociente=numerouno / numerodos;
	alert ("El resultado de la division es " + cociente);
}


