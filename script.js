document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector(".modal")
    const closeButton = document.querySelector(".close-button")
    const modalSubtitle = document.querySelector(".modal-subtitle")
    const modalTitle = document.querySelector(".modal-title")
    const cards = document.querySelectorAll(".card")
    const linkGithub = document.querySelector(".link-github")
    const linkProject = document.querySelector(".link-project")

    const projects = [
        {
            id: 1,
            title: 'clock',
            shortDesc: 'актуальное время и дата',
            detailDesc: 'сайт на html, css, js, который показывает актуальное время и дату в зовисимотси от региона пользователя',
            imgUrl: "images/clock.jpg",
            githubUrl: 'https://github.com/Fgfgdgfhhfgf/clock',
            liveLink: 'https://clock-six-bay.vercel.app/'
        },
        {
            id: 2,
            title: 'ping-pong',
            shortDesc: 'игра пинг-понг',
            detailDesc: 'игра разработана на html, js. Для управления используем кнопки на клавиатуре играем против бота',
            imgUrl: 'images/ping-pong.jpg',
            githubUrl: 'https://github.com/Fgfgdgfhhfgf/pind---pond',
            liveLink: 'https://ping-pong-cyan.vercel.app/'
        },
        {
            id: 3,
            title: 'Mesto',
            shortDesc: 'это место где ты можешь выложить свои фото',
            detailDesc: 'сайт н6а который можно выкладывать свои и зарабатывать лайки',
            imgUrl: 'images/mesto.jpg',
            githubUrl: 'https://github.com/Fgfgdgfhhfgf/mesto',
            liveLink: 'https://mesto-green.vercel.app/'
        },
        {
            id: 4,
            title: 'rundom-number',
            shortDesc: 'вписывай любое число и надейся на свою удачу!',
            detailDesc: 'в этой игре надо угодать и написать число, которое выбераешь не ты, а компьютер и ты не знаешь его ',
            imgUrl: 'images/rundom.jpg',
            githubUrl: 'https://github.com/Fgfgdgfhhfgf/guess-number',
            liveLink: 'https://guess-number-roan-six.vercel.app/'
        },
    ];
    const portfolioConteiner = document.querySelector(".portfolio-container")
    function createCard(project) {
        const card = document.createElement("div")
        card.classList.add("card")
        const imgWrapper = document.createElement('div')
        imgWrapper.classList.add('img-wrapper')
        const img = document.createElement("img")
        img.classList.add("card-img")
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
        imgWrapper.appendChild(img)
        cardContent.appendChild(titleCard)
        cardContent.appendChild(subtitleCard)
        card.appendChild(imgWrapper)
        card.appendChild(cardContent)

        card.addEventListener("click", () => {
            modalTitle.textContent = project.title
            modalSubtitle.textContent = project.detailDesc
            linkGithub.href = project.githubUrl
            linkProject.href = project.liveLink
            modal.classList.add("modal-active")
        })
        return card
    }

    projects.forEach(project => {
        const card = createCard(project)
        portfolioConteiner.appendChild(card)
    });

    closeButton.addEventListener("click", function () {
        modal.classList.remove("modal-active")
    })

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("modal-active")
        }
    })

});
    linkGithub 