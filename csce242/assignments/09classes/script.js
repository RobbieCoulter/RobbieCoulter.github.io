class Vacation {
    constructor(title, type, description, activities, image, map) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.activities = activities;
        this.image = image;
        this.map = map;
    }

    getCard() {
        let section = document.createElement("section");
        section.classList.add("vacation");

    section.innerHTML = `
        <h2>${this.title}</h2>
        <p>${this.type} Vacation</p>
        <img src="${this.image}">
    `;

    section.onclick = () => {
        showModal(this);
    };

    return section;
}
}

const vacations = [
    new Vacation(
        "Grandfather Mountain",
        "Mountain",
        "A mountain destination in North Carolina with great views.",
        "Go hiking, walk across the swinging bridge, and enjoy the overlooks.",
        "images/grandfather-mountain.jpg",
        "https://www.google.com/maps?q=Grandfather+Mountain+NC&output=embed"
    ),

    new Vacation(
        "Mount Mitchell",
        "Mountain",
        "A mountain destination in western North Carolina.",
        "Go hiking, visit the observation deck, and explore the state park.",
        "images/mount-mitchell.jpg",
        "https://www.google.com/maps?q=Mount+Mitchell+NC&output=embed"
    ),

    new Vacation(
        "Chimney Rock",
        "Mountain",
        "A popular mountain destination in North Carolina.",
        "Hike the trails, see the waterfall, and visit the top of Chimney Rock.",
        "images/chimney-rock.jpg",
        "https://www.google.com/maps?q=Chimney+Rock+NC&output=embed"
    ),

    new Vacation(
        "Stone Mountain",
        "Mountain",
        "A state park in North Carolina known for its large granite mountain.",
        "Go hiking, camping, fishing, and enjoy the mountain views.",
        "images/stone-mountain.jpg",
        "https://www.google.com/maps?q=Stone+Mountain+State+Park+NC&output=embed"
    ),

    new Vacation(
        "Kiawah Island",
        "Beach",
        "A beach destination along the South Carolina coast.",
        "Go swimming, biking, kayaking, and spend time on the beach.",
        "images/kiawah-island.jpg",
        "https://www.google.com/maps?q=Kiawah+Island+SC&output=embed"
    ),

    new Vacation(
        "Isle of Palms",
        "Beach",
        "A beach town located near Charleston, South Carolina.",
        "Go swimming, fishing, paddleboarding, and walk along the beach.",
        "images/isle-of-palms.jpg",
        "https://www.google.com/maps?q=Isle+of+Palms+SC&output=embed"
    ),

    new Vacation(
        "Surfside Beach",
        "Beach",
        "A small beach town along the South Carolina coast.",
        "Go swimming, fishing, walk on the beach, and visit the pier.",
        "images/surfside-beach.jpg",
        "https://www.google.com/maps?q=Surfside+Beach+SC&output=embed"
    ),

    new Vacation(
        "Wrightsville Beach",
        "Beach",
        "A popular beach destination near Wilmington, North Carolina.",
        "Go surfing, swimming, kayaking, and fishing.",
        "images/wrightsville-beach.jpg",
        "https://www.google.com/maps?q=Wrightsville+Beach+NC&output=embed"
    )
];

const vacationDiv = document.getElementById("vacations");

for (let i = 0; i < vacations.length; i++) {
    vacationDiv.append(vacations[i].getCard());
}

function showModal(vacation) {
    document.getElementById("modal-title").innerHTML = vacation.title;

    document.getElementById("modal-type").innerHTML = 
        "<strong>Type:</strong> " + vacation.type;
    document.getElementById("modal-description").innerHTML =
        "<strong>Description:</strong> " + vacation.description;

    document.getElementById("modal-things").innerHTML =
        "<strong>Things To Do:</strong> " + vacation.activities;

    document.getElementById("map").src = vacation.map;

    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}