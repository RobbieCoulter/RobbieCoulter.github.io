const createCar = (color, x, y) => {
    const road = document.getElementById("road");

    let car = document.createElement("div");
    car.classList.add("car");
    car.style.backgroundColor = color;
    car.style.left = x + "px";
    car.style.top = y + "px";

    let carWindow = document.createElement("div");
    carWindow.classList.add("window");
    car.append(carWindow);

    let leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel");
    leftWheel.classList.add("left-wheel");
    car.append(leftWheel);

    let rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel");
    rightWheel.classList.add("right-wheel");
    car.append(rightWheel);

    road.append(car);
};

const loadCars = () => {
    const colors = ["red", "blue", "purple", "orange", "green", "pink"];

    for(let i = 0; i < 7; i++) {
        let color = colors[i % colors.length];
        let x = Math.floor(Math.random() * (window.innerWidth -100));
        let y;
        
        if(i % 2 == 0) {
            y = 20;
        } else {
            y = 105;
        }
        
        createCar(color, x, y);
    }

};

loadCars();