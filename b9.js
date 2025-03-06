let num=[];
let i=0;
while(i<10){
    num[i]= +prompt("mời nhập số nguyên thứ "+(i+1));
    if(!Number.isInteger(num[i])){
        alert("giá trị không hợp lệ");
    }else{
        i++;
    }
}
num.sort((a, b) => a - b);
console.log(num)
let arr=[];
let arrCount=[];
i=0;
let j;
while(i<num.length){
    if(arr.includes(num[i])){
        i++
        continue;
    }
    arr.push(num[i]);
    j=0;
    arrCount[arr.length-1]=0;
    while(j<num.length){
        if(arr[arr.length-1]===num[j]){
            arrCount[arr.length-1]++;
        }
        j++;
    }
    i++;
}
console.log(arr);
console.log(arrCount);
i=0;
while(i<arrCount.length){
    if(arrCount[i]>1){
        j=0;
        while(arrCount[i]!==1){
            if(num[j]===arr[i]){
                num.splice(j,1);
                arrCount[i]--;
                continue;
            }
            j++;
        }
    }
    i++;
}
alert(num);