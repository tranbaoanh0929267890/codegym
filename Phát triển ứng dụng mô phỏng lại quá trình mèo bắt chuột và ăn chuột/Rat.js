let Rat = function (name,weight,speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.isAlive = true;

    this.speak = function () {
        alert("chicken,chicken,chicken");
    }
}