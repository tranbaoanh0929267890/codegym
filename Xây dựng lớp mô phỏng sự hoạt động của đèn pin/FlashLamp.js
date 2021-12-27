class FlashLamp{
    constructor(){
        this.status = false;
        this.battery = null;
    }
    get Battery(){
        return this.battery.Energy;
    }

    set Battery(battery){
        this.battery = battery;
    }

    light(){
        if(this.status){
            alert("Lighting");
        }
        else{
            alert("Not lighting");
        }
    }

    turnOn(){
        this.status = true;
    }

    turnOff(){
        this.status = false;
    }

}