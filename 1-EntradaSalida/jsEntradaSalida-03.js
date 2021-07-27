/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;//forma mas facil valor de box 
	nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("Su nombre es: "+ nombreIngresado);

}

/* txtIdNombre 
Ingresar datos po id . id permite identificar componentes*/
