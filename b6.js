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
let countNum= +prompt("mời nhập sô cần kiểm tra");
i=0;
while(i<num.length){
    if(countNum===num[i]){
        count++;
    }
    i++;
}
if(count){
    alert("số "+countNum+" xuất hiên "+count+" lần trong mảng");
}else{
    alert("số "+countNum+" không tồn tại trong mảng");
}
location.reload();