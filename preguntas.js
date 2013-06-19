var preguntasRaw = "1@�C�mo se declara una funci�n sin par�metros?@2\n"
        + "2@�Cu�l de las siguientes invocaciones es correcta?@4\u000A"
        + "3@Dada la funci�n con la firma: miFuncion(a,b) �Cu�l invocaci�n es correcta?@3\u000A"
        + "4@�Cu�l de las siguientes afirmaciones es verdadera?@1\u000A"
        + "5@�C�mo se introducen comentarios en la sintaxis Javascript?@4\u000A"
        + "6@C�mo se escribe un condicional para que sea verdadero s�lo si i es distinta de 5?@2\u000A"
        + "7@Un vector se define usando:@3\u000A"
        + "8@�Con cu�l de estas sentencias es posible agregar un elemento al final de un vector?@1\u000A"
        + "9@�Con cu�l de estas sentencias se genera un n�mero aleatorio?@3\u000A"
        + "10@�C�mo se redondea el n�mero 7.25 al entero m�s cercano?@4\u000A"
        + "11@ �c�mo se muestra una ventana con el mensaje   Hola mundo!  ? @2\u000A"
        + "12@ �C�mo se escribe un bucle   for   para contar desde 1 hasta 5? @1\u000A"
        + "13@�Qu� funci�n se usa para convertir una cadena a min�sculas?@3\u000A"
        + "14@ �C�mo se referencia desde el HTML  un archivo externo con c�digo JavaScript llamado   xxx.js?@3\u000A"
        + "15@El DOM representa una p�gina web como@1\u000A"
        + "16@ �C�mo se comprueba si la variable i es igual a 5?@4\u000A"
        + "17@Cuando una p�gina utiliza funciones escritas en Javascript, estas funciones se ejecutan@1\u000A"
        + "18@Cuando queremos que el cuerpo de un bucle se ejecute como m�nimo una vez utilizamos la sentencia:@2\u000A"
        + "19@Para recorrer el array miVector hasta encontrar el valor v la condici�n debe ser@3\u000A"
        + "20@Para acceder al car�cter en la posici�n x de un string  llamado strPrueba usar@4";

var respuestasRaw = "1@1@ function:myFunction()@1@2@ function myFunction()@1@3@ declare myFunction()@1@4@ new myFunction\n\
2@1@Resultado=myFunction@2@2@Call myFunction()@2@3@myFunction@2@4@Resultado=myFunction()\n\
3@1@MiFuncion a,b@3@2@a=MiFuncion(b)@3@3@MiFuncion(x,y)@3@4@Ninguna de las anteriores\n\
4@1@Una variable local se debe declarar con var dentro de una funci�n@4@2@Una variable local se declara con o sin var dentro de una funci�n@4@3@No es necesario declarar una variable para que sea local@4@4@Ninguna de las anteriores\n\
5@1@&lt;!-- Esto es comentario --&gt;@5@2@&lt;? Esto es un comentario ?&gt;@5@3@\/* Esto es un comentario@5@4@Ninguna de las anteriores\n\
6@1@ if (i \<\> 5)@6@2@ if (i != 5)@6@3@ if =! 5 then@6@4@ if \<\> 5\n\
7@1@\"var myarray = new array();\"@7@2@\"var myarray = new Array[];\"@7@3@\"var myarray = new Array();\"@7@4@Ninguna de las anteriores\n\
8@1@arr[arr.length] = value@8@2@arr[arr.length+1] = new Arrays()@8@3@arr[arr.length-1] = value@8@4@arr[arr.length*1] = value\n\
9@1@Math.rnd()@9@2@Math.random(0,100)@9@3@Math.random@9@4@randomize()\n\
10@1@round(7.25)@10@2@Math.rnd(7.25)@10@3@rnd(7.25)@10@4@Math.round(7.25)\n\
11@1@\"alertBox = \"Hola mundo!\";\"@11@2@\"alert(\"Hola mundo!\");\"@11@3@\"alertBox(\"Hola mundo!);\"@11@4@\"msgBox(\"Hola mundo!);\"\n\
12@1@\"for(i = 1; i \<= 5; i++)\"@12@2@\"for(i \<= 5; i++)\"@12@3@for i = 1 to 5@12@4@Ninguna de las anteriores\n\
13@1@lower()@13@2@toLower()@13@3@toLowerCase()@13@4@lowerCase()\n\
14@1@&lt;script name=\"xxx.js\" type=\"text\/javascript\" &gt;&lt;\/script&gt;\"@14@2@&lt;script href=\"xxx.js\" type=\"text\/javascript\" &gt;&lt;\/script&gt;@14@3@&lt;script src=\"xxx.js\" type=\"text\/javascript\" &gt;&lt\/script&gt;@14@4@Ninguna de las anteriores\n\
15@1@Un �rbol@15@2@Una lista@15@3@Una secuencia@15@4@Ninguna de las anteriores\n\
16@1@if(i=5)@16@2@if i==5 then@16@3@if i==5@16@4@if(i==5)\n\
17@1@Pueden ejecutarse cuando son llamadas desde alg�n otro script o a causa de un evento.@17@2@Se ejecutan una s�la vez: al terminar de cargarse la p�gina.@17@3@S�lo cuando son llamadas desde alg�n script dentro de la p�gina@17@4@S�lo cuando se produce un evento.\n\
18@1@execute...until@18@2@do...while@18@3@switch ... case@18@4@while�\n\
19@1@while (i&lt; miVector.length || miVector[i] ==v)@19@2@while ( miVector[i] !=v  && i &lt;miVector.length)@19@3@while (  i&lt;miVector.length && miVector[i] !=v )@19@4@while (  i&lt;miVector.length && miVector[i]==v )\n\
20@1@strPrueba(x)@20@2@strPrueba.charAt[x]@20@3@strPrueba.chars(x)@20@4@strPrueba.charAt(x)";