let time = process.argv
time.splice(0, 2);
let interval = 100

let timerFunction = function(numbers) {
  for (let num of numbers) {
    let realNum = Number(num);
    if (typeof realNum == 'number') {
      setTimeout (() => {
        process.stdout.write('\x07');
      }, realNum * interval);
    }
  }
};

timerFunction(time);