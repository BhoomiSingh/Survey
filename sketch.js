var peopleCount = 0;
var database;
var form, user;

function setup() {
    canvas = createCanvas(600, 600);
    database = firebase.database();
    form = new Form();
    form.display();
    user = new User();

}