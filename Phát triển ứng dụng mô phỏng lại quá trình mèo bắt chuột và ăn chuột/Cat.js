let Cat = function (name,weight,speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.speak = function () {
        alert("You die!!!!!!!!!");
    }

    this.catchRat = function (rat) {
        if(this.speed > rat.speed) 
        alert(`Da bat duoc ${rat.name}`);
        else alert(`Bitch ${rat.name} qua nhanh`);
    }

    this.eatRat = function (rat) {
        if(rat.isAlive) this.weight += rat.weight,
        alert(`Da an bitch chuot ${rat.name}`);
        else alert(`Bitch ${rat.name} chet cmnr`);
    }

}