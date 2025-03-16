function speedDetector(speed) {
    const speedLimit = 70;
    const pointsPerExcessSpeed = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / pointsPerExcessSpeed);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(Points: ${demeritPoints});
        }
    }
}

speedDetector(80);
speedDetector(120);