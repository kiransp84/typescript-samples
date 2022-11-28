type LeftButton = {
    action : string 
    onClick : Function
}

type RightButton = {
    action : string ,
    onClick : Function
}

let mouse : [LeftButton,RightButton ];

mouse = [ 
          { action : "leftclick" , onClick : () => {} } , 
          { action : "rightclick" , onClick : () => {} } 
]; 


////////////////////////////////////////////////////

export type LeftSpeaker = {
    volumeLevel : number ; 
    bassLevel : number ;
    trebleLevel : number ;
}

export type RightSpeaker =  {
    volumeLevel : number ; 
    bassLevel : number ;
    trebleLevel : number ;
}


