/* Enlaces dinamicos */
let enlaces = document.getElementsByClassName('link-info');


/*--------- Asignar Ids ----------*/
// asigna las Ids a los botones y descripciones
let descripciones = document.getElementsByClassName('weapon-description');
for(desc in descripciones) {
	descripciones[desc].id = 'descripcion_' + desc;
};

let botones = document.getElementsByClassName('button');
for(btn in botones) {
	botones[btn].id = 'boton_' + btn;
};

/* Funcionalidad de los botones */
for (let j = 0; j < descripciones.length; j++) {
	function alternar() {
		if (descripciones[j].style.opacity == '') {
			descripciones[j].style.opacity = '1';
			enlaces[j].style.display = 'inline-block';
			botones[j].style.top = '5%';
			botones[j].style.left = '80%';
			botones[j].style.opacity = '1';
			botones[j].innerHTML = '!';
		} else {
			descripciones[j].style.opacity = '';
			enlaces[j].style.display = 'none';
			botones[j].style.top = '87%';
			botones[j].style.left = '79%';
			botones[j].style.opacity = '.0';
			botones[j].innerHTML = '';
		}
	}
	botones[j].addEventListener('click', alternar);
}