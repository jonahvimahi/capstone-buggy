// import bugModel from '../Models/BugModel'

export function retrieveBugs(){
    let data = [];

    // data.push(new bugModel({
    //     _id: 12312432,
    //     name: "Crash on load",
    //     details: "Crashes after three seconds",
    //     steps: "Open app and then it will crash",
    //     version: "V1.0",
    //     assigned: "Jonah",
    //     creator: "Jonah",
    //     priority: 1,
    //     time:"10:30"
    // }))
    // data.push(new bugModel({
    //     _id: 334,
    //     name: "Jonah you suck",
    //     details: "nothing works",
    //     steps: "there is nothing there",
    //     version: "V1.0",
    //     assigned: "Jonah",
    //     creator: "Jonah",
    //     priority: 3,
    //     date: "10/22/2021"
    // }))
    // data.push(new bugModel({
    //     _id: 1,
    //     name: "Text Area Interference",
    //     details: `While typing in the "Steps:" area, it will also change the value of the details`,
    //     steps: "Go to Create Bug, then start typing in the 'Steps:'",
    //     version: "V1.0",
    //     assigned: "Jonah",
    //     creator: "Jonah",
    //     priority: 1,
    //     time:"Oct 21 2:19pm"
    // }))

    let sorted = data.sort((a,b) => {return a.priority-b.priority})
    return sorted
}