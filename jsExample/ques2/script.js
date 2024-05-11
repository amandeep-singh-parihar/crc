
function triangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

function check() {
    const side1 = parseFloat(prompt("Enter the length of side 1: "));
    const side2 = parseFloat(prompt("Enter the length of side 2: "));
    const side3 = parseFloat(prompt("Enter the length of side 3: "));

    const triangle = triangleType(side1, side2, side3);
    console.log("The triangle is", triangle);
}

check();
