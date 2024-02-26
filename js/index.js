document.getElementById("memeform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent standard form submission
    hasil();
});

function hasil() {
    var input = document.getElementById("ketik").value;
    var contentContainer = document.getElementById("content");

    if (input === "1") {
        displayMeme(contentContainer);
    } else if (input === "2") {
        displayCute(contentContainer);
    } else {
        displayError(contentContainer);
    }

    document.getElementById("memeform").style.display = "none";
    document.getElementById("container").style.display = "none";
}

function displayMeme(container) {
    var meme = [
        "https://i.pinimg.com/564x/d2/06/e1/d206e18a9d11982ec533ec19fe2269b6.jpg",
        "https://i.pinimg.com/originals/ef/31/da/ef31da3aac21d75fede9d3ca00b8f14f.jpg",
    ];

    var randomemeUrl = meme[Math.floor(Math.random() * meme.length)];
    container.innerHTML = "<img src='" + randomemeUrl + "'>";
}

function displayCute(container) {
    var cute = [
        "https://i.pinimg.com/originals/a6/b1/7b/a6b17b01b2ef9cde8445b6b267dca1dd.jpg"
    ];

    var randomcuteUrl = cute[Math.floor(Math.random() * cute.length)];
    container.innerHTML = "<img src='" + randomcuteUrl + "'>";
}

function displayError(container) {
    container.innerHTML = "<img src='https://i.pinimg.com/564x/ea/31/4e/ea314ef58e39c1ba43f3f9acd46a3073.jpg'>";
}
