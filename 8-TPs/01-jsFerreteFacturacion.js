/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;
	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);
	suma=precioUno + precioDos + precioTres;
	alert ("El resultado de la suma es " + suma);
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}