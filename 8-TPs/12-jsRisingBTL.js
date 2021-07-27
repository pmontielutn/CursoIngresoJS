/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.  Edad, entre 18 y 90 años inclusive.
B.  Sexo, “M” para masculino y “F” para femenino
C.  Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.  Sueldo bruto, no menor a 8000.
E.  Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.  Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    //definicion de variables
    var edadIngresada;
    var sexoIngresado;
    var estadoCivilIngresado;
    var sueldoBruto;

    edadIngresada = prompt("Ingrese una edad: ");
    edadIngresada = parseInt(edadIngresada);
    
    while(edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt("Error, reingrese una edad: ");
        edadIngresada = parseInt(edadIngresada);
    }

    txtIdEdad.value = edadIngresada;

    sexoIngresado = prompt("Ingrese sexo");
    while(sexoIngresado!='F' && sexoIngresado!='M')
    {
        sexoIngresado = prompt("Ingrese sexo");
    }

    txtIdSexo.value = sexoIngresado;

    //stado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos

    estadoCivilIngresado = prompt("Ingrese una edad: ");
    estadoCivilIngresado = parseInt(estadoCivilIngresado);
    
    while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
    {
        estadoCivilIngresado = prompt("Error, reingrese una edad: ");
        estadoCivilIngresado = parseInt(estadoCivilIngresado);
    }

//Sueldo bruto, no menor a 8000.
    while(sueldoBruto < 8000)
    {

    }


    while(legajo<1000 || legajo>9999)
    {

    }


    while(nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N')
    {
        
    }

}
