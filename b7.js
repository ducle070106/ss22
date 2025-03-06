let num=[];
let i=0;
let count=0;
while(i<10){
    num[i]= +prompt("mời nhập số nguyên thứ "+(i+1));
    if(!Number.isInteger(num[i])){
        alert("giá trị không hợp lệ");
    }else{
        i++;
    }
}
alert(num.sort((a, b) => a - b));
location.reload();