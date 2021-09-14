const links = [
  {
    label: "Week 1",
    url: "/week1/index.html"
  }
]

let text = "";
links.forEach(myFunction);

function myFunction(item) {
  var li = document.createElement("li");
  var a = document.createElement("a")
  var label = document.createTextNode(item.label)
  var url = document.createTextNode(item.url)
  li.appendChild(a);
  a.appendChild(label)
  a.appendChild(url)
  document.getElementById("link-list").appendChild(li);
}