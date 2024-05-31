const container = document.querySelector("#container");
for (let i = 0; i < 8; i++) {
  const article = document.createElement("article");
  article.classList.add("articles");
  container.appendChild(article);

  const img = document.createElement("img");
  img.classList.add("image");
  article.appendChild(img);

  const para = document.createElement("p");
  para.classList.add("para");
  img.appendChild(para);
}