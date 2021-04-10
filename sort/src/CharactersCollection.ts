export class CharactersCollection{
    constructor(public data: string){}

    get length(): number{
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex:number):void{
        const characters = this.data.split("");
        //console.log(characters)
        const leftHand = characters[leftIndex];
        const rightHand = characters[rightIndex];
        characters[rightIndex]=leftHand;
        characters[leftIndex]=rightHand;
        this.data = characters.join('');

    }
}