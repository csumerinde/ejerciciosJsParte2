// Resolucion de Ejercicios JavaSript PARTE 2 - BUCLES

//Ejercicio 1
let num = parseInt(prompt("Ejercicio 1: Ingrese edad:"));
if (isNaN(num))
    {document.write("<br>Ejercicio 1:  El valor ingresado es incorrecto");}
    else if (num > 18)
        {document.write("<br>Ejercicio 1:  Esta habilitado para Conducir.");}
    else
        {document.write("<br>Ejercicio 1:  NO esta habilitado para Conducir.");}


//Ejercicio 2
let num1 = parseInt(prompt("Ejercicio 2: Ingrese una nota (del 1 al 10):"));
if (isNaN(num1))
    {document.write("<br>Ejercicio 2:  La nota ingresada es incorrecta");}
else switch (num1)
    {
        case 0: document.write("<br>Ejercicio 2:  Muy deficiente");
                break;
        case 1: document.write("<br>Ejercicio 2:  Muy deficiente");
                break;        
        case 2: document.write("<br>Ejercicio 2:  Muy deficiente");
                break;                
        case 3: document.write("<br>Ejercicio 2:  Insuficiente ");
                break;        
        case 4: document.write("<br>Ejercicio 2:  Insuficiente");
                break;        
        case 5: document.write("<br>Ejercicio 2:  Suficiente");
                break;
        case 6: document.write("<br>Ejercicio 2:  Suficiente");
                break;        
        case 7: document.write("<br>Ejercicio 2:  Bien");
                break;                
        case 8: document.write("<br>Ejercicio 2:  Notable");
                break;        
        case 9: document.write("<br>Ejercicio 2:  Notable");
                break;        
        case 10: document.write("<br>Ejercicio 2:  Sobresaliente");
                break;        
        default : document.write("<br>Ejercicio 2:  Numero erroneo");
    }

//Ejercicio 3
let cadena="";
do
{
    let palabra = prompt("Ejercicio 3: Ingrese una palabra:");
    cadena=cadena+palabra+"-";
    var seguir = confirm("Enter para Continuar o Esc para Salir");
} while (seguir == true)
document.write("<br>Ejercicio 3: Palabras ingresadas: "+cadena);

//Ejercicio 4
let suma=0;
do
{
    let num2 = parseInt(prompt("Ejercicio 4: Ingrese un numero:"));
    if (isNaN(num2))
    {alert("Numero incorrecto");}
    else
    suma=suma+num2;
    var seguir1 = confirm("Enter para Continuar o Esc para Salir");
} while (seguir1 == true)
document.write("<br>Ejercicio 4: La suma de los numeros ingresados es: "+suma);

//Ejercicio 5
do
{
    let num3 = parseInt(prompt("Ejercicio 5: Ingrese numero DNI:"));
    if (isNaN(num3))
    {alert("Numero incorrecto");}
    else if (((num3 > 0) && (num3 <= 99999999)))
    {
        switch (num3 % 23)
        {
            case 0: document.write("<br>Ejercicio 5:  La letra del DNI es: T");
            break;
            case 1: document.write("<br>Ejercicio 5:  La letra del DNI es: R");
            break;        
            case 2: document.write("<br>Ejercicio 5:  La letra del DNI es: W");
            break;                
            case 3: document.write("<br>Ejercicio 5:  La letra del DNI es: A");
            break;        
            case 4: document.write("<br>Ejercicio 5:  La letra del DNI es: G");
            break;        
            case 5: document.write("<br>Ejercicio 5:  La letra del DNI es: M");
            break;
            case 6: document.write("<br>Ejercicio 5:  La letra del DNI es: Y");
            break;        
            case 7: document.write("<br>Ejercicio 5:  La letra del DNI es: F");
            break;                
            case 8: document.write("<br>Ejercicio 5:  La letra del DNI es: P");
            break;        
            case 9: document.write("<br>Ejercicio 5:  La letra del DNI es: D");
            break;        
            case 10: document.write("<br>Ejercicio 5:  La letra del DNI es: X");
            break;        
            case 11: document.write("<br>Ejercicio 5:  La letra del DNI es: B");
            break;        
            case 12: document.write("<br>Ejercicio 5:  La letra del DNI es: N");
            break;
            case 13: document.write("<br>Ejercicio 5:  La letra del DNI es: J");
            break;        
            case 14: document.write("<br>Ejercicio 5:  La letra del DNI es: Z");
            break;                
            case 15: document.write("<br>Ejercicio 5:  La letra del DNI es: S");
            break;        
            case 16: document.write("<br>Ejercicio 5:  La letra del DNI es: Q");
            break;        
            case 17: document.write("<br>Ejercicio 5:  La letra del DNI es: V");
            break;        
            case 18: document.write("<br>Ejercicio 5:  La letra del DNI es: H");
            break;
            case 19: document.write("<br>Ejercicio 5:  La letra del DNI es: L");
            break;        
            case 20: document.write("<br>Ejercicio 5:  La letra del DNI es: C");
            break;                
            case 21: document.write("<br>Ejercicio 5:  La letra del DNI es: K");
            break;        
            case 22: document.write("<br>Ejercicio 5:  La letra del DNI es: E");
            break;        
        }
    }
    var seguir2 = confirm("Enter para Continuar o Esc para Salir");
} while (seguir2 == true)
document.write("<br>");

//Ejercicio 6
for (let i = 1; i <= 30; i++)
{
    for (let j = 1; j <= i; j++)
    {
        document.write(i);
    }
    document.write("<br>");
}

//Ejercicio 7
let num4 = parseInt(prompt("Ejercicio 7: Ingrese un numero no mayor a 50:"));
if ((num4 > 0) && (num4 <= 50))
    {
        for (num4; num4 >= 1; num4--)
        {
            for (let j = 1; j <= num4; j++)
            {
                document.write(num4);
            }
            document.write("<br>");
        }
    }

//Ejercicio 8
let num5 = parseInt(prompt("Ejercicio 8: Ingrese un numero no mayor a 50:"));
if ((num5 > 0) && (num5 <= 50))
    {
        for (let i = 1; i <= num5; i++)
        {
            for (let j = 1; j <= i; j++)
            {
                document.write(j);
            }
            document.write("<br>");
        }
    }        

//Ejercicio 9
for (let i = 1; i <= 500; i++)
    {
        if ((i % 4) == 0)
            {document.write(i+" (multiplo de 4)");}
        else if ((i % 9) == 0)
                {document.write(i+" (multiplo de 9)");}
            else
                {document.write(i);}
        document.write("<br>");
        if ((i % 5) == 0)
            {document.write("------------------------------------------------<br>");}
    }

//Ejercicio 10  -  INCOMPLETO
let y = 0;
let fil = parseInt(prompt("Ejercicio 10: Ingrese cantidad de filas: "));
let col = parseInt(prompt("Ejercicio 10: Ingrese cantidad de columnas: "));
y = fil * col;
for (let i = 0; i < fil; i++)
{
    for (let j = 0; j < col; j++)
    {
        document.write("<br> Grabando el valor "+y); 
        y = y - 1;
    }
}

//Ejercicio 11  -  INCOMPLETO
let nombres=[""];
let edades=[""];
for (let i = 0; i < 3; i++)
{
    let nom = prompt("Ejercicio 11: Ingrese un nombre:");
    nombres[i]=nom;
    let edad = parseInt(prompt("Ejercicio 11: Ingrese edad:"));
    edades[i]=edad;
}

//Ejercicio 12
let x = Math.round(Math.random()*100);
document.write("<br>Ejercicio 12: Numero aleatorio: "+x);

//Ejercicio 13
let frase = prompt("Ejercicio 13: Ingrese una frase en Minusculas:");
document.write("<br>Ejercicio 13: Convertido a Mayusculas :"+frase.toUpperCase());

//Ejercicio 14
cadena1="";
let frase2 = prompt("Ejercicio 14: Ingrese una frase:");
for (let i = 0; i <= frase2.length; i++)
{
    cadena1=cadena1+(frase2.charAt(i))+"-";
}
document.write("<br>Ejercicio 14: "+cadena1);

//Ejercicio 15
z=0;
let frase3 = prompt("Ejercicio 15: Ingrese una frase:");
for (let i = 0; i <= frase3.length; i++)
{
    switch(frase3.charAt(i))
    {
        case "a": z++;
            break;
        case "e": z++;
            break;        
        case "i": z++;
            break;                
        case "o": z++;
            break;        
        case "u": z++;
            break;        
        case "A": z++;
            break;
        case "E": z++;
            break;        
        case "I": z++;
            break;                
        case "O": z++;
            break;        
        case "U": z++;
            break;        
    }
}
document.write("<br>Ejercicio 15: Cantidad de vocales en la frase :"+z);

//Ejercicio 16
cadena2="";
let frase4 = prompt("Ejercicio 16: Ingrese una frase:");
largo=frase4.length;
for (largo; largo >= 0 ; largo--)
{
    cadena2=cadena2+(frase4.charAt(largo));
}
document.write("<br>Ejercicio 16: Cadena al reves: "+cadena2);

//Ejercicio 17
band=0;
i=0;
let frase5 = prompt("Ejercicio 17: Ingrese una frase:");
do
{
    switch(frase5.charAt(i))
    {
        case "a": band=1;
            break;
        case "e": band=1;
            break;        
        case "i": band=1;
            break;                
        case "o": band=1;
            break;        
        case "u": band=1;
            break;        
        case "A": band=1;
            break;
        case "E": band=1;
            break;        
        case "I": band=1;
            break;                
        case "O": band=1;
            break;        
        case "U": band=1;
            break;        
    }
    i++;
} while (band == 0)
document.write("<br>Ejercicio 17: La primera vocal esta en la posicion: "+i);
