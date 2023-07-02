var count = 5;
var countSpan = document.getElementById("count");
countSpan.innerHTML = count;

var interval = setInterval(function () {
    count--;
    countSpan.innerHTML = count;
    if (count === 0) {
        window.location.href = "../sHomepage.html";
        clearInterval(interval);
    }
}, 1000);



