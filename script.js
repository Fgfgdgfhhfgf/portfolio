document.addEventListener('DOMContentLoaded', () => {

const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".close-button")
const modalSubtitle = document.querySelector(".modal-subtitle")
const modalTitle = document.querySelector(".modal-title")
const cards = document.querySelectorAll(".card")

const projects = [
    {
        id: 1,
        title: 'Проект 1',
        shortDesc: 'Краткое описание проекта 1',
        detailDesc: 'Подробное описание проекта 1, раскрывающее детали работы и использованные технологии',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3vlT5dDAjGcfFMvv4WTu5P-go2UphNmvbQ&s'
    },
    {
        id: 2,
        title: 'Проект 2',
        shortDesc: 'Краткое описание проекта 2',
        detailDesc: 'Подробное описание проекта 2, раскрывающее детали работы и использованные технологии',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3vlT5dDAjGcfFMvv4WTu5P-go2UphNmvbQ&s'
    },
    {
        id: 3,
        title: 'Проект 3',
        shortDesc: 'Краткое описание проекта 3',
        detailDesc: 'Подробное описание проекта 3, раскрывающее детали работы и использованные технологии',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3vlT5dDAjGcfFMvv4WTu5P-go2UphNmvbQ&s'
    },
    {
        id: 4,
        title: 'Проект 4',
        shortDesc: 'Краткое описание проекта 4',
        detailDesc: 'Подробное описание проекта 4, раскрывающее детали работы и использованные технологии',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3vlT5dDAjGcfFMvv4WTu5P-go2UphNmvbQ&s'
    },
    {
        id: 5,
        title: 'Проект 5',
        shortDesc: 'Краткое описание проекта 5',
        detailDesc: 'Подробное описание проекта 5, раскрывающее детали работы и использованные технологии',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3vlT5dDAjGcfFMvv4WTu5P-go2UphNmvbQ&s'
    },
    {
        id: 6,
        title: 'Проект 6',
        shortDesc: 'Краткое описание проекта 6',
        detailDesc: 'Подробное описание проекта 6, раскрывающее детали работы и использованные технологии',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3vlT5dDAjGcfFMvv4WTu5P-go2UphNmvbQ&s'
    }
];
const portfolioConteiner = document.querySelector(".portfolio-container")
function createCard(project){
    const card = document.createElement("div")
    card.classList.add("card") 
    const img = document.createElement("img")
    img.src = project.imgUrl
    img.alt = project.title
    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")
    const titleCard = document.createElement("h3")
    titleCard.textContent = project.title
    titleCard.classList.add("title-card")
    const subtitleCard = document.createElement("p")
    subtitleCard.textContent = project.shortDesc
    subtitleCard.classList.add("subtitle-card")
    cardContent.appendChild(titleCard)
    cardContent.appendChild(subtitleCard)
    card.appendChild(img)
    card.appendChild(cardContent)

    card.addEventListener("click", () => {
        modalTitle.textContent = project.title
        modalSubtitle.textContent = project.detailDesc
        modal.classList.add("modal-active")
    })
return card
}

projects.forEach(project => {
    const card = createCard(project)
    portfolioConteiner.appendChild(card)
});
    
closeButton.addEventListener("click", function(){
    modal.classList.remove("modal-active")
})

window.addEventListener("click", function(event){
    if(event.target === modal ){
        modal.classList.remove("modal-active")
    }
})

});