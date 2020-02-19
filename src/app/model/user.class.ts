export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    Admin: boolean;
    Reviewer: boolean;

    constructor(id: number = 0, username: string = "", password: string = "", 
                firstName: string = "", lastName: string = "", phoneNumber: string = "", 
                email: string = "", Admin: boolean = true, Reviewer: boolean = false) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.Admin = Admin;
        this.Reviewer = Reviewer;
    }
}
