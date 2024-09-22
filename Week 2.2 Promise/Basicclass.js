class Rectangle{
    constructor(wiidth,heiight,collor){
        this.width = wiidth;
        this.height = heiight;
        this .color = collor;
    }

    area(){
        const area = this.width*this.height;
        return area;
    }
    paint(){

    }
}

const rect = new Rectangle(2,10,"Blue");
const area = rect.area();
console.log(area);

//Classes here, are similar like the JAVA ONE.

