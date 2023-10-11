import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Coffee Clicker";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let counter: number = 0;
const autoNum: number = 1; //change to let later

function autoCoffee(autoNum: number) {
  counter += autoNum;
  document.getElementById("field_name")!.textContent = counter + " coffees";
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
    <button id="counter" button name="button">☕</button>
    </div>
    <div id="panel">
      <div id="field_name">${counter} coffees</div>
    </div>
  </div>
`;

setInterval(function () {
  autoCoffee(autoNum);
}, 1000);

document
  .getElementById("counter")!
  .addEventListener("click", () => (counter += 1));
document;

document
  .getElementById("counter")!
  .addEventListener(
    "click",
    () =>
      (document.getElementById("field_name")!.textContent =
        counter + " coffees"),
  );
