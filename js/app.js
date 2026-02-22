const MAX_CHARS = 160;

// accessing the elements from the html page. Storing in variables
const tweetInput = document.getElementById("tweetInput"); // text area
const charLabel = document.getElementById("charLabel"); // p tag
const tweetBtn = document.getElementById("tweetBtn"); // button

// function to update the counter and button state once character limit is hit
function charLimit(){

    const text = tweetInput.value; // storing user input in text


    const remaining = MAX_CHARS - text.length; // calculating characters left. 

    // updating the character limit display 
    charLabel.textContent = `${remaining} characters remaining`;

    // defining over limit (boolean)
    const overLim = remaining < 0;

    // handling empty edge case (boolean)
    const empty = text.trim().length === 0;


    // disable button if input is empty OR too long true on either or triggers disable button
    tweetBtn.disabled = overLim || empty;

    // changing color of text if user goes over char limit (if over limit is true)
    if(overLim) {
        charLabel.style.color = "#dc2626";
    } else {
        charLabel.style.color = "";
    }
}

// call function when user types. (Any interaction with the keyboard or changes in the text box)
// Key to making the counter constantly update
tweetInput.addEventListener("input", charLimit);

// on button click
tweetBtn.addEventListener("click", () =>{
    charLimit(); // revalidating when user tries to hit "tweeet" to make sure everything is correct

    if(tweetBtn.disabled) return; // exit function if button disabled

    // clear the box on submit 
    tweetInput.value = "";

    // refersh UI after clearing
    charLimit();
});

charLimit(); // initial run 