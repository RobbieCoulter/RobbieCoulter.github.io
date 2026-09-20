const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");

const link1 = document.getElementById("link-exercise1");
const link2 = document.getElementById("link-exercise2");

link1.onclick = function() {
    exercise1.style.display = "block";
    exercise2.style.display = "none";
};

link2.onclick = function() {
    exercise1.style.display = "none";
    exercise2.style.display = "block";

    showSemester();
};

const daysMissed = document.getElementById("days-missed");

daysMissed.oninput = function() {
    const days = daysMissed.value;
    const percentLost = days * (7 / 25);

    document.getElementById("points-lost").innerHTML = "You will lose " + percentLost.toFixed(1) + "% for skipping " + days + " days.";

    if (days == 0) {
        document.getElementById("miss-message").innerHTML = "Great job! You are not missing any classes.";
    }
    else if (days <= 2) {
        document.getElementById("miss-message").innerHTML = "Missing a couple classes should not hurt too much.";
    }
    else if (days <= 5) {
        document.getElementById("miss-message").innerHTML = "Be careful, those missed classes are adding up.";
    }
    else {
        document.getElementById("miss-message").innerHTML = "you are missing valuable learning opportunities.";
    }
};

function showSemester() {
    const today = new Date();
    const lastDay = new Date(2026, 11, 4);

    const difference = lastDay - today;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    document.getElementById("days-left").innerHTML = "You have " + daysLeft + " days left in the semester.";

    if (daysLeft > 60) {
        document.getElementById("semester-message").innerHTML = "Not time to start counting down yet.";
    }
    else if (daysLeft > 30){
        document.getElementById("semester-message").innerHTML = "The semester is moving along.";
    }
    else if (daysLeft > 7) {
        document.getElementById("semester-message").innerHTML = "The end of semester is getting close!";
    }
    else{
        document.getElementById("semester-message").innerHTML = "Almost there!";
    }
}

const toggleNav = document.getElementById("toggle-nav");
const navItems = document.getElementById("nav-items");

toggleNav.onclick = function() {
    if (navItems.style.display == "block"){
        navItems.style.display = "none";
        toggleNav.innerHTML = "&#9660;"
    }
    else {
        navItems.style.display = "block"
        toggleNav.innerHTML = "&#9650;"
    }
};