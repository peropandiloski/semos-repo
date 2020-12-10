function daysToChristmas() {
    today = new Date();
    let christmas = new Date(today.getFullYear()+1, 0, 7);
    if (today.getMonth() == 0 && today.getDate() > 7) 
    {
    christmas.setFullYear(christmas.getFullYear()+1); 
    }  
    let milisecondsInOneDay = 1000*60*60*24;

    // 1970-1-1 do bozik  -  1970-1-1 do denes
    let leftDaysInMiliseconds = christmas.getTime()-today.getTime();
    let res = Math.ceil((leftDaysInMiliseconds)/(milisecondsInOneDay)) + " days left until Christmas!";
    return res;
}

console.log(daysToChristmas());
