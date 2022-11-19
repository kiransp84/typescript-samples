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
  