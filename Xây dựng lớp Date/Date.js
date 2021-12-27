class Date{
    constructor(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    get Day(){
        return this.day;
    }

    set Day(day){
        this.day = day;
    }

    get Month(){
        return this.month;
    }

    set Month(month){
        this.month = month;
    }

    get Year(){
        return this.year;
    }

    set Year(year){
        this.year = year;
    }

     Date(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
   
    toString(){
        return `${this.day} / ${this.month} / ${this.year}`;
    }
}

let date = new Date(2,2,2007);

date.Date(3,3,2007);

alert(date.toString());

