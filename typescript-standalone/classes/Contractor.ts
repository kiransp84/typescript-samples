import User from './User'

class Contractor extends User {
    private endDate : Date ;

    public constructor(  uid : string , firstName : string , endDate : Date ) {
        super(uid,firstName);
        this.endDate = endDate;
    } 

    
}