                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>
$(function() {

    $('#tablaDetalles').hide();
    $('#clear').hide();
    $('#ejerc2').hide();
    //$('#eje2ResultadoFinal').hide('fast');
                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>

    //Generar numero aleatorio de 4 digitos
    function aleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);

    };

    //btn-generar numeros aleatorios del primer ejercicio
    $('#generarNumeros').on("click", function() {
        restablecerColor();
        // Tabla del primer nivel nivel1
        $('#tablaDetalles').hide('slow');
        document.getElementById('cp1').value = aleatorio(1000, 9999);
        document.getElementById('cp2').value = aleatorio(1000, 9999);
        document.getElementById('cp3').value = aleatorio(1000, 9999);
        document.getElementById('cp4').value = aleatorio(1000, 9999);
        $('#clear').show(500);
    });

    //btn limpiar por si lo llego a poner
    $('#clear').on("click", limpiar);

    //funcnion de limpiar
    function limpiar() {
        document.getElementById('cp1').value = "";
        document.getElementById('cp2').value = "";
        document.getElementById('cp3').value = "";
        document.getElementById('cp4').value = "";
        $('#tablaDetalles').hide('slow');
        $('#clear').hide('slow');
        restablecerColor();

    };

                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>

    //REstablece color de los imput
    function restablecerColor() {
        $('#cp1').css({
            'border': '1px solid #C2BEBE'
        });
        $('#cp2').css({
            'border': '1px solid #C2BEBE'
        });
        $('#cp3').css({
            'border': '1px solid #C2BEBE'
        });
        $('#cp4').css({
            'border': '1px solid #C2BEBE'
        });
    };
                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>

    //btn-crear
    $('#crear').on("click", function() {
        restablecerColor();

        $('#tablaDetalles').show(500);

        //agragando los campos a las variables
        var input1 = document.getElementById('cp1').value;
        var input2 = document.getElementById('cp2').value;
        var input3 = document.getElementById('cp3').value;
        var input4 = document.getElementById('cp4').value;

        //variables respuestas  
        //Respuesta 1
        //Sacando y dividiendo las variables pedazos por pedasos
        var input1r1 = parseInt(input1[0]);
        var input1r2 = parseInt(input1[1]);
        // var input1test1 = input1.substr(0,2);
        // console.log(input1test1);
        // INTENTO DE REDUCIR CODIGO
        var input1r3 = parseInt(input1[2]);
        var input1r4 = parseInt(input1[3]);
        //aqui divido en pares y sumo las variables
        var input1Suma1 = input1r1 + input1r2;
        var input1Suma2 = input1r3 + input1r4;
        //convirtiendo las variables ne resultado final
        var input1resultado = `${input1Suma1}${input1Suma2}`;

        //Respuesta 2
        //Sacando y dividiendo las variables pedazos por pedasos
        var input2r1 = parseInt(input2[0]);
        var input2r2 = parseInt(input2[1]);
        var input2r3 = parseInt(input2[2]);
        var input2r4 = parseInt(input2[3]);
        //aqui divido en pares y sumo las variables
        var input2Suma1 = input2r1 + input2r2;
        var input2Suma2 = input2r3 + input2r4;
        //convirtiendo las variables ne resultado final
        var input2resultado = `${input2Suma1}${input2Suma2}`;

        //Respuesta 3
        //Sacando y dividiendo las variables pedazos por pedasos
        var input3r1 = parseInt(input3[0]);
        var input3r2 = parseInt(input3[1]);
        var input3r3 = parseInt(input3[2]);
        var input3r4 = parseInt(input3[3]);
        //aqui divido en pares y sumo las variables
        var input3Suma1 = input3r1 + input3r2;
        var input3Suma2 = input3r3 + input3r4;
        //convirtiendo las variables ne resultado final
        var input3resultado = `${input3Suma1}${input3Suma2}`;

        //Respuesta 4
        //Sacando y dividiendo las variables pedazos por pedasos
        var input4r1 = parseInt(input4[0]);
        var input4r2 = parseInt(input4[1]);
        var input4r3 = parseInt(input4[2]);
        var input4r4 = parseInt(input4[3]);
        //aqui divido en pares y sumo las variables
        var input4Suma1 = input4r1 + input4r2;
        var input4Suma2 = input4r3 + input4r4;
        //convirtiendo las variables ne resultado final
        var input4resultado = `${input4Suma1}${input4Suma2}`;

                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>
        //console.log(input1);
        //esta condicion comprueva que todos los imput tengan los 4 digitos, todos
        if (input1.length == 4 && input2.length == 4 && input3.length == 4 && input4.length == 4) {
            //Creo un array con las variables
            var operaciones = new Array(input1, input2, input3, input4)

            //array de respuestas
            var respuestas = new Array(input1resultado, input2resultado, input3resultado, input4resultado);

            //Agregando la variable en un campo oculto, Este campo guarda para yo poder generarlo mas tarde
            document.getElementById('Otnas').value = input4resultado;

            //aqui creo la variable en 0 sin nada osea limpia
            var txt = '';
            //esto añade todo a la variable con += que suma lo nuevo que se le introduco con lo que tiene

            for (let o = 0; o < 3; o++) {
                txt += '<tr>';
                txt += '<th scope="row">' + o + '</th>';
                txt += '<td>' + operaciones[o] + '</td>';
                txt += '<td>' + respuestas[o] + '</td>';
                txt += ' </tr>';
            };

            //ultima fila que tiene que adivinar el usuario
            txt += '<tr>';
            txt += '<th scope="row">' + 3 + '</th>';
            txt += '<td>' + operaciones[3] + '</td>';
            txt += '<td><input type="number" id="iptAdivinar" placeholder="Num" class="form-control"></td>';
            // txt += '<td id="oculto">' + respuestas[3] + '</td>';
            txt += ' </tr>';

            // txt += ' <tr>';
            // txt += '<td colspan="3"><button type="button" id="btnAdivinar" class="btn btn-secondary btn-lg btn-block">Adivinar</button></td>';

            // txt += ' </tr>';

            // txt += ' <tr>';
            // txt += '<td rowspan="3"><button type="button" class="btn btn-secondary btn-sm">Small button</button></td>';

            // txt += ' </tr>';

            //Generacion del id al cual se le agregará la variable
            document.getElementById('cuerpoTabla').innerHTML = txt;


                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>
            //errores de input   
        }
        if (input1.length != 4) {
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp1').css({
                'border': '1px solid red'
            });
            audio(0);
        }
        if (input2.length != 4) {
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp2').css({
                'border': '1px solid red'
            });
            audio(0);
        }
        if (input3.length != 4) {
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp3').css({
                'border': '1px solid red'
            });
            audio(0);
        }
        if (input4.length != 4) {
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp4').css({
                'border': '1px solid red'
            });

            audio(0);
        }
       //    console.log(input4resultado)
    });

        // S O T N A S - Q U I Z
                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>


    //btn-adivinar
    $('#btnAdivinar').on("click", function() {
        var resultado = document.getElementById('Otnas').value;
        resultado = parseInt(resultado);
        //el input 

        var inputadivinar = document.getElementById('iptAdivinar').value;
        var respuesta = parseInt(inputadivinar);
        // console.log(respuesta);
        if (respuesta == resultado) {
            $('#tablaDetalles').hide('fast');
            //console.log("correcto");
            audio(1)
            $('#iptAdivinar').css({
                'border': '1px solid green'
            });
            carga()

        } else {
            audio(2)
            $('#iptAdivinar').css({
                'border': '1px solid red'
            });

        }
        // var conteo = respuesta.length;
                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>

    });

    ///Audio agregado, esta funcion se dará cuenta si es correcto o incorrecto.
    function audio(x) {
        if (x == 1) {
            audi = new Audio('../audio/correcto.mp3')
            audi.play();

        } else {
            audi = new Audio('../audio/incorrecto.mp3')
            audi.play();
        }

    }

    // Creando un array para que me cree los numeros aleatorios y yo poder sumarlos luego

    // Boton/evento de la parte derecha de arriba de "siguiente"


    // cronometro para los segudnos


    //<===================ejercicio 2===================>


    function carga() {

        contador_s = 0;
        s = document.getElementById("conteoEj2");


        intervalo = window.setInterval(function() {
            $('#cuerpoTabla').hide('fast');

            $('#ejerc1').hide('fast');
            $('#ejerc2').show('fast');
            if (contador_s == 0) {
                contador_s = 30;
                // console.log("pulsado")
                // $('.ejerc1').show('fast');
                // $('.ejerc1').addClass('oculto');
                $.dialog({title: '¡Pienza Rapido!',content: 'EL TIEMPO VUELA!',});
                $('#eje2ResultadoFinal').show('fast');
                $('#ejerc2').slideToggle('slow');


                // $(this).addClass('oculto');
                var txt2 = "";
                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>

                //esto es la cabecera
                txt2 += '<tr>';
                txt2 += '<td>Tienes</td>';
                txt2 += '<th scope="row">0</th>';
                txt2 += '</tr>';

                // lo hice con esta estructura porque queria agregar diferente tipo de texto
                //Array de las fraces sumale y agregale
                var frace = new Array();
                //array  de los numeros aleatorios
                var numerosEje2 = new Array();
                //Cantidades de la suma de los unput=================================
                for (let ir = 0; ir < 5; ir++) {
                    numerosEje2.push(aleatorio(1, 30));
                    frace.push("Súmale", "Más");

                    txt2 += '<tr>';
                    txt2 += '<td>' + frace[ir] + '</td>';
                    txt2 += '<th scope="row">' + numerosEje2[ir] + '</th>';
                    txt2 += '</tr>';

                }
                // esto imprimira los numeros aleatorios
                document.getElementById('tablaCuerpoEj2').innerHTML = txt2;

                var resultao = numerosEje2[0] + numerosEje2[1] + numerosEje2[2] + numerosEje2[3] + numerosEje2[4];
                //console.log(resultao);
                document.getElementById('inpResultEje2').value = resultao;

                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>

            }
            s.innerHTML = contador_s;
            contador_s = contador_s - 1;
            // intervalo de actualizacion ↓
        }, 1000);
        // S O T N A S - Q U I Z
        // boton de enviar resultados de test
        $('#btnEje2EnviarResult').on('click', function() {

            // console.log("pulsado23");
            var resultado = parseInt(document.getElementById("inpResultEje2").value);
            var respuesta = parseInt(document.getElementById('iptejerc2EntradaUser').value);
            if (respuesta === resultado) {
                clearInterval(intervalo);
                audio(1)
                ejercicio3();
                
            } else {
                document.getElementById('iptejerc2EntradaUser').value = "";
                audio(2)
            }

            //    console.log(resultado);



        });
        // Funcion carga↓
    }
    
    // Cierre de crear un input hidden↑

//<===================ejercicio 2===================>



    // click en facil, Instrucciones
    $('#ayuda').on("click", () =>{
        $.dialog({
            title: '<span class="text-justify">Nivel 1/3</span>',
            content: '<span class="text-justify">Este nivel trata de insertar valores de 4 dígitos (Tambien puedes generarlos automáticamente dando al boton "Generar Num") luego tienes que tocar donde dice "crear" tienes que observar como se crean las respuestas de cada operacion a partir de las operaciones dadas como ejemplos las cuales son las #0, #1, #2, entonces tienes que buscar y escribir la respuesta de la operacion numero 3</span>'});
    })

//------------------------------------------------------------------------------------------------------------------------//

                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>
    //<===================ejercicio 3===================>
        function ejercicio3(){
            $('#ejerc2').hide("fast");

            $('.ejercicio3').show("slow");
        
             
                    //Cruz 1
                var numCruz1 = new Array();
                var selectCruz1 = new Array("#c1Pos2","#c1Pos1","#c1Pos0","#c1Pos3","#c1Pos4");
                for(let a = 0; a <2; a++){
                    numCruz1.push(aleatorio(3,12));
                    }
                for(let a = 1; a <4; a++){
                    numCruz1.push(numCruz1[0]+numCruz1[a]);
                }
                for(let i = 0; i <5; i++){
                    document.querySelector(selectCruz1[i]).innerHTML=numCruz1[i];
                }

                    //Cruz 2
                    var numCruz2 = new Array();
                    var selectCruz2 = new Array("#c2Pos2","#c2Pos1","#c2Pos0","#c2Pos3","#c2Pos4")
                    for(let a = 0; a <2; a++){
                        numCruz2.push(aleatorio(3,12));
                        }
                    for(let a = 1; a <4; a++){
                        numCruz2.push(numCruz2[0]+numCruz2[a]);
                    }
                    for(let i = 0; i <5; i++){
                        document.querySelector(selectCruz2[i]).innerHTML=numCruz2[i];
                    }
                    


                    //Cruz 3
                 numCruz3 = new Array();
                 var selectCruz3 = new Array("#c3Pos2","#c3Pos1","#c3Pos0","#c3Pos3","#c3Pos4")
                 for(let a = 0; a <2; a++){
                     numCruz3.push(aleatorio(3,12));
                     }
                 for(let a = 1; a <4; a++){
                     numCruz3.push(numCruz3[0]+numCruz3[a]);
                 }
                 for(let i = 1; i <5; i++){
                     document.querySelector(selectCruz3[i]).innerHTML=numCruz3[i];
                 }            

                 // Comprobacion del resultado del ejercicio3
                $('#comprobarResultado3').on("click",()=>{
                //    console.log("hola");
                //    console.log(numCruz3[0]);
                   var resultadoEje3 = parseInt(document.querySelector('#inputRespuesta3').value);
                //    console.log(resultadoEje3,);
                if(resultadoEje3 == numCruz3[0]){
                    audio(1)
                    $.confirm({
                        title:'¡Felisidades!',
                        content: '¡Has terminado el nivel fácil!, Pronto habrán nuevas actualizaciones, sigue a @sotnasweb en Instagram para saber sobre futuras actualizaciones, También puedes enviar sugerencias.',
                        buttons: {
                            specialKey: {
                                text: 'Entiendo',
                                keys: ['shift', 'alt', 'enter'],
                                action: function(){
                                    location.href="../index.html";
                                }
                            }
                        }
                    });
                    
                }else{
                    $('#inputRespuesta3').css({
                        'border': '1px solid red'
                    });
                    audio(0)
                }

                });
        }            
    //<===================///ejercicio 3///===================>

//------------------------------------------------------------------------------------------------------------------------//
    //<===================Colores del SotnasQuizz===================>

    var cambiarColor = setInterval(function(){
        // $('.fSotnas').addClass('cambiarColor');
        function coloresNombre(){
            
            var coloresNombre = new Array ("#3293fa","#ffc107","#28a745","#17a2b8","#dc3545");
    
            return coloresNombre[aleatorio(0,3)];
        };

        $('.fSotnas').css({'color':coloresNombre(),'transition':'ease-in-out 2s'});
  
        // document.querySelector(".fSotnas").stye.color=aleatorio();
    },2000)
    //<===================///Colores del SotnasQuizz///===================>
//------------------------------------------------------------------------------------------------------------------------//


});
                                            // <==============================|-|S O T N A S |-| Q U I Z|-|==============================>
