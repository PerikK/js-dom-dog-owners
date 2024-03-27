const dogs = data
// Access Elements
const header = document.querySelector(".header")
const topMenu = document.querySelector(".dogs-list")
const addDogButton = document.querySelector(".dogs-list__button--add")
const dogSelectButton = document.querySelector(".dogs-list__button")
const main = document.querySelector(".main")
const dogCard = document.querySelector(".main__dog-section")
const dogName = document.querySelector(".main__dog-section h2")

// Create elements
// Image
const dogPic = document.createElement("img")
dogPic.classList.add("dog-pic")
// Bio div
const dogBioContainer = document.createElement("div")
dogBioContainer.classList.add("main__dog-section")
const bioH3 = document.createElement("h3")
bioH3.classList.add("main__dog-section--h3")
const bioText = document.createElement("p")
bioText.classList.add("main__dog-section--text")

// Judjing the dog :D
const goodBadDog = document.createElement("p")
goodBadDog.classList.add("main__dog-section--goodBad")
const judjeButton = document.createElement("button")
judjeButton.classList.add("main__dog-section--goodBad_button")

//Create menu buttons

const createDogButtons = (dogs) => {
	for (let i = 0; i < dogs.length; i++) {
		const dogButton = document.createElement("li")
		dogButton.classList.add("dogs-list__button")
		dogButton.classList.add("dog-button")

		dogButton.innerText = dogs[i].name
		topMenu.append(dogButton)

		// store the index of the dog in the array
		dogButton.dataset.dogIndex = i
	}
}
createDogButtons(dogs)

// Object to store the clicked dog

const clickedDogObj = {
	clickedDog: null,
}

// handle click events on dog buttons and store them in clickeDogObj

const handleDogButtonClick = (dogs, onClickCallback) => {
	topMenu.addEventListener("click", (event) => {
		const clickedElement = event.target
		// Check if the clicked element is a dog button
		if (clickedElement.classList.contains("dog-button")) {
			// Retrieve the index from the custom attribute and use it to access the selected dog
			const dogIndex = parseInt(clickedElement.dataset.dogIndex)
			clickedDogObj.clickedDog = dogs[dogIndex]
			onClickCallback(clickedDogObj.clickedDog)
		}
	})
}

handleDogButtonClick(dogs, (clickedDogObj) => {
	dogName.innerText = clickedDogObj.name
	dogPic.setAttribute("src", clickedDogObj.image)
	dogCard.append(dogPic)

	bioH3.innerText = "Bio"
	bioH3.style.fontWeight = "1000"
	dogCard.append(bioH3)

	bioText.innerText = clickedDogObj.bio
	dogCard.append(bioText)

	if (clickedDogObj.isGoodDog) {
		goodBadDog.innerText = "Is naughty? No!"
		judjeButton.innerText = "Bad Dog"
	} else {
		goodBadDog.innerText = "Is naughty? Yes!"
		judjeButton.innerText = "Good Dog"
	}

	goodBadDog.style.fontStyle = "italic"
	dogCard.append(goodBadDog)
	dogCard.append(judjeButton)

	judjeButton.addEventListener("click", (event) => {
		event.preventDefault()
		if (clickedDogObj.isGoodDog === true) {
			goodBadDog.innerText = "Is naughty? Yes!"
			judjeButton.innerText = "Good Dog"
			clickedDogObj.isGoodDog = false
		} else {
			goodBadDog.innerText = "Is naughty? No!"
			judjeButton.innerText = "Bad Dog"
			clickedDogObj.isGoodDog = true
		}
	})
	return clickedDogObj
})
