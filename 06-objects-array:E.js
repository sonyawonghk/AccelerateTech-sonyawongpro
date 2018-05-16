function uefaEuro2016(teams, score) {
    if(score[0]>score[1]){
        return "At match "+teams[0]+" - "+teams[1]+", "+teams[0]+" won!";
    }else if(score[1] > score[0]){
        return "At match "+teams[0]+" - "+teams[1]+", "+teams[1]+" won!";
    }else{
        return "At match "+teams[0]+" - "+teams[1]+", teams played draw.";
    }
} 
console.log (uefaEuro2016(['Germany', 'Ukraine'],[2, 0]));
console.log (uefaEuro2016(['Belgium', 'Italy'],[0, 2]));
console.log (uefaEuro2016(['Portugal', 'Iceland'],[1, 1]))