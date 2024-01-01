function openNav(){
    document.getElementById("mySideNav").style.width = "250px";
}

function closeNav(){
    document.getElementById("mySideNav").style.width = "0px";
}

function openKPUwebsite(){
    window.open("https://www.kpu.ca/", "_blank");
}

function openPythonWebsite(){
    window.open("https://www.python.org", "_blank");
}

function openHTMLlink(){
    window.open("https://html.com/html5/", "_blank");
}

function openCSSlink(){
    window.open("https://en.wikipedia.org/wiki/CSS", "_blank");
}

function openJSlink(){
    window.open("https://www.javascript.com", "_blank");
}

/* REVEAL ON SCROLL ANIMATION */

const observer = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show");
        };
    });
}));

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

/* REVEAL ON SCROLL ANIMATION */