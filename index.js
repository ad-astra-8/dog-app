'use strict';

function getDogImage(howManyImages) {
    // console.log('getDogImage()');
    fetch(`https://dog.ceo/api/breeds/image/random/${howManyImages}`)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
}

function displayResults(responseJson) {
    // console.log(responseJson);
    // console.log('displayResults()');
    $('.results').html('');
    // display every image in the responseJson.message
    for (let i = 0; i < responseJson.message.length; i++) {
        $('.results').append(
            `<img src="${responseJson.message[i]}" class="results-img" alt="random dog image">`
        )
    }
    //display the results section
    $('.results').removeClass('hidden');
}


function watchForm() {
    $('form').on('submit', function (event) {
        // console.log('watchForm()');
        event.preventDefault();
        let howManyImages = $("#dog-pics-num").val();
        // console.log(howManyImages);
        getDogImage(howManyImages);
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});