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

// const list=document.querySelector('.items');
// //list.children[1].innerText="helo";

// const btn= document.querySelector('.btn');
// // click,mouseover
// btn.addEventListener('mouseover',(e)=>{
//     btn.style.background="red";
//     document.querySelector('#my-form').style.background="blue";
//    // document.querySelector('body').style.background="#333";
//    document.querySelector('body').classList.add('bg-dark');// adding the class fromm the css file
//     list.children[0].innerText="Huzaifa";
//     list.children[1].innerText="Khuram";
//     list.children[2].innerText="Awais";
//     e.preventDefault();// to end it 
    
// });


// data from 

// get the ids of the form that you have need
const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const userlist=document.querySelector('#users');
const msg=document.querySelector('.msg');

form.addEventListener('submit',(e)=>onSubmit(e));
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML="Please Enter the data ";

        setTimeout(()=> msg.remove,3000);
    }
    else{
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value+" : "+emailInput.value ));
        userlist.appendChild(li);

        nameInput.value="";
        emailInput.value="";

    }
}



