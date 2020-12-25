const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write("beep\n");
  }
  if (!isNaN(key) && key > 0) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write("beep\n");
    }, key * 1000);
  }
});

