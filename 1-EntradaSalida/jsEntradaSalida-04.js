/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;//lowerCamelCase Regla de estilo para nombrar variables
	nombreIngresado = prompt("Ingrese nombre");
	//txtIdNombre.value=nombreIngresado; una forma
	document.getElementById("txtIdNombre").value = nombreIngresado;
}

//txtIdNombre