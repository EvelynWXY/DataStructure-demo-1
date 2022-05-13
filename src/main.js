const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let n = 0; //号码默认为0
let queue = []; //空队列储存取过的号

btnCreateNumber.onclick = () => {
  n += 1;
  //queue.push(n);
  queue.push.call(queue, n); //把取过的号都放在队列里
  spanNewNumber.innerText = n;
  spanQueue.innerText = JSON.stringify(queue);
};
btnCallNumber.onclick = () => {
  if (queue.length === 0) {
    return;
  }
  //const m = queue.shift();
  const m = queue.shift.call(queue);
  divScreen.innerText = `请${m}号顾客就餐`;
  spanQueue.innerText = JSON.stringify(queue);
};
