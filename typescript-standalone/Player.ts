type Player = {
    name : string ,
    hp : number 
}

type Opponent = {
    name : string ,
    hp : number 
}

const getTeamLeader = <T extends { hp : number } >(  team : T[]   ) => {
    return team[0];
}

let  players : Player[] =  [ { name : "Zidane" , hp : 1 } , { name : "Ronaldo" , hp : 2 } ] ;

let opponents : Opponent[] = [ { name : "Messi" , hp : 1 }  ];

getTeamLeader( players );

getTeamLeader( opponents );