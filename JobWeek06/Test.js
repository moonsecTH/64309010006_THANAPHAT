let data = 
[
    {
    "EmployeeID" : 10001,
    "FullName" : "นางสาวชนิสา ไกรรอด",
    "Department" : "ไอที",
    "Role" : "System Engineer",
    "Salary" : 42000,
    "Level" : "S"
    },

    {
    "EmployeeID" : 10002,
    "FullName" : "นายวศพล สิริอนันต์",
    "Department" : "ไอที",
    "Role" : "System Engineer",
    "Salary" : 13000,
    "Level" : "A"
    },

    {
    "EmployeeID" : 10003,
    "FullName" : "นางจิราพร อินทรประเสริฐ",
    "Department" : "ฝ่ายบุคคล",
    "Role" : "HR",
    "Salary" : 9000,
    "Level" : "C"
    },

    {
    "EmployeeID" : 10004,
    "FullName" : "นางสาวพิมพา กาญจนมาศ",
    "Department" : "ฝ่ายบุคคล",
    "Role" : "HR",
    "Salary" : 21000,
    "Level" : "B"
    },

    {
    "EmployeeID" : 10005,
    "FullName" : "นายจิรโชติ วัฒนโกศล",
    "Department" : "ฝ่ายบุคคล",
    "Role" : "HR",
    "Salary" : 22000,
    "Level" : "A"
    },

    {
    "EmployeeID" : 10006,
    "FullName" : "นายธัชพล ขจรเกียรติสกุล",
    "Department" : "การเงิน",
    "Role" : "Account",
    "Salary" : 12000,
    "Level" : "S"
    },

    {
    "EmployeeID" : 10007,
    "FullName" : "นายธนวิทย์ สุวรรณโชติ",
    "Department" : "การเงิน",
    "Role" : "Account",
    "Salary" : 14000,
    "Level" : "A"
    },

    {
    "EmployeeID" : 10008,
    "FullName" : "นางพัชรียา สําราญทรัพย",
    "Department" : "การเงิน",
    "Role" : "Account",
    "Salary" : 50000,
    "Level" : "C"
    },

    {
    "EmployeeID" : 10009,
    "FullName" : "นางสาวขวัญชนก ธาดาวรวงศ์",
    "Department" : "ไอที",
    "Role" : "System Engineer",
    "Salary" : 16000,
    "Level" : "A"
    },
]

let sum01 = 0 // โบนัสพนักงาน
let sum02 = 0 // โบนัสที่ต้องจ่ายทั้งหมด
let sum03 = 0 // เก็บค่าผลรวมเงินเดือนพนักงาน 12 เดือน
let sum04 = 0 // รายได้สุทธิต่อปี
let sum05 = 0 // ร่ายจ่ายต่อปี
let sum06 = 0 // ภาษีที่ต้องจ่าย

for(i=0;i<data.length;i++){
    if(data[i].Level== "S"){
        sum01 = data[i].Salary*1.6;
        sum02 += sum01;
    }else if(data[i].Level == "A"){
        sum01 = data[i].Salary*1.3;
        sum02 += sum01;
    }else if(data[i].Level== "B"){
        sum01 = data[i].Salary*1.0;
        sum02 += sum01;
    }else if(data[i].Level == "C"){
        sum01 = data[i].Salary*0.8;
        sum02 += sum01;
    }
    sum03 = data[i].Salary*12;
    sum04 = sum03+sum02
    sum05 += sum04;
    if(sum03<300000){
    }else if(sum03>=300000&&sum03<=600000){
        sum06 = sum03*0.1;
        sum06 += sum06;
    }else if(sum03>=600000&&sum03<=1000000){
        sum06 = sum03*0.25;
        sum06 += sum06;
    }else if(sum03>1000000){
        sum06 = sum03*0.35;
        sum06 += sum06;
    }
    console.log(data[i].FullName,"มีรายได้สุทธิต่อปี =",sum04,"บาท","ต้องจ่ายภาษี",sum06,"บาท","ได้โบนัส",sum01);
}

console.log("==========================================================================================================\n")

console.log("พนักงานแผนก ไอที")
for(i=0;i<data.length;i++){
    if(data[i].Department=="ไอที"){
        console.log(data[i].FullName,"ภาษีที่ต้องจ่าย",sum06);
    }
}
console.log("==========================================================================================================\n")

console.log("ผลประเมิน S")
for(i=0;i<data.length;i++){
    if(data[i].Level=="S"){
        console.log(data[i].FullName,"ผลประเมิน",data[i].Level);
    }
}

console.log("บริษัทต้องจ่ายภาษีทั้งหมด :",sum06)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :",sum02)
console.log("รายจ่ายต่อปีของบริษัท :",sum05)