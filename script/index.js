let box = document.getElementById("mainBox");
let btn = document.getElementById("button");

btn.addEventListener("click", () => {
  getData();
});
async function getData() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await response.json();
  box.style.fontSize = "20px";
  box.innerText = data.joke;
}
