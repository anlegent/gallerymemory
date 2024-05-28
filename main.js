const container = document.getElementById("#container");

const article = document.createElement("article");
article.classList.add("article");
container.appendChild(article);

const img = document.createElement("img");
img.classList.add("image");
article.appendChild(img);

const para = document.createElement("p");
para.classList.add("parag");
img.appendChild(para);

const articleTitle = (document.getElementsByClassName("parag").textContent =
  "this text is generated from Js");
