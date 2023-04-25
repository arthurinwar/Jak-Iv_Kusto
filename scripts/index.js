let popup = document.querySelector(".popup");
let formElement = popup.querySelector(".popup__form");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = popup.querySelector(".popup__form-closer");
let authorName = document.querySelector(".profile__name");
let authorDescription = document.querySelector(".profile__description");
let popupAuthorName = popup.querySelector("#popup-name");
let popupAuthorDescription = popup.querySelector("#popup-description");

function openedPopup() {
    popup.classList.add("popup_opened");
}

function closedPopup() {
    popup.classList.remove("popup_opened");
}

openPopup.addEventListener("click", function() {
    popupAuthorName.value = authorName.textContent;
    popupAuthorDescription.value = authorDescription.textContent;
    openedPopup();
})

closePopup.addEventListener("click", function() {
    closedPopup();
})

popup.addEventListener("click", function(action) {
    if (action.target === action.currentTarget) {
        closedPopup();
    }
})

function handleFormSubmit (evt) {
    evt.preventDefault();
    authorName.textContent = popupAuthorName.value;
    authorDescription.textContent = popupAuthorDescription.value;
    closedPopup();
}

formElement.addEventListener('submit', handleFormSubmit); 






