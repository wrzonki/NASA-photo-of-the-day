const apiKey = 'QqWsFKIoDWEbA5HwUP5VhCvuDI61oU7a4IRjwhB4';
async function getData (url, outputSel) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
};

let url1 = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;

getData(url1)
    .then(function (response) {
        console.log(response);
        var img = document.querySelector('#item1 .output img');
        img.src = response.hdurl;

    })