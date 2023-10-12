import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Coffee Clicker";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let coffees: number = 0;
let autoNum: number = 0;
let pastTime: number = 0;

interface Item {
  name: string;
  cost: number;
  rate: number;
  amount: number;
}

const availableItems: Item[] = [
  { name: "Coffee Grinder ", cost: 10, rate: 0.1, amount: 1 },
  { name: "Coffee Kettle ", cost: 100, rate: 2.0, amount: 1 },
  { name: "Espresso Machine ", cost: 1000, rate: 50, amount: 1 },
];

function autoCoffee(numPick: number) {
  shopEnabling();
  numPick = autoNum;
  coffees += (numPick * (performance.now() - pastTime)) / 1000;
  pastTime = performance.now();
  document.getElementById("field_name")!.textContent =
    coffees.toFixed(2) + " coffees made";
  requestAnimationFrame(autoCoffee);
}

function purchase(purchaseObj: number) {
  coffees -= availableItems[purchaseObj].cost;
  availableItems[purchaseObj].cost *= 1.15;
  autoNum += availableItems[purchaseObj].rate;
  availableItems[purchaseObj].amount += 1;
  document.getElementById("autoClick")!.textContent =
    autoNum.toFixed(2) + " coffees per second";
  document.getElementById("purchaseZero")!.textContent =
    availableItems[0].name +
    availableItems[0].amount +
    ": costs " +
    availableItems[0].cost.toFixed(2) +
    " coffees";
  document.getElementById("purchaseOne")!.textContent =
    availableItems[1].name +
    availableItems[1].amount +
    ": costs " +
    availableItems[1].cost.toFixed(2) +
    " coffees";
  document.getElementById("purchaseTwo")!.textContent =
    availableItems[2].name +
    availableItems[2].amount +
    ": costs " +
    availableItems[2].cost.toFixed(2) +
    " coffees";
}

requestAnimationFrame(function () {
  autoCoffee(autoNum);
});

function shopEnabling() {
  (document.getElementById("purchaseZero") as HTMLButtonElement)!.disabled =
    coffees < availableItems[0].cost;
  (document.getElementById("purchaseOne") as HTMLButtonElement)!.disabled =
    coffees < availableItems[1].cost;
  (document.getElementById("purchaseTwo") as HTMLButtonElement)!.disabled =
    coffees < availableItems[2].cost;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" button name="button"><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Emoji_u2615.svg/2048px-Emoji_u2615.svg.png" width="200" height="200"/></button>
    </div>
    <div id="panel">
      <div id="field_name">${coffees.toFixed(2)} coffees made</div>
      <div id="autoClick">${autoNum.toFixed(2)} coffees per second</div>
    </div>
    <div class="card">
      <button id="purchaseZero" button name="button">${
        availableItems[0].name
      } ${availableItems[0].amount}: costs ${availableItems[0].cost.toFixed(
        2,
      )} coffees</button>
      <button id="purchaseOne" button name="button">${availableItems[1].name} ${
        availableItems[1].amount
      }: costs ${availableItems[1].cost.toFixed(2)} coffees</button>
      <button id="purchaseTwo" button name="button">${availableItems[2].name} ${
        availableItems[2].amount
      }: costs ${availableItems[2].cost.toFixed(2)} coffees</button>
    </div>
  </div>
`;

document
  .getElementById("counter")!
  .addEventListener("click", () => (coffees += 1));
document;

document
  .getElementById("counter")!
  .addEventListener(
    "click",
    () =>
      (document.getElementById("field_name")!.textContent =
        coffees.toFixed(2) + " coffees made"),
  );

document
  .getElementById("purchaseZero")!
  .addEventListener("click", () => purchase(0));

document
  .getElementById("purchaseOne")!
  .addEventListener("click", () => purchase(1));

document
  .getElementById("purchaseTwo")!
  .addEventListener("click", () => purchase(2));
