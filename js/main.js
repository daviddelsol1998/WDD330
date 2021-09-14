const links = [
  {
    label: "Week 1",
    url: "/week1/index.html"
  }
]

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;

function myFunction(item, index) {
  text += index + ": " + item + "<br>";
}