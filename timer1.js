// process.stdout.write('\x07');
const inputTime = process.argv.splice(2);
console.log(inputTime)

for (let timeString of inputTime) {
	// let timeNumber = parseInt(timeString) *1000;
	if (!isNaN(timeString) && timeString > 0) {
		setTimeout(() => {
			console.log(timeString);
			process.stdout.write('\x07');
	  }, timeString * 1000);
	}
}