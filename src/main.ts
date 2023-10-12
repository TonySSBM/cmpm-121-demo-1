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
const purchaseCosts: number[] = [10, 100, 1000];
const purchaseIncrease: number[] = [0.1, 2.0, 50];
const purchaseAmounts: number[] = [1, 1, 1];

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
  coffees -= purchaseCosts[purchaseObj];
  purchaseCosts[purchaseObj] *= 1.15;
  autoNum += purchaseIncrease[purchaseObj];
  purchaseAmounts[purchaseObj] += 1;
  document.getElementById("autoClick")!.textContent =
    autoNum.toFixed(2) + " coffees per second";
  document.getElementById("purchaseZero")!.textContent =
    "Coffee Grinder " +
    purchaseAmounts[0] +
    ": costs " +
    purchaseCosts[0].toFixed(2) +
    " coffees";
  document.getElementById("purchaseOne")!.textContent =
    "Coffee Kettle " +
    purchaseAmounts[1] +
    ": costs " +
    purchaseCosts[1].toFixed(2) +
    " coffees";
  document.getElementById("purchaseTwo")!.textContent =
    "Espresso Machine " +
    purchaseAmounts[2] +
    ": costs " +
    purchaseCosts[2].toFixed(2) +
    " coffees";
}

requestAnimationFrame(function () {
  autoCoffee(autoNum);
});

function shopEnabling() {
  (document.getElementById("purchaseZero") as HTMLButtonElement)!.disabled =
    coffees < purchaseCosts[0];
  (document.getElementById("purchaseOne") as HTMLButtonElement)!.disabled =
    coffees < purchaseCosts[1];
  (document.getElementById("purchaseTwo") as HTMLButtonElement)!.disabled =
    coffees < purchaseCosts[2];
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
      <button id="purchaseZero" button name="button">Coffee Grinder 1: costs ${purchaseCosts[0].toFixed(
        2,
      )} coffees</button>
      <button id="purchaseOne" button name="button">Coffee Kettle 1: costs ${purchaseCosts[1].toFixed(
        2,
      )} coffees</button>
      <button id="purchaseTwo" button name="button">Espresso Machine 1: costs ${purchaseCosts[2].toFixed(
        2,
      )} coffees</button>
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
