import { fromEvent, scan, throttleTime, map } from 'rxjs';
// 第一个示例

// document.addEventListener('click', () => console.log('Clicked!'));

// fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

// 纯净性 (Purity)

// let count = 0;
// document.addEventListener('click', () =>
//   console.log(`Clicked ${++count} times`)
// );

// fromEvent(document, 'click')
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => console.log(`Clicked ${count} times`));

// 流动性 (Flow)

// let count = 0;
// let rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener('click', () => {
//   if (Date.now() - lastClick >= rate) {
//     console.log(`Clicked ${++count} times`);
//     lastClick = Date.now();
//   }
// });

// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     scan((count) => count + 1, 0)
//   )
//   .subscribe((count) => console.log(`Clicked ${count} times`));

// 值 (Values)

// let count = 0;
// const rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener('click', (event) => {
//   if (Date.now() - lastClick >= rate) {
//     count += event.clientX;
//     console.log(count);
//     lastClick = Date.now();
//   }
// });

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => console.log(count));
