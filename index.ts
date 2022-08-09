import { fromEvent, scan, throttleTime, map } from 'rxjs';
const clg = console.log;
// 第一个示例

fromEvent(document, 'click').subscribe(() => {
  clg('click!');
});

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event: any) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => {
    clg(count);
  });
