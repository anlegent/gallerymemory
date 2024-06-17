let count = 0

const images = [
    "https://picsum.photos/id/40/150",
    "https://picsum.photos/id/112/150",
    "https://picsum.photos/id/419/150",
    "https://picsum.photos/id/551/150",
    "https://picsum.photos/id/197/150",
    "https://picsum.photos/id/35/150",
    "https://picsum.photos/id/237/150",
    "https://picsum.photos/id/204/150"
]

const titles = [
    "A cat",
    "Wheat fields",
    "Tramways",
    "White car in the desert",
    "Train railways",
    "Cactus",
    "A dog",
    "Railways on bridge"
]

for (let i = 0; i < 7; i++) {
    count++

    const article = document.createElement("article")
    article.id = `article${count}`
    document.body.appendChild(article)
    document.getElementById("container").appendChild(article)

    const image = document.createElement("img")
    image.id = "image"
    image.srcset = images[count]
    document.body.appendChild(image)
    document.getElementById(`article${count}`).appendChild(image)

    const title = document.createElement("p")
    title.id = "title"
    title.className = "red-bgc"
    title.textContent = titles[count]
    document.body.appendChild(title);
    document.getElementById(`article${count}`).appendChild(title)
}