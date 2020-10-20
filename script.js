        function generador(obj) {
            var x = 0;
            var n = parseInt(document.getElementById("num").value);
            for (i = 1; i <= n; i++) {
                x++;
                generadorCB = document.getElementById('cantidad');
                cajas = document.createElement('input');
                cajas.setAttribute("class", "form-group mx-sm-3 mb-2");
                cajas.setAttribute("placeholder", "Texto " + x);
                cajas.id = 'input' + x;
                generadorCB.appendChild(cajas);

                botones = document.createElement('button');
                botones.setAttribute("class", "btn btn-outline-danger");
                botones.innerHTML = "Boton " + x;
                botones.id = 'boton' + x;
                botones.addEventListener("click", (function (caja) {
                    return function () {
                        alert("" + document.getElementById(caja).value);
                        console.log(document.getElementById(caja).value);
                    }

                })("input" + x, "boton" + x), false);
                generadorCB.appendChild(botones);
                var br = document.createElement('br');
                generadorCB.appendChild(br);
    
            }
        }