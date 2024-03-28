const dogs = data
// // Access Elements
const header = document.querySelector(".header")
const topMenu = document.querySelector(".dogs-list")
const addDogButton = document.querySelector(".dogs-list__button--add")
const main = document.querySelector(".main")
const dogCard = document.querySelector(".main__dog-section")

//Add buttons to top menu
function addTopMenuButtons() {
	for (let i = 0; i < dogs.length; i++) {
		const dogButton = document.createElement("li")
		dogButton.classList.add("dogs-list__button")
		dogButton.classList.add("dog-button")

		dogButton.innerText = dogs[i].name
		topMenu.append(dogButton)
	}
}

addTopMenuButtons()

//Create card's elements

//
function addDogName(dogs) {
	const dogName = document.createElement("h2")
	dogName.innerText = dogs.name
	return dogName
}

function addCardPic(dogs) {
	const dogPic = document.createElement("img")
	dogPic.setAttribute("src", dogs.image)
	dogPic.classList.add("dog-pic")
	return dogPic
}

function addBioContainer() {
	const bioDiv = document.createElement("div")
	bioDiv.setAttribute("class", "main__dog-section__desc")
	dogCard.append(bioDiv)
	return bioDiv
}

function addBioTxt(dogs, bioContainer) {
	const bioTitle = document.createElement("h3")
	const bioTxt = document.createElement("p")
	bioTitle.innerText = "bio"
	bioTxt.innerText = dogs.bio
	bioContainer.append(bioTitle, bioTxt)
}

//Naughty or Good question and answer

// Question <p>
function addNaughtyOrGoodQuestion() {
	// Question <p>
	const dogJudgementQuestion = document.createElement("p")
	dogJudgementQuestion.innerText = "Is Naughty?"
	dogJudgementQuestion.style.fontStyle = "italic"

	return dogJudgementQuestion
}

// Answer
function naughtyOrGood(dogs) {
	let naughty
	if (dogs.isGoodDog) {
		naughty = "No!"
	} else {
		naughty = "Yes!"
	}
	return naughty
}

const addNaughtyOrGoodAnswer = (dog) => {
	const isNaughty = naughtyOrGood(dog)
	const dogJudgementAnswer = document.createElement("p")
	dogJudgementAnswer.innerText = isNaughty
	dogJudgementAnswer.style.fontStyle = "normal"

	return dogJudgementAnswer
}

//Judge button 
function naughtyOrGoodBtn(dogs) {
	let naughtyBtnTxt
	if (dogs.isGoodDog) {
		naughtyBtnTxt = "Bad Dog!"
	} else {
		naughtyBtnTxt = "Good Dog!"
	}
	return naughtyBtnTxt
}

function addJudgeButton(dog) {
	const btnTxt = naughtyOrGoodBtn(dog)
	const judgeButton = document.createElement("button")
	judgeButton.innerText = btnTxt

	return judgeButton
}


// Assemble the card
function createDogCard(dog) {
	const dogName = addDogName(dog)
	dogCard.append(dogName)
	const dogPic = addCardPic(dog)
	dogCard.append(dogPic)
	const bioContainer = addBioContainer()

	addBioTxt(dog, bioContainer)
	const isNaughtyQ = addNaughtyOrGoodQuestion(dog)
	const isNaughtyA = addNaughtyOrGoodAnswer(dog)
	isNaughtyQ.append(isNaughtyA)
	dogCard.append(isNaughtyQ)
	const judgeDoggie = addJudgeButton(dog)
	dogCard.append(judgeDoggie)

	judgeDoggie.addEventListener("click", (event) => {
		if (event.target.innerText === "Good Dog!") {
			isNaughtyA.innerText = "No!"
			event.target.innerText = "Bad Dog!"
		} else {
			isNaughtyA.innerText = "Yes!"
			event.target.innerText = "Good Dog!"
		}
	})
}

// Handle top menu clicks and construct card to display

function handleDogButtonClick(dogs) {
	topMenu.addEventListener("click", (event) => {
		const clickedButton = event.target

		if (clickedButton.classList.contains("dog-button")) {
			// Find the index of the clicked dog in the array
			const index = Array.from(topMenu.querySelectorAll(".dog-button")).indexOf(
				clickedButton
			)
			// Clear existing content in dogCard
			dogCard.innerHTML = ""

			// Call card construction
			createDogCard(dogs[index])
		}
	})
}

handleDogButtonClick(dogs)

// Create add dog form

function makeAddDogForm() {
	const formSection = document.createElement("section")
	formSection.classList.add("main__dog-section")
}

function makeFormTitle() {
	const formTitle = document.createElement("h2")
	formTitle.innerText = "Add a new Dog"
}

function makeNameInput() {
	const nameInput = document.createElement
}

// function makeAddDogNameField() {
// 	const addNameField
// }
