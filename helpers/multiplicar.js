const fs = require('fs');
colors = require('colors');

//*************** */
//CON PROMESA
//*************** */

/* const crearArchivo = (base = 5) => {
	return new Promise((resolve, reject) => {
		console.log('======================');
		console.log('Tabla del: ', base);
		console.log('======================');

		let salida = '';
		for (let i = 1; i <= 10; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}

		//console.log(salida);
		// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;
    //     console.log(`tabla-${base}.txt creada`);
    //           });
		fs.writeFileSync(`tabla-${base}.txt`, salida);
		console.log(salida);

		resolve(`tabla-${base}.txt`);
	});
};  */
//************* */
//CON ASYNC
//************* */
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';
		for (let i = 1; i <= hasta; i++) {
			salida += `${base} X  ${i} = ${base * i}\n`;
			consola += `${base} ${'X'.red}  ${i} ${'='.red} ${base * i}\n`;
		}

		if (listar) {
			console.log('======================'.green);
			console.log('Tabla del: '.bgBlue, colors.blue(base));
			console.log('======================'.green);

			console.log(consola);
		}
		// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
		//       if (err) throw err;
		//       console.log(`tabla-${base}.txt creada`);
		//             });
		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		//console.log(salida);

		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo
};
