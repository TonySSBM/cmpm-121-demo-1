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
const purchaseCosts: number[] = [10];
const purchaseIncrease: number[] = [1];

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
  autoNum += purchaseIncrease[purchaseObj];
}

requestAnimationFrame(function () {
  autoCoffee(autoNum);
});

function shopEnabling() {
  (document.getElementById("purchaseZero") as HTMLButtonElement)!.disabled =
    coffees < purchaseCosts[0];
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" button name="button">☕</button>
    </div>
    <div id="panel">
      <div id="field_name">${coffees.toFixed(2)} coffees made</div>
    </div>
    <div class="card">
      <button id="purchaseZero" button name="button">Coffee Grinder: costs ${
        purchaseCosts[0]
      } coffees</button>
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
