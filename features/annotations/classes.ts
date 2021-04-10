class Vehicle {
    // color: string;
    //either or. top or bottom
    constructor(public color: string){
        this.color = color || "red";
    }


    public drive(): void{
        console.log('chugga chugga');
    }
    //honk can  be called by child class or itself but not outside of it
    //meaning you can't directly use it 
    protected honk(): void{
        console.log('beep')
    }
}


const vehicle = new Vehicle(null);
vehicle.drive();
console.log(vehicle.color)
// vehicle.honk();



class Car extends Vehicle{
    constructor(public wheels: number, color: string){
        super(color);
        this.wheels = wheels;

    }

    drive(): void{
        console.log('vroom')
    }

    startDrivingProcess(): void{
        this.drive();
        this.honk();
    }
    
    setColor(color): void{
        this.color = color;
    }
    setWheel(wheels): void{
        this.wheels = wheels;
    }

    getColor(): string{
        console.log(this.color)
        return this.color;
    }
    getWheel(): number{
        console.log(this.wheels)
        return this.wheels;
    }
}

const car = new Car(2,"blue");
car.startDrivingProcess();
car.setColor("oragne")
car.setWheel(10)


car.getColor()
car.getWheel()



