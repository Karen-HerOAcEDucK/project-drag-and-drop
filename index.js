const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

// cards
cards.forEach((card) => {
    card.addEventListener('dragstart', dragstartCard)
    card.addEventListener('drag', dragCard)
    card.addEventListener('dragend', dragendCard)
})

function dragstartCard() {
    dropzones.forEach((dropzone) => {dropzone.classList.add('highlight')})
    this.classList.add('is-moving-card')
}

function dragCard() {
}

function dragendCard() {
    dropzones.forEach((dropzone) => {dropzone.classList.remove('highlight')})
    this.classList.remove('is-moving-card')
}

// dropzones
dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenterCard)
    dropzone.addEventListener('dragover', dragoverCard)
    dropzone.addEventListener('dragleave', dragleaveCard)
    dropzone.addEventListener('drop', dropCard)
})

function dragenterCard() {
}

function dragoverCard() {
    this.classList.add('over')
    const cardMoving = document.querySelector('.is-moving-card')
    this.appendChild(cardMoving)
}

function dragleaveCard() {
    this.classList.remove('over')
}

function dropCard() {
    this.classList.remove('over')
}