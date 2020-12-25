// process.stdout.write('\x07');  //* system sound(Beep/Ding)

const inputTime = process.argv.splice(2);


for (const timeString of inputTime) {
	// let timeNumber = parseInt(timeString) *1000;
	if (!isNaN(timeString) && timeString > 0) {
		setTimeout(() => {
			process.stdout.write('beep\n');
		}, timeString * 1000);
	}
}