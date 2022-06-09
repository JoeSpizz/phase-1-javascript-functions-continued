// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(job="go to the office") {
    return `This Monday, I will ${job}.`
}

function wrapAdjective(encouragement="*") {
    return function(adjective="special") {
       return `You are ${encouragement}${adjective}${encouragement}!`
    }
}