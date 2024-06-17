let count = 0
for (let i = 0; i < 8; i++) {
    count++

    const article = document.createElement("article")
    article.id = `article${count}`
    document.body.appendChild(article)
    document.getElementById("container").appendChild(article)

    const image = document.createElement("img")
    image.id = "image"
    image.srcset = "https://picsum.photos/300"
    document.body.appendChild(image)
    document.getElementById(`article${count}`).appendChild(image)

    const title = document.createElement("p")
    title.id = "title"
    title.textContent = "a title"
    document.body.appendChild(title);
    document.getElementById(`article${count}`).appendChild(title)
}


const images = [
    "https://picsum.photos/id/40/300",
    "https://picsum.photos/id/112/300",
    "https://picsum.photos/id/419/300",
    "https://picsum.photos/id/551/300",
    "https://picsum.photos/id/197/300",
    "https://picsum.photos/id/35/300",
    "https://picsum.photos/id/237/300",
    "https://picsum.photos/id/204/300"
]

const titles = [
    "A cat",
    "Wheat fields",
    "Tramways",
    "White car in the desert",
    "Train railways",
    "Cactus",
    "A dog",
    "railways on bridge"]

//const data = [
//    {
//        id: 0,
//        image: "https://picsum.photos/id/40/300",
//        title: "A cat",
//        category: "animals",
//    },
//    {
//        id: 1,
//        image: "https://picsum.photos/id/112/300",
//        title: "Wheat fields",
//        category: "nature"
//    },
//    {
//        id: 2,
//        image: "https://picsum.photos/id/419/300",
//        title: "Tramways",
//        category: "vehicules"
//    },
//    {
//        id: 3,
//        image: "https://picsum.photos/id/551/300",
//        title: "White car in the desert",
//        category: "vehicules"
//    },
//    {
//        id: 4,
//        image: "https://picsum.photos/id/197/300",
//        title: "Train railways",
//        category: "railway"
//    },
//    {
//        id: 5,
//        image: "https://picsum.photos/id/35/300",
//        title: "Cactus",
//        category: "nature"
//    },
//    {
//        id: 6,
//        image: "https://picsum.photos/id/237/300",
//        title: "A dog",
//        category: "animals"
//    },
//    {
//        id: 7,
//        image: "https://picsum.photos/id/204/300",
//        title: "Railways on a bridge",
//        category: "railway"
//    }
//]