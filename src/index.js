// const dogs = data
// // Access Elements
// const header = document.querySelector(".header")
// const topMenu = document.querySelector(".dogs-list")
// const addDogButton = document.querySelector(".dogs-list__button--add")
// const dogSelectButton = document.querySelector(".dogs-list__button")
// const main = document.querySelector(".main")
// const dogCard = document.querySelector(".main__dog-section")
// const dogName = document.querySelector(".main__dog-section h2")

// // Create elements
// // Image
// const dogPic = document.createElement("img")
// dogPic.classList.add("dog-pic")
// // Bio div
// const dogBioContainer = document.createElement("div")
// dogBioContainer.classList.add("main__dog-section")
// const bioH3 = document.createElement("h3")
// bioH3.classList.add("main__dog-section--h3")
// const bioText = document.createElement("p")
// bioText.classList.add("main__dog-section--text")

// // Judjing the dog :D
// const goodBadDog = document.createElement("p")
// goodBadDog.classList.add("main__dog-section--goodBad")
// const judjeButton = document.createElement("button")
// judjeButton.classList.add("main__dog-section--goodBad_button")

// //Create menu buttons

// const createDogButtons = (dogs) => {
// 	for (let i = 0; i < dogs.length; i++) {
// 		const dogButton = document.createElement("li")
// 		dogButton.classList.add("dogs-list__button")
// 		dogButton.classList.add("dog-button")

// 		dogButton.innerText = dogs[i].name
// 		topMenu.append(dogButton)

// 		// store the index of the dog in the array
// 		dogButton.dataset.dogIndex = i
// 		console.log(dogButton.dataset);
// 	}
// }
// createDogButtons(dogs)

// // Object to store the clicked dog

// const clickedDogObj = {
// 	clickedDog: null,
// }

// // handle click events on dog buttons and store them in clickeDogObj

// const handleDogButtonClick = (dogs, onClickCallback) => {
// 	topMenu.addEventListener("click", (event) => {
// 		const clickedElement = event.target
// 		// Check if the clicked element is a dog button
// 		if (clickedElement.classList.contains("dog-button")) {
// 			// Retrieve the index from the custom attribute and use it to access the selected dog
// 			const dogIndex = parseInt(clickedElement.dataset.dogIndex)
// 			clickedDogObj.clickedDog = dogs[dogIndex]
// 			onClickCallback(clickedDogObj.clickedDog)
// 		}
// 	})
// }

// handleDogButtonClick(dogs, (clickedDogObj) => {
	
// 	dogName.innerText = clickedDogObj.name
// 	dogPic.setAttribute("src", clickedDogObj.image)
// 	dogCard.append(dogPic)

// 	// bioH3.innerText = "Bio"
// 	// bioH3.style.fontWeight = "1000"
// 	// dogCard.append(bioH3)

// 	// bioText.innerText = clickedDogObj.bio
// 	// dogCard.append(bioText)

// 	dogCard.append(dogBioContainer)

// 	bioH3.innerText = "Bio"
// 	bioH3.style.fontWeight = "1000"
// 	dogBioContainer.append(bioH3)

// 	bioText.innerText = clickedDogObj.bio
// 	dogBioContainer.append(bioText)

// 	if (clickedDogObj.isGoodDog) {
// 		goodBadDog.innerText = "Is naughty? No!"
// 		judjeButton.innerText = "Bad Dog"
// 	} else {
// 		goodBadDog.innerText = "Is naughty? Yes!"
// 		judjeButton.innerText = "Good Dog"
// 	}

// 	goodBadDog.style.fontStyle = "italic"
// 	dogCard.append(goodBadDog)
// 	dogCard.append(judjeButton)

// 	judjeButton.addEventListener("click", (event) => {
// 		event.preventDefault()
// 		if (clickedDogObj.isGoodDog === true) {
// 			goodBadDog.innerText = "Is naughty? Yes!"
// 			judjeButton.innerText = "Good Dog"
// 			clickedDogObj.isGoodDog = false
// 		} else {
// 			goodBadDog.innerText = "Is naughty? No!"
// 			judjeButton.innerText = "Bad Dog"
// 			clickedDogObj.isGoodDog = true
// 		}
// 	})
// 	return clickedDogObj
// })


// new try with separated functions

const dogs = data

//Create top-menu buttons

const createDogButtons = (dogs) => {
	const dogButton = document.createElement("li")
	dogButton.classList.add("dogs-list__button")
	dogButton.classList.add("dog-button")
	dogButton.innerText = dogs.name

	// Keep track of wich button is clicked
	dogButton.dataset.clickedDog = dogs.name

	buttonClick(dogButton, dogs)

	return dogButton
}

//Add buttons to top-menu
const addButtonsToTopMenu = () => {
	for (let i = 0; i < dogs.length; i++) {
		const addedButton = createDogButtons(data[i])
		topMenu.append(addedButton)
	}
}

// Create an object to keep the clicked dog in case it is needed
const clickedDogName = []

//Make top-menu buttons clickable
const buttonClick = (li, dogs) => {
	li.addEventListener("click", () => {
		// Get the clicked dog's id from the dataset of the clicked button and push in in an array in case it is needed
		const clickedDog = li.dataset.clickedDog
		// clickedDogName.push(clickedDog)

		// console.log("Clicked dog ID:", clickedDog)
		// console.log("inside", clickedDogName)
		// refreshDog(data)
	})
}

addButtonsToTopMenu()



// ======== build cards parts


const cardSection = () => {
	const cardContent = document.createElement("section")
	cardContent.classList.add("main__dog-section")
	return cardContent
}


const addDogName = (card, text) => {
    const dogName = document.createElement('h2')
    dogName.innerText = text
    card.append(dogName)
    return card
}

const addPic = (card, pic) => {
    const dogPic = document.createElement('img')
    dogPic.setAttribute('src', pic)
    card.append(dogPic)
    return card
}

const bioDiv = (card) => {
    const divContainer = document.createElement('div')
    divContainer.classList.add("main__dog-section__desc")
    card.append(divContainer)
    return card
}

const addBio = (card, txt) => {
    const bioTitle = document.createElement('h3')
    const bioText = document.createElement('p')
    const bioContainer = card.querySelector("main__dog-section__desc")
    bioTitle = 'Bio'
    bioTitle.style.fontWeight = '1000'
    bioText.innerText = txt
    bioContainer.append(bioTitle)
    bioContainer.append(bioText)
    return card
}

const addJudgement = (card, dogs) => {
    const judgementTxt = document.createElement('p')
    if (dogs.isGoodDog) {
        judgementTxt.innerText = 'Yes!'
    } else {
        judgementTxt.innerText = 'No!'
    }
    judgementTxt.style.fontStyle = 'italic'
    card.append(judgementTxt)
    return card
}

const judgeButton = (card, dogs) => {
    const button = document.createElement('button')
    if (dogs.isGoodDog) {
        button.innerText = 'Bad Dog!'
    } else {
        button.innerText = 'Good Dog!'
    }
    card.append(button)
}

// ======= Assemble card

const dogCard = (data) => {
	const card = cardSection()
	const cardTitle = addDogName(card, dogs.name)
	const cardPic = addPic(cardTitle, dogs.image)
	const cardDiv = bioDiv(cardPic)
	const cardBio = addBio(cardDiv, dogs.bio)
	const cardJudgement = addJudgement(cardBio, dogs)
	const theDog = judgeButton(cardJudgement, dogs)
	return theDog
}
