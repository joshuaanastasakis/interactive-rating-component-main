let thankYouImage = document.querySelector("img.img-thanks");
let starImage = document.querySelector(".img-circle");

let ratingButtons = document.querySelectorAll("button.circle");
let submitButton = document.querySelector("button.submit");

let title = document.getElementById("firstTitle");
let subtitle = document.getElementById("firstSubtitle");

let finalTitle = document.getElementById("finalTitle");
let finalSubtitle = document.getElementById("finalSubtitle");

let finalRating = document.getElementById("finalRating");

let ratings = document.querySelector("div.ratings");

// submitButton.disabled = true;

let selectedRating = null;

ratingButtons.forEach(b => {
    b.addEventListener('click', e => {
        onRatingClick(e);
        submitButton.disabled = false;
        console.log(submitButton)
    })
});

submitButton.addEventListener('click', e => {
    handleSubmit();
});

function onRatingClick(e) {
    e.target.classList.add("selected");
    ratingButtons.forEach(b => {
        if (b.innerHTML !== e.target.innerHTML) {
            b.classList.remove("selected");
        }
    })

    selectedRating = e.target.innerHTML;
}

function handleSubmit() {
    console.log("Submit: " + selectedRating);

    starImage.style.display = "none";
    title.style.display = "none";
    subtitle.style.display = "none";
    ratings.style.display = "none";
    submitButton.style.display = "none";

    thankYouImage.style.display = "";
    finalTitle.style.display = "";
    finalSubtitle.style.display = "";
    finalRating.style.display = "";


    finalRating.innerHTML = "You selected " + selectedRating + " out of 5";

}

