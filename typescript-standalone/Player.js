"use strict";
const getTeamLeader = (team) => {
    return team[0];
};
let players = [{ name: "Zidane", hp: 1 }, { name: "Ronaldo", hp: 2 }];
let opponents = [{ name: "Messi", hp: 1 }];
getTeamLeader(players);
getTeamLeader(opponents);
