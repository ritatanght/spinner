let delay = 100;
const array = ["|", "/", "-", "\\"]; // set up the sequence of the spinner animation

for (let i = 0; i < array.length * 2 + 1; i++) {
  // the position will i when less than 4, else will be the remainder when divided by 4 (i.e. array length)
  let position = i < 4 ? i : i % 4;
  setTimeout(() => {
    process.stdout.write(`\r${array[position]}   `);
  }, delay + i * 200); // delay will be increment be 200
}
