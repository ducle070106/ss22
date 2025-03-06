let num=[];
let i=0;
let totalEven=0;
let totalOdd=0;
while(i<5){
    num[i]= +prompt("mời nhập số tự nhiên thứ "+(i+1));
    if(!Number.isInteger(num[i])||num[i]<0){
        alert("giá trị không hợp lệ");
    }else{
        if(num[i]%2==0){
            totalEven+=num[i];
        }else{
            totalOdd+=num[i];
        }
        i++;
    }
}
alert("tổng các số chẵn: "+totalEven+"\ntổng các số lẻ: "+totalOdd);
location.reload();