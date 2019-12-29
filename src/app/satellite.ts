export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    ngOnInit() {
    }

    shouldShowWarning(): boolean {

        // this.type = this.type.toLowerCase();
        // if (this.type.includes('Space Debris')) {
        //     return true;
        // } else {
        //     return false;
        // }

        if (this.type == 'Space Debris' || this.type == 'space debris' || 
        this.type == 'Space debris' || this.type == 'space Debris') {
            return true;
        } else {
            return false;
        }       
        
    }
}
