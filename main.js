
console.log("______________Java Script________________");

const age = 30;
const name = "Huzaifa Khalid";
console.log("My name is " + name + " My age is " + age);

// array 
const students = [
    "Huzaifa", "Hasham", "Ali", "Adnan", "Sufyan"
];
//console.log(students);

//console.log(Array.isArray(students));

// JavaScript Object

const bioData = {

    firstName: "Huzaifa",
    lastName: "Khalid",
    semeter: 6,
    rollNumber: "0215-BSCS-18",
    subjects: [
        "Data Structure", "Assembly", "AI", "Compiler Construction", "OOP"
    ],
    address: {
        houseNumber: "15-A",
        streetNumber: "School Street",
        area: "Sodiwal Quatters",
        city: "Lahore",
    }
};

// studentSearchResult

const studentsData=[
    {
    id:215,
    data:{
        firstName: "Huzaifa",
    lastName: "Khalid",
    semeter: 6,
    rollNumber: "0215-BSCS-18",
    subjects: [
        "Data Structure", "Assembly", "AI", "Compiler Construction", "OOP"
    ],
    address: {
        houseNumber: "15-A",
        streetNumber: "School Street",
        area: "Sodiwal Quatters",
        city: "Lahore",
    },
    },
},

{
    id:225,
    data:{
        firstName: "Hasham",
        lastName: "Zafar",
        semeter: 6,
        rollNumber: "0215-BSCS-18",
        subjects: [
            "Data Structure", "Assembly", "AI", "Compiler Construction", "OOP"
        ],
        address: {
            houseNumber: "15-A",
            streetNumber: "School Street",
            area: "Sodiwal Quatters",
            city: "Lahore",
        },
    },
},
{    id:269,
    data:{
        firstName: "Sufan ",
        lastName: "Naeem",
        semeter: 6,
        rollNumber: "0215-BSCS-18",
        subjects: [
            "Data Structure", "Assembly", "AI", "Compiler Construction", "OOP"
        ],
        address: {
            houseNumber: "15-A",
            streetNumber: "School Street",
            area: "Sodiwal Quatters",
            city: "Lahore",
        },
    },
}
];

// use Filter
// const studentRollNumebr=prompt("Enter the Student Roll Number");
// const result=studentsData.filter(function(data){
//        return data.id== studentRollNumebr;
// });
// console.log(result);
// const Json=JSON.stringify(result);
// console.log(Json);


// for(let i=0;i<studentsData.length;i++){
//     if(studentRollNumebr == studentsData[i].id){
//         console.log(studentsData[i].data);
//     }
// }  







