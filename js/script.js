function calcular (tipo,valor) {
	if ( tipo === 'acao') {
		if (valor === 'c') {
			document.getElementById('resultado').value = '';
		} 

	if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
		document.getElementById('resultado').value += valor;
	}
							
	if (valor === '=') {
		const valor_campo = document.getElementById('resultado').value
		const calc = eval(valor_campo);
		document.getElementById('resultado').value = calc;
	}
		} else if (tipo === 'valor' ) {
			document.getElementById('resultado').value += valor;
		}
}	