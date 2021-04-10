import {NumbersCollection} from './NumbersCollection';

interface Sortable{
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}


export class Sorter{
    // collection: number[];
    //putting public here is another way of initializing the variable
    constructor(public collection: Sortable){
        // this.collection = collection;
    }

    sort(): void{
        const {length} = this.collection;

        for (let i =0; i< length; i++){
            for (let j = 0; j<length-i-1;j++){
                // all of this only works if collection is number[]
                //if collection is an array of numbers

                if (this.collection.compare(j,j+1)){
                   this.collection.swap(j,j+1);
                }
          

            }
        }
    }
}