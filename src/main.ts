import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Coffee Clicker";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let coffees: number = 0;
const autoNum: number = 1; //change to let later
let pastTime: number = 0;

function autoCoffee(numPick: number) {
  numPick = autoNum;
  coffees += (numPick * (performance.now() - pastTime)) / 1000;
  pastTime = performance.now();
  document.getElementById("field_name")!.textContent =
    coffees.toFixed(2) + " coffees made";
  requestAnimationFrame(autoCoffee);
}

requestAnimationFrame(function () {
  autoCoffee(autoNum);
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
    <button id="counter" button name="button">☕</button>
    </div>
    <div id="panel">
      <div id="field_name">${coffees.toFixed(2)} coffees made</div>
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
