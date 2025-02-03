//Task 1
let soccerPlayer = {
    firstName: "Michael",
    lastName: "Laudrup",
    age: 60,
    clubs: ["Ajax", "Vissel Kobe", "Real Madrid", "Barcelona", "Juventus", "Lazio", "Brøndby", "KB"],
    birthday: new Date("1960-06-15"),
    ['Is Active']: false,
}
console.log("Task 1: __________");
console.log(soccerPlayer.firstName, soccerPlayer.lastName, soccerPlayer['clubs'], soccerPlayer['birthday'], soccerPlayer['Is Active']);




//Task 2
//Reset the object
soccerPlayer = {};

soccerPlayer = {
    firstName: "Michael",
    lastName: "Laudrup",
    age: 60,
    ['Is Active']: false,
    birthday: new Date("1960-06-15"),
    placeOfBirth: {
        city: "Frederiksberg",
        country: "Denmark"
    },
    positions: ["Attacking Midfielder", "Forward"],
    clubsPlayedFor: [
        {
            clubName: "Ajax",
            country: "the Netherlands",
            start: 1997,
            stop: 1998
        },
        {
            clubName: "Vissel Kobe",
            country: "Japan",
            start: 1996,
            stop: 1997
        },
        {
            clubName: "Real Madrid",
            country: "Spain",
            start: 1994,
            stop: 1996
        },
        {
            clubName: "Barcelona",
            country: "Spain",
            start: 1989,
            stop: 1994
        },
        {
            clubName: "Juventus",
            country: "Italy",
            start: 1985,
            stop: 1989
        },
        {
            clubName: "Lazio",
            country: "Italy",
            start: 1983,
            stop: 1985
        },
        {
            clubName: "Brøndby",
            country: "Denmark",
            start: 1982,
            stop: 1983
        },
        {
            clubName: "KB",
            country: "Denmark",
            start: 1981,
            stop: 1982
        }
    ],
}

console.log("Task 2: __________")
soccerPlayer.clubsPlayedFor.forEach(club => {
    console.log(`He played at ${club.clubName} in ${club.country} from ${club.start}-${club.stop}`)
});

console.log(soccerPlayer['Is Active'])