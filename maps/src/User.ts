import faker from 'faker'
import {Mappable} from './CustomMap';
//ah this is like interface for java....
//you bring this in in order to help how you should shape your class..
export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "red";


    constructor(){
        this.name = faker.name.firstName(); 
        this.location ={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `User Name: ${this.name}`
    }   
}