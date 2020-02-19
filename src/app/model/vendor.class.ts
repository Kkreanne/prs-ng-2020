export class Vendor {
    id: number;
    name: string;
    code: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    active: boolean;

    constructor(id: number = 0, name: string = "", code: string = "", 
                address: string = "", city: string = "", state: string = "", 
                zip: string = "", phoneNumber: string = "", active: boolean = true) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.active = active;
    }
}
