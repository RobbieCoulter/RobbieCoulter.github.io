function toggleNav() {
    let nav = document.getElementById("main-nav");
    nav.classList.toggle("show-nav");
}

function showMap(location) {
    document.getElementById("location-map").src = 
        "https://www.google.com/maps?q=" + location + "&output=embed";

    document.getElementById("map-modal").style.display = "block";
}

function closeMap() {
    document.getElementById("map-modal").style.display = "none";
}