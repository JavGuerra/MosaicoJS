/* «Mosaico» por Javier Guerra, mayo 2022 */

const btnNegro    = elemento('#btnNegro'   );
const btnAzul     = elemento('#btnAzul'    );
const btnRojo     = elemento('#btnRojo'    );
const btnMagenta  = elemento('#btnMagenta' );
const btnVerde    = elemento('#btnVerde'   );
const btnCian     = elemento('#btnCian'    );
const btnAmarillo = elemento('#btnAmarillo');
const btnBlanco   = elemento('#btnBlanco'  );

btnNegro.onclick    = color;
btnAzul.onclick     = color;
btnRojo.onclick     = color;
btnMagenta.onclick  = color;
btnVerde.onclick    = color;
btnCian.onclick     = color;
btnAmarillo.onclick = color;
btnBlanco.onclick   = color;

const numCols = 16;
const numFils = 16;

let btnSel  = btnNegro; // Selección Btn
let pincel  = btnSel.className; // Color

elemento('main').appendChild( creaTabla(numCols, numFils) );

btnSel.classList.add('seleccion');


function elemento(sel) { return document.querySelector(sel); }

function creaElem(el)  { return document.createElement(el);  }

function creaTabla(numCols, numFils) {
    let table, tbody, tr, td;
    tbody = creaElem('tbody');
    for (let i = 1; i <= numFils; i++) {
        tr = creaElem('tr');
        for (let i = 1; i <= numCols; i++) {
            td = creaElem('td');
            td.classList.add('blanco');
            td.onclick = pinta; // ¡Magia!
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table = creaElem('table');
    table.appendChild(tbody);
    return table;
}

// Selecciona botón y color del pincel
function color() {
    btnSel.classList.remove('seleccion');
    btnSel = this;
    pincel = this.className;
    btnSel.classList.add('seleccion');
}

// Pone el color del pincel en la celda
function pinta() { this.className = pincel; }
