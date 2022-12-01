//ข้อ 1
let data = [{
    "Customer": "Mr.Lee",
    "ItemOrder": ["A4 Paper","Ruler"],
    "Qty": [5,2],
    "Price": [120,25]
},

{
    "Customer": "Mr.Yue",
    "ItemOrder": ["Flash Drive","A4 Paper"],
    "Qty": [2,3],
    "Price": [130,120]
},

//ข้อ 2
{
    "Customer": "Mr.New",
    "ItemOrder": ["Flash Drive","Power Supply","Hard Disk"],
    "Qty": [3,5,1],
    "Price": [100,130,10]
}]

//ข้อ 3
for (i=0; i<data.length; i++){
    
    let sum=0;
    for(let j=0;j<data[i].ItemOrder.length; j++){
        sum += data[i].Qty[j]*data[i].Price[j];
    }
    console.log(data[i].Customer,sum)
}
