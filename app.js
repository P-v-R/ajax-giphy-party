"use strict";
console.log("Let's get this party started!");

let $submitBtn = $("#submit-btn");

// utilizes axios to call giffy  api and return array of GIFs realted to user input and chooses first GIF to append to HTML body
async function getGif() {
    let userInput = $("#user-input").val();
    let gif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let imageUrl = gif.data.data[0].images.original.url;
    $("#gif-area").append(`<img src="${imageUrl}"/>`);
    console.log(userInput, `<img src="${gif.data.data[0].url}"/>`);
    return imageUrl;
}

// when form is submitted, calls getGif function. 
$submitBtn.on("click", async function (e) {
    e.preventDefault();
    let foundImage = await getGif();
    console.log(foundImage);
})

// when reset button is clicked, reload page.
$("#reset").on("click", function () {
    location.reload();
});
