import {NumbersCollection} from './NumbersCollection';

export class Sorter{
    // collection: number[];
    //putting public here is another way of initializing the variable
    constructor(public collection: ){
        // this.collection = collection;
    }

    sort(): void{
        const {length} = this.collection;

        for (let i =0; i< length; i++){
            for (let j = 0; j<length-i-1;j++){
                // all of this only works if collection is number[]
                //if collection is an array of numbers
                if (this.collection instanceof Array){
                    if(this.collection[j]>this.collection[j+1]){
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = leftHand;
                    }
                }
          

            }
        }
    }
}