export default class User {

    private uid : string ;

    private firstName : string ;
    
    private lastName? : string ;

    public constructor( uid : string , firstName : string ) {
        this.uid = uid ;
        this.firstName = firstName ;
    }

    public setLastName( lname : string ) :void {
        this.lastName = lname;
    } 
    
    public getFullName() : string  {
        return this.firstName + " " + this.lastName;
    } 
    

}