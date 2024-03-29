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

// Create add-dog form

function makeAddDogFormSection() {
	const formSection = document.createElement("section")
	formSection.classList.add("main__dog-section")
	return formSection
}

function makeFormTitle() {
	const formTitle = document.createElement("h2")
	formTitle.innerText = "Add a new Dog"
	return formTitle
}

function makeAddDogForm() {
	const newDogForm = document.createElement("form")
	newDogForm.classList.add("form")
	return newDogForm
}

function makeNameInputLabel() {
	const nameInputLabel = document.createElement("label")
	nameInputLabel.setAttribute("for", "name")
	nameInputLabel.innerText = "Dog's name"
	return nameInputLabel
}

function makeNameInput() {
	const nameInput = document.createElement("input")
	nameInput.setAttribute("type", "text")
	nameInput.setAttribute("id", "name")
	nameInput.setAttribute("name", "name")
	return nameInput
}

function makeImageInputLabel() {
	const imageInputLabel = document.createElement("label")
	imageInputLabel.setAttribute("for", "Image")
	imageInputLabel.innerText = "Dog's picture"
	return imageInputLabel
}

function makeImageInput() {
	const imageInput = document.createElement("img")
	imageInput.setAttribute("type", "url")
	imageInput.setAttribute("id", "image")
	imageInput.setAttribute("name", "image")
	return imageInput
}

function makeBioInputLabel() {
	const bioInputLabel = document.createElement("label")
	bioInputLabel.setAttribute("for", "bio")
	bioInputLabel.innerText = "Dog's bio"
	return bioInputLabel
}

function makeBioInput() {
	const bioInput = document.createElement("textarea")
	bioInput.setAttribute("id", "bio")
	bioInput.setAttribute("name", "bio")
	bioInput.setAttribute("rows", 5)
	return bioInput
}

function makeFormSubmitBtn() {
	const submitForm = document.createElement("input")
	submitForm.setAttribute("id", "submit")
	submitForm.setAttribute("type", "submit")
	submitForm.setAttribute("name", "submit")
	submitForm.setAttribute("value", "Let's add a dog!")
	submitForm.classList.add("form__button")
	return submitForm
}

function makeAddDogInterface() {
	const section = makeAddDogFormSection()
	main.append(section)
	const form = makeAddDogForm()
	section.append(form)
	const title = makeFormTitle()
	form.append(title)
	const nameLabel = makeNameInputLabel()
	form.append(nameLabel)
	const addName = makeNameInput()
	form.append(addName)
	const imageLabel = makeImageInputLabel()
	form.append(imageLabel)
	const addImage = makeImageInput()
	form.append(addImage)
	const bioLabel = makeBioInputLabel()
	form.append(bioLabel)
	const addBio = makeBioInput()
	form.append(addBio)
	const submitButton = makeFormSubmitBtn()
	form.append(submitButton)
}

// function addNewDoggie() {
// 	const newDoggieObj = {
// 		id: null,
// 		name: null,
// 		bio: null,
// 		isGoodDog: true,
// 		image: null,
// 	}
// 	const doggieName = document.getElementById("name").value
// 	const doggieImage = document.getElementById("image").value
// 	const doggieBio = document.getElementById("bio").value
// 	newDoggieObj.id = dogs.length + 1
// 	newDoggieObj.name = doggieName
// 	newDoggieObj.image = doggieImage
// 	newDoggieObj.bio = doggieBio
// 	dogs.unshift(newDoggieObj)

// }

// Handle top menu clicks and display cards/form
function handleDogButtonClick(dogs) {
	topMenu.addEventListener("click", (event) => {
		event.preventDefault()
		const clickedButton = event.target
		dogCard.innerHTML = ""
		if (clickedButton.classList.contains("dog-button")) {
			// Find the index of the clicked dog in the array
			const index = Array.from(topMenu.querySelectorAll(".dog-button")).indexOf(
				clickedButton
			)
			// Clear existing content in dogCard
			dogCard.innerHTML = ""
			createDogCard(dogs[index])
		} else {
			clearMain()
			makeAddDogInterface()
		}
	})
}

handleDogButtonClick(dogs)

function clearMain() {
	const oldCard = document.querySelector(".main__dog-section")
	oldCard.remove()
}
