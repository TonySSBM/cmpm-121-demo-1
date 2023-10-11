import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Coffee Clicker";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let counter: number = 0;

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

document
  .getElementById("counter")!
  .addEventListener("click", () => (counter += 1));
document
  .getElementById("counter")!
  .addEventListener(
    "click",
    () =>
      (document.getElementById("field_name")!.textContent =
        counter + " coffees"),
  );
