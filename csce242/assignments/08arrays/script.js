const mountains = {
    "table rock": "https://www.google.com/maps?q=Table+Rock+SC&output=embed", 
    "clingmans Dome": "https://www.google.com/maps?q=Clingmans+Dome+TN&output=embed",
    "Looking Glass Rock": "https://www.google.com/maps?q=Looking+Glass+Rock+NC&output=embed",
    "Pilot Mountain": "https://www.google.com/maps?q=Pilot+Mountain+NC&output=embed"
};

const beaches = {
    "Hunting Island" : "https://www.google.com/maps?q=Hunting+Island+SC&output=embed",
    "Hilton Head Island": "https://www.google.com/maps?q=Hilton+Head+Island+SC&output=embed",
    "Myrtle Beach" : "https://www.google.com/maps?q=Myrtle+Beach+SC&output=embed",
    "Folly Beach" : "https://www.google.com/maps?q=Folly+Beach+SC&output=embed"

};

const destinationType = document.getElementById("destination-type");
const destinations = document.getElementById("destinations");
const map = document.getElementById("map");

destinationType.onchange = () => {
    destinations.innerHTML = "";
    map.innerHTML = "";

    let places;

    if(destinationType.value === "mountains") {
        places = mountains;
    } else if (destinationType.value === "beaches") {
        places = beaches;
    } else {
        return;
    }

    for (let place in places) {
        const link  =document.createElement("a");

        link.innerHTML = place;
        link.href = "#";

        link.onclick = () => {
            map.innerHTML = "";

            const iframe = document.createElement("iframe");
            iframe.src = places[place];
            iframe.width = "500";
            iframe.height = "400";

            map.append(iframe);
        
        };
        destinations.append(link);
    }
};