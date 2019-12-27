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
        this.type = this.type.toLowerCase();
        if (this.type.includes('Space Debris')) {
            return true;
        } else {
            return false;
        }
        // if (this.type.includes('Space Debris') || this.type.includes('space debris') || 
        // this.type.includes('Space debris') || this.type.includes('space Debris')) {
        //     return true;
        // } else {
        //     return false;
        // }
    }    
}
