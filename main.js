const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			if (categoria === 'todos'){

				 grid.filter('[data-categoria]');
			}
			else if (categoria === 'repuestos'){
				grid.filter(`[data-categoria="${categoria}"]`);
		   }
		   else if (categoria === 'llantas'){
			grid.filter(`[data-categoria="${categoria}"]`);
			 }
			   else if (categoria === 'baterías'){
				grid.filter(`[data-categoria="${categoria}"]`);
		   }
		   else if (categoria === 'lubricantes'){
			grid.filter(`[data-categoria="${categoria}"]`);
		 }
			   else if (categoria === 'motor y embrague'){
				  grid.filter(`[data-subcategoria="${categoria}"]`);
			}
			else if (categoria === 'transmisión y frenado'){
				grid.filter(`[data-subcategoria="${categoria}"]`);
		  }
		  else if (categoria === 'eléctricos'){
				 grid.filter(`[data-subcategoria="${categoria}"]`);
			}
			else if (categoria === 'accesorios'){
				grid.filter(`[data-subcategoria="${categoria}"]`);
		   }

			
			
		});
	});



	document.querySelector('#barra-busqueda').addEventListener("keypress", (event) => {
		if (event.keyCode == 13){
			event.preventDefault();
		}
	}, false);
	


	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		// var keycode;
        // if (window.event) keycode = window.event.keyCode;
		// if (window.event.keyCode = 13 ) return false;
		
		const busqueda = evento.target.value.toLowerCase();
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});

	
});
