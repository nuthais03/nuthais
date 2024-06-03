function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.getElementById('mobile-icon').addEventListener('click', function() {
    openDialpad();
});

document.getElementById('mobile-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openDialpad();
});

function openDialpad() {
    // Replace this with your code to open the dialpad
    // For example, you can show a modal with a dialpad interface
    alert('Dialpad should open here!');
}

function openSocialLink(url, target) {
    // Check if the device is a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Open link in the same tab for mobile devices (this will trigger app handling if applicable)
        window.location.href = url;
    } else {
        // Open link in a new tab for desktop devices
        window.open(url, target);
    }
}

// Add your job titles to this array
const jobTitles = ["Front-End Developer ", "Digital Marketer ", "Video Editor ", "Creative Designer"];

let currentIndex = 0;
let currentTitle = "";
let typingInterval;
let cursorInterval;

function startTypingEffect() {
    typingInterval = setInterval(function () {
        if (currentTitle.length < jobTitles[currentIndex].length) {
            currentTitle += jobTitles[currentIndex].charAt(currentTitle.length);
            document.getElementById('job-title').innerText = currentTitle + "|"; // Adding cursor
        } else {
            clearInterval(typingInterval);
            cursorInterval = setInterval(function () {
                document.getElementById('job-title').innerText = currentTitle + (document.getElementById('job-title').innerText.endsWith('|') ? ' ' : '|');
            }, 500); // Blinking cursor speed (milliseconds)
            setTimeout(function () {
                eraseTypingEffect();
            }, 1000); // Wait for 1 second before erasing
        }
    }, 150); // Slowing down the typing speed (milliseconds)
}

function eraseTypingEffect() {
    clearInterval(cursorInterval);
    typingInterval = setInterval(function () {
        if (currentTitle.length > 0) {
            currentTitle = currentTitle.slice(0, -1);
            document.getElementById('job-title').innerText = currentTitle + "|"; // Adding cursor
        } else {
            clearInterval(typingInterval);
            currentIndex = (currentIndex + 1) % jobTitles.length; // Move to the next job title
            setTimeout(function () {
                startTypingEffect();
            }, 500); // Wait for 0.5 second before typing the next title
        }
    }, 75); // Slowing down the erasing speed (milliseconds)
}

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', function () {
    startTypingEffect();
});

// Other functions in your script...

/*
// Add your job titles to this array
const jobTitles = ["Frontend Developer", "Social Media Marketer", "Video Editor", "Creative Designer"];

let currentIndex = 0;
let currentTitle = "";
let typingInterval;

function startTypingEffect() {
    typingInterval = setInterval(function () {
        if (currentTitle.length < jobTitles[currentIndex].length) {
            currentTitle += jobTitles[currentIndex].charAt(currentTitle.length);
            document.getElementById('job-title').innerText = currentTitle;
        } else {
            clearInterval(typingInterval);
            setTimeout(function () {
                eraseTypingEffect();
            }, 1000); // Wait for 1 second before erasing
        }
    }, 100); // Typing speed (milliseconds)
}

function eraseTypingEffect() {
    typingInterval = setInterval(function () {
        if (currentTitle.length > 0) {
            currentTitle = currentTitle.slice(0, -1);
            document.getElementById('job-title').innerText = currentTitle;
        } else {
            clearInterval(typingInterval);
            currentIndex = (currentIndex + 1) % jobTitles.length; // Move to the next job title
            setTimeout(function () {
                startTypingEffect();
            }, 500); // Wait for 0.5 second before typing the next title
        }
    }, 50); // Erasing speed (milliseconds)
}

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', function () {
    startTypingEffect();
});

// Other functions in your script...




*/
