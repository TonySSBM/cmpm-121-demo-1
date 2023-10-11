import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Coffee Clicker";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
        <button name="button">Press me</button>
    </div>
  </div>
`;
