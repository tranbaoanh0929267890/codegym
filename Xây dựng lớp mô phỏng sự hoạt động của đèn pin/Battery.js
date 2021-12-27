class Battery{
    constructor(){
        this.energy = 0;
    }

    get Energy(){
        return this.energy;
    }

    set Energy(energy){
        this.energy = energy;
    }

    decreaseEnergy(){
        if(this.energy > 0){
            this.energy--;
        }
    }
}