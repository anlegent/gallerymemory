const gallery = getElementById("container")

function renderGallery(data) {
    gallery.innerHTML = ""
    const ul = document.createElement("ul")
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li")
        li.innerHTML = `<img src="${data[i].image}" alt="${data[i].title}"></img>`
        ul.appendChild(li)
    }
    gallery.appendChild(ul)
}

const search = getElementById("search")
search.addEventListener("input", () => {
    const newData = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.includes(search.value)) {
            newData.push(data[i])
        }
        renderGallery(newData)
    }
    renderGallery(data)
})


const data = [
    {
        id: 0,
        image: "https://picsum.photos/id/40/400",
        title: "Close-up of a cat",
        category: "animals"
    },
    {
        id: 1,
        image: "https://picsum.photos/id/112/400",
        title: "Wheat field",
        category: "nature"
    },
    {
        id: 2,
        image: "https://picsum.photos/id/419/400",
        title: "Tramways",
        category: "vehicules"
    },
    {
        id: 3,
        image: "https://picsum.photos/id/551/400",
        title: "White car in the desert",
        category: "vehicules"
    },
    {
        id: 4,
        image: "https://picsum.photos/id/197/400",
        title: "Railways",
        category: "railways"
    },
    {
        id: 5,
        image: "https://picsum.photos/id/35/400",
        title: "Cactus",
        category: "nature"
    },
    {
        id: 6,
        image: "https://picsum.photos/id/237/400",
        title: "Dog",
        category: "animals"
    },
    {
        id: 7,
        image: "https://picsum.photos/id/204/400",
        title: "Railways on a bridge",
        category: "railways"
    }
]