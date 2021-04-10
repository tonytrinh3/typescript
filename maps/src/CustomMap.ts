//Instructions to every other class
//on how they can be an argument to 'addMarker
//inside those directions - goign to show up on the map, you have to have a location property
export interface Mappable{
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}


export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    //now make this available for all types bc of interface 
    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent();
        });

        marker.addListener('click',()=>{
            infoWindow.open(this.googleMap, marker);
        })
    }

    // addCompanyMarker(company: Company): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}