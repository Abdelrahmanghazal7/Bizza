// javascript Animate onscroll Start
$(document).ready(function () {
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
});
$(document).ready(function () {
    pagenum = 1;

    function AutoRotate() {
        var myele = null;
        var allElements = document.getElementsByTagName('label');
        for (var i = 0, n = allElements.length; i < n; i++) {
            var myfor = allElements[i].getAttribute('for');
            if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
                allElements[i].click();
                break;
            }
        }
        if (pagenum == 4) {
            pagenum = 1;
        } else {
            pagenum++;
        }
    }
    setInterval(AutoRotate, 5000);
});
// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {
    // When arrow is clicked

    $('body, html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#submit").disabled = true;
    document.querySelector("#name").onkeyup = function () {
        if (document.querySelector("#name").value.length > 7) {
            document.querySelector("#submit").disabled = false;
        } else {
            document.querySelector("#submit").disabled = true;
        }

        document.querySelector("form").onsubmit = function () {
            var task = document.querySelector("#name").value;
            var li = document.createElement("li");
            li.innerHTML = task;
            document.querySelector("#tasks").appendChild(li);
            document.querySelector("#name").value = " ";
            document.querySelector("#submit").disabled = true;

            return false;
        }
    }
})

// Dark-mode and light mode toggle

function darkmode() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
        console.log("Dark mode");
        theme = "DARK";
    } else {
        console.log("Light mode");
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if (GetTheme === "DARK") {
        document.body.classList = "dark-mode";
    } else {
        document.body.classList = "";
    }
}, 5);

function success() {
    swal({
        title: "Good job",
        text: "Successfully sent message!",
        icon: "success",
        button: "OK",
    });
}


function error() {
    swal({
        title: "error",
        text: "Something went wrong!, message could not sent",
        icon: "error",
        button: "OK",
    });
}


const sendButton = document.getElementById("submit");
const form = document.getElementById("form");

sendButton.addEventListener("click", function (e) {
    e.preventDefault();
    sendButton.value = 'Send...';

    const serviceID = 'default_service';
    const templateID = 'template_nto4336';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            sendButton.value = 'Send Email';
            success();
        }, (err) => {
            sendButton.value = 'Send Email';
            error();
        });
});
