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

async function getLocations() {
    const url = "https://robbiecoulter.github.io/csce242/Projects/pt7json/locations.json";

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("could not load locations");
        }

        const locations = await response.json();

        for (let location of locations) {
            let card = document.createElement("div");
            card.classList.add("location-card");

            card.innerHTML = `
                <img src="${location.img_name}" alt="${location.name}">
                <h3>${location.name}</h3>
                <p>${location.description} Common catches include ${location.fish}.</p>
            `;

            card.onclick = function() {
                showMap(location.map);
            };

            if (location.type == "Saltwater") {
                document.getElementById("saltwater-locations").append(card);
            } else {
                document.getElementById("freshwater-locations").append(card);
            }
        }
    } catch (error) {
        console.log (error);
    }
}

if (document.getElementById("saltwater-locations")) {
    getLocations();
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.onsubmit = async function(event) {
        event.preventDefault();

        const result = document.getElementById("form-result");
        const button = contactForm.querySelector("button");

        result.innerHTML = "Sending message...";
        button.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                result.innerHTML = "Message sent successfully!";
                result.style.color = "green";
                contactForm.reset();
            } else {
                result.innerHTML = "Message could not be sent. Please try again.";
                result.style.color = "red";
            }
        } catch (error) {
            console.log(error);
            result.innerHTML = "An error occurred. Please try again.";
            result.style.color = "red";
        }

        button.disabled = false;

        setTimeout(function() {
            result.innerHTML = "";
        }, 1500);
    };
}