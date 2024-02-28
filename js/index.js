document.getElementById("memeform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent standard form submission
    hasil();
});

// Tambahkan event listener untuk menangani akhir animasi "popUp"
imgElement.addEventListener('animationend', function() {
    imgElement.classList.remove('pop-up-effect'); // Hapus kelas efek pop up
    imgElement.classList.add('burst-effect'); // Tambahkan kelas efek ledakan
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
        "https://i.pinimg.com/originals/9f/a5/c5/9fa5c55dd5464c5e0c14bd24efe166dd.jpg",
        "https://i.pinimg.com/originals/3a/8a/b9/3a8ab952c148f233934b914de716d708.jpg",
        "https://i.pinimg.com/originals/47/d4/be/47d4be3d7c61e5cddb0d0669abccb469.jpg",
        "https://i.pinimg.com/originals/c8/2c/c6/c82cc640321a8941865c88d12b59f74c.jpg",
        "https://i.pinimg.com/originals/e5/1e/01/e51e01741344d9ec8983dc61a338652d.jpg",
        "https://i.pinimg.com/originals/27/8a/0b/278a0bd91462e8e3ebce39b0355f095f.jpg",
        "https://i.pinimg.com/originals/07/a1/50/07a1500e1433a9f3308b7b20cb05cec0.jpg",
        "https://i.pinimg.com/originals/3f/19/09/3f190968c8b5c4ac5c040cb541d0c986.jpg",
        "https://i.pinimg.com/originals/de/36/0f/de360f18e252f32a63eb31d21430daeb.jpg",
        "https://i.pinimg.com/originals/81/69/56/816956fd9e80917300aff6e291f25d2a.jpg",
        "https://i.pinimg.com/originals/0e/53/d8/0e53d8366dad54c02ccd242f520bd16c.jpg",
        "https://i.pinimg.com/originals/17/db/ff/17dbff9f5c48d7740a55b25e9cc8c9ba.jpg",
        "https://i.pinimg.com/originals/98/7a/67/987a6735bd1fb2d7ac3e1d47da64a78a.jpg",
        "https://i.pinimg.com/originals/66/28/7c/66287c856933b22dd663b646d33b8fae.jpg",
        "https://i.pinimg.com/originals/25/17/8a/25178a99c9f81c7d5d8931f973c1fa77.jpg",
        "https://i.pinimg.com/originals/8f/af/b8/8fafb8bdd315de22060ac46e93e4ecbe.jpg",
        "https://i.pinimg.com/originals/f2/ba/eb/f2baeb42747c1cbdbb46938f157d897d.jpg",
        "https://i.pinimg.com/originals/a4/9b/d2/a49bd26d44a291d5498852df4f5bd871.jpg",
        "https://i.pinimg.com/originals/d3/30/0c/d3300c96227a65c8e0d478beb1e21b24.jpg",
        "https://i.pinimg.com/originals/9c/73/18/9c73185e68ba34cac7f6d32146fc8996.jpg",
        "https://i.pinimg.com/originals/9b/2c/ca/9b2cca722ec8f95d2d458f1ff6587958.jpg",
        "https://i.pinimg.com/originals/3d/af/37/3daf3774224b2c1581794adc7a96a76f.jpg",
        "https://i.pinimg.com/originals/92/c2/39/92c2395d83e5bcdb9c6c1dc6350b4bbd.jpg",
        "https://i.pinimg.com/originals/f1/a9/98/f1a9985500e8c4500ee390be8cf4931d.jpg",
        "https://i.pinimg.com/originals/65/62/c5/6562c55baa511b2035fb23774d1b8c20.jpg",
        "https://i.pinimg.com/originals/41/9d/ec/419dec3fce802c0dd676a351223991de.jpg",
        "https://i.pinimg.com/originals/dc/20/0e/dc200e9106b2dd1d043a6ea6c8fc713b.jpg",
        "https://i.pinimg.com/originals/84/74/f6/8474f6aa9d7f6b603a7aa320b06679e3.jpg",
        "https://i.pinimg.com/originals/8f/de/12/8fde120bc728e123e80fdc43efc0ffed.jpg",
        "https://i.pinimg.com/originals/97/b1/96/97b196d0ae3b39bb070b9b455da45bef.jpg",
        "https://i.pinimg.com/564x/34/64/ad/3464ad1c33c983b87d66f14b092f11ee.jpg",
        "https://i.pinimg.com/originals/c2/4a/29/c24a29533c882d95bb8f2bd96b8f7813.jpg",
        "https://i.pinimg.com/originals/a2/60/d7/a260d7537bf5b824ed858894148be0c1.jpg",
        "https://i.pinimg.com/originals/b4/c7/33/b4c733a7d78ef7faf9810c436ce00a0d.jpg",
        "https://i.pinimg.com/originals/8f/e1/53/8fe153699c91db5dda9b3a7c37bc2330.jpg",
        "https://i.pinimg.com/originals/bc/5d/17/bc5d173a3001839b5f4ec29efad072ae.jpg",
        "https://i.pinimg.com/originals/28/1b/dc/281bdc03cc595b7bd2959377bb038c39.jpg",
        "https://i.pinimg.com/originals/ae/a0/65/aea065ef9382f71694cda9dba25c9f76.jpg",
        "https://i.pinimg.com/originals/fb/26/bf/fb26bfec9f5a1cc7425bf6a52696ec62.jpg",
        "https://i.pinimg.com/originals/62/09/60/620960cb2b601d9d2923ba9cac668a32.jpg",
        "https://i.pinimg.com/564x/91/c3/e3/91c3e38c07cc7eedf54aca9cfd72deed.jpg",
        "https://i.pinimg.com/564x/22/d1/71/22d171c586a59534ac5e89a7554346c5.jpg",
        "https://i.pinimg.com/236x/b3/d8/86/b3d8861e850cf9529a4238e838873a29.jpg",
        "https://i.pinimg.com/236x/96/1c/89/961c89c696f4318b90d063cd60701799.jpg",
        "https://i.pinimg.com/236x/5c/5c/3d/5c5c3d5a50854a71d07d3e88cc8a15d7.jpg",
        "https://i.pinimg.com/236x/69/b6/b5/69b6b5883b6b22a5a1c51d78dd165a9d.jpg",
        "https://i.pinimg.com/236x/6b/99/0c/6b990cce3fe5f4202fe23c62707e42b3.jpg",
        "https://i.pinimg.com/236x/be/fc/74/befc74254843adfd89fecea152cc933a.jpg",
        "https://i.pinimg.com/236x/1d/fa/af/1dfaafc95f751c2f91a199bdea988a4e.jpg",
        "https://i.pinimg.com/236x/b6/59/96/b6599692481c4323cbf2c3b49ea36b53.jpg",
        "https://i.pinimg.com/236x/7d/cf/51/7dcf510e68714175c6d1af4aad8b7ebe.jpg",
        "https://i.pinimg.com/236x/c2/44/90/c2449073b7678a2a2d1575c378e3fe23.jpg",
        "https://i.pinimg.com/564x/24/bc/b0/24bcb0e619184ff889d25da23f1931ec.jpg",
        "https://i.pinimg.com/564x/23/0b/c2/230bc25aa4bfe4448b82a94a10d13138.jpg",
        "https://i.pinimg.com/236x/3e/e2/f3/3ee2f3438a1d9124debec33cbbfeb6de.jpg",
        "https://i.pinimg.com/236x/7a/52/19/7a521922d4c87922c1885e194dda83cf.jpg",
        "https://i.pinimg.com/236x/3f/18/f3/3f18f330ecfb0bada53d1b31fa5c86d2.jpg",
        "https://i.pinimg.com/236x/67/70/e3/6770e37d6f6ef5df20d601c2f1b34e38.jpg",
        "https://i.pinimg.com/236x/34/40/4c/34404c3e6a917833b3788ef90603e1b3.jpg",
        "https://i.pinimg.com/236x/dd/40/0e/dd400eff0a4e76b163da88ccf4d789fd.jpg",
        "https://i.pinimg.com/236x/52/fb/46/52fb464a6ca002013875611f281fdefe.jpg",
        "https://i.pinimg.com/236x/10/84/39/108439d0b522155f41dbdb6654017c86.jpg",
        "https://i.pinimg.com/236x/4e/7c/80/4e7c806e26b72324d70c55ce3469b99d.jpg",
        "https://i.pinimg.com/236x/00/af/23/00af232ac7325c3511bdb894b6ead967.jpg",
        "https://i.pinimg.com/474x/3b/28/e6/3b28e6a8c77b3441243c8481929e6eb1.jpg",
        "https://i.pinimg.com/236x/5d/3b/bd/5d3bbd351c15258009d7d1945115d512.jpg",
        "https://i.pinimg.com/236x/b9/df/21/b9df2158fba9426aa2d9b4bc3d5db7c1.jpg",
        "https://i.pinimg.com/236x/93/47/33/9347330a661cafab5ed3eb51467d336a.jpg",
        "https://i.pinimg.com/236x/4a/81/a4/4a81a4aff6186b781c46a1e2954a3bec.jpg",
        "https://i.pinimg.com/236x/1b/e0/b0/1be0b02226cdb2babd5d2f08d40e371e.jpg",
        "https://i.pinimg.com/236x/41/a5/b7/41a5b775f14c5c1359478705d87ac8a9.jpg",
        "https://i.pinimg.com/236x/4b/55/dd/4b55dd684a8d8c311ac1b2db02e37070.jpg",
        "https://i.pinimg.com/236x/dc/02/ed/dc02ed719a6fde02bd4683a18872eb5d.jpg",
        "https://i.pinimg.com/236x/28/f1/af/28f1aff3cbd4da83307eaf52c7364b27.jpg",
        "https://i.pinimg.com/236x/72/d3/66/72d36681b6931c4269ffa783b29abfe2.jpg",
        "https://i.pinimg.com/236x/c3/75/29/c3752998ee79e805b529c12bc244bd1b.jpg",
        "https://i.pinimg.com/236x/24/50/49/245049e43730b10ec674c74dec3d2c15.jpg",
        "https://i.pinimg.com/474x/a7/26/f0/a726f0865a8d5a49d32db88887d64220.jpg",
        "https://i.pinimg.com/236x/13/ee/86/13ee8631cf8e1053663d2e56045e014c.jpg",
        "https://i.pinimg.com/236x/b9/73/e4/b973e48227707285b494b4a590bcde0e.jpg",
        "https://i.pinimg.com/236x/f6/a3/70/f6a3704a3fc1414dbae82408b8ca4c19.jpg",
        "https://i.pinimg.com/236x/8a/6b/15/8a6b157f4cb97608df7ef71a77a9a2ff.jpg",
        "https://i.pinimg.com/236x/6e/66/ad/6e66ade695c3580cc0b6fcd4ce403496.jpg",                     
    ];

    var randomemeUrl = meme[Math.floor(Math.random() * meme.length)];
    container.innerHTML = "<img src='" + randomemeUrl + "'>";

     // Menambahkan teks di atas gambar sesuai dengan input
     var inputText = document.getElementById("ketik").value;
     var textAboveImage = document.createElement("div");
     textAboveImage.className = "text-above-image";
 
     // Teks yang sesuai dengan input
     var textMap = {
         "1": "LOL",
         "2": "Proud of You!",
         // Tambahkan kunci dan teks yang sesuai untuk input lainnya di sini
     };
 
     // Mengambil teks sesuai dengan input
     var textToShow = textMap[inputText] || "TRY AGAIN!";
 
     textAboveImage.textContent = textToShow;
     container.insertBefore(textAboveImage, container.firstChild);

     textAboveImage.textContent = textToShow;
     container.appendChild(textAboveImage); // Menambahkan teks di atas gambar

     setTimeout(function() {
        textAboveImage.style.visibility = "visible";
    }, 3500); // Ganti angka sesuai durasi animasi pop up

     // Menerapkan animasi pop up
    var imgElement = container.querySelector('img');
    imgElement.classList.add('pop-up-effect');
}

function displayCute(container) {
    var cute = [
        "https://i.pinimg.com/originals/a6/b1/7b/a6b17b01b2ef9cde8445b6b267dca1dd.jpg",
        "https://i.pinimg.com/236x/a7/f5/bd/a7f5bd0f174b3e70895e1dc0bd16b801.jpg",
        "https://i.pinimg.com/236x/92/78/c7/9278c7061046791a552dd4124bcb8581.jpg",
        "https://i.pinimg.com/236x/a0/af/6c/a0af6c41ceba996ba0b188e1c00574e1.jpg",
        "https://i.pinimg.com/236x/0d/b6/d7/0db6d7b4682da556cdfb6030674b49bb.jpg",
        "https://i.pinimg.com/236x/0b/cb/f5/0bcbf59000051ae7d58516ba32109875.jpg",
        "https://i.pinimg.com/236x/de/0c/93/de0c93bf84d4552ee7dcdcae84cb2b77.jpg",
        "https://i.pinimg.com/736x/0a/74/e9/0a74e9a63b369119a699860315668432.jpg",
        "https://i.pinimg.com/236x/25/e0/12/25e01215a2bd35b5f52ee32078e658ee.jpg",
        "https://i.pinimg.com/236x/db/b5/8e/dbb58ea9944081a3677d6650b6f84177.jpg",
        "https://i.pinimg.com/236x/b9/71/b0/b971b0c376c3b20c860f31b4a387530d.jpg",
        "https://i.pinimg.com/236x/22/27/c4/2227c47f8fbcd59f880973277e202c0f.jpg",
        "https://i.pinimg.com/736x/d7/92/0f/d7920f2ba00319417d5b56ce3a1fd18e.jpg",
        "https://i.pinimg.com/236x/e4/c6/45/e4c64564104030b1aaabb11d465a04bb.jpg",
        "https://i.pinimg.com/236x/a2/45/ad/a245ad724b8e681e0fd4a0a820f42a4b.jpg",
        "https://i.pinimg.com/236x/d4/29/b1/d429b161085005779ce5d2e978e1cc22.jpg",
        "https://i.pinimg.com/236x/97/df/b9/97dfb9a591b6bbfcc95372eb69661f42.jpg",
        "https://i.pinimg.com/236x/bf/10/37/bf10375e972228aa154687de4ca04194.jpg",
        "https://i.pinimg.com/474x/fb/13/9c/fb139cc60f260155b4c33fd37eb2fc2d.jpg",
        "https://i.pinimg.com/236x/3f/f6/f9/3ff6f937c889c61b56bcc9c40cb83906.jpg",
        "https://i.pinimg.com/236x/22/ef/78/22ef78f255d23079d42ab40bf200d1a1.jpg",
        "https://i.pinimg.com/236x/22/be/43/22be43a5b82aae6f9709db36a56412e2.jpg",
        "https://i.pinimg.com/236x/59/5d/ce/595dce3ca4a76e8e8a1bd4dfc6a1800a.jpg",
        "https://i.pinimg.com/236x/f7/73/61/f77361ab4f75abc2f34dad158170eccb.jpg",
        "https://i.pinimg.com/236x/e2/c3/e0/e2c3e030776175c1067a6133036a365f.jpg",
        "https://i.pinimg.com/236x/7e/f4/f8/7ef4f803211f6b078aa3ff8fac03c198.jpg",
        "https://i.pinimg.com/236x/4a/6f/21/4a6f214bb742c34eefb9e00c39c5b02a.jpg",
        "https://i.pinimg.com/474x/4c/e5/c3/4ce5c3003fefcc27579bd90c3db94ab1.jpg",
        "https://i.pinimg.com/236x/e5/72/2c/e5722c15079da10f93de5b368b85517a.jpg",
        "https://i.pinimg.com/236x/02/05/4a/02054a8ea25c9fdb8cc5911a8c4f9ec8.jpg",
        "https://i.pinimg.com/564x/fa/40/7e/fa407ece45385eee3526084a7bb20b0c.jpg",
        "https://i.pinimg.com/236x/42/47/37/4247371aa0fb84c0e4f887a9108e986a.jpg",
        "https://i.pinimg.com/236x/01/63/3e/01633e52352791ed0907da1fd0487b74.jpg",
        "https://i.pinimg.com/236x/d3/31/a7/d331a78748981d4f1cb666ede8f896e8.jpg",
        "https://i.pinimg.com/236x/53/97/8c/53978c3d9fa13fa495b2dc32d7560178.jpg",
        "https://i.pinimg.com/236x/a2/ee/66/a2ee66b7bbbcd4e87db8ae34be2306db.jpg",
        "https://i.pinimg.com/236x/09/33/70/0933704aed73a4b1fb6b3ab6168c18e2.jpg",
        "https://i.pinimg.com/236x/fc/ec/e9/fcece9a6e8379614e8717d3b65a1f046.jpg",
        "https://i.pinimg.com/236x/74/96/a6/7496a6a56503e3a24f8340388c2d2145.jpg",
        "https://i.pinimg.com/236x/5b/f0/d1/5bf0d1ea242629d52c24295fa416e484.jpg",
        "https://i.pinimg.com/236x/52/93/f5/5293f54ca458a4ff5e39d54e6538c42d.jpg",
        "https://i.pinimg.com/236x/78/de/43/78de43d54f98a4274116475e20ce2bec.jpg",
        "https://i.pinimg.com/236x/98/60/1e/98601ee095ab130214c23e7dac573a77.jpg",
        "https://i.pinimg.com/236x/e3/93/44/e393449eac103391ddf7345c67e2c4ba.jpg",
    ];

    var randomcuteUrl = cute[Math.floor(Math.random() * cute.length)];
    container.innerHTML = "<img src='" + randomcuteUrl + "'>";

     // Menambahkan teks di atas gambar sesuai dengan input
     var inputText = document.getElementById("ketik").value;
     var textAboveImage = document.createElement("div");
     textAboveImage.className = "text-above-image";
 
     // Teks yang sesuai dengan input
     var textMap = {
         "1": "HERE!",
         "2": "It's Okay :)",
         // Tambahkan kunci dan teks yang sesuai untuk input lainnya di sini
     };
 
     // Mengambil teks sesuai dengan input
     var textToShow = textMap[inputText] || "TRY AGAIN!";
 
     textAboveImage.textContent = textToShow;
     container.insertBefore(textAboveImage, container.firstChild);

     textAboveImage.textContent = textToShow;
     container.appendChild(textAboveImage); // Menambahkan teks di atas gambar

     setTimeout(function() {
        textAboveImage.style.visibility = "visible";
    }, 3500); // Ganti angka sesuai durasi animasi pop up

     // Menerapkan animasi pop up
    var imgElement = container.querySelector('img');
    imgElement.classList.add('pop-up-effect');
}

function displayError(container) {
    container.innerHTML = "<img src='https://i.pinimg.com/564x/ea/31/4e/ea314ef58e39c1ba43f3f9acd46a3073.jpg'>";

     // Menambahkan teks di atas gambar sesuai dengan input
     var inputText = document.getElementById("ketik").value;
     var textAboveImage = document.createElement("div");
     textAboveImage.className = "text-above-image";
 
     // Teks yang sesuai dengan input
     var textMap = {
         "1": "HERE!",
         "2": "It's Okay!",
         // Tambahkan kunci dan teks yang sesuai untuk input lainnya di sini
     };
 
     // Mengambil teks sesuai dengan input
     var textToShow = textMap[inputText] || "APALAH, 1/2?";
 
     textAboveImage.textContent = textToShow;
     container.insertBefore(textAboveImage, container.firstChild);

     textAboveImage.textContent = textToShow;
     container.appendChild(textAboveImage); // Menambahkan teks di atas gambar

     setTimeout(function() {
        textAboveImage.style.visibility = "visible";
    }, 3500); // Ganti angka sesuai durasi animasi pop up

     // Menerapkan animasi pop up
    var imgElement = container.querySelector('img');
    imgElement.classList.add('pop-up-effect');
}

// Tambahkan event listener untuk menangani akhir animasi "popUp"
imgElement.addEventListener('animationend', function() {
    imgElement.classList.remove('pop-up-effect'); // Hapus kelas efek pop up
    imgElement.classList.add('burst-effect'); // Tambahkan kelas efek ledakan
});