let delay = 100
let spinnerArray = ["|", "/", "-", "\\", "|", "\n"];
for (let symbol of spinnerArray) {
  if (delay < 5000) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}`);
    }, delay)
    delay += 200;
  }
}

