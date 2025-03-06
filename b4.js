let num=+prompt("mời nhập số tự nhiên");
if(Number.isInteger(num)&&num>=0){
    num=String(num).split("");
    alert(Math.max(...num)+" là số lớn nhất");
}else{
    alert("dãy số không hợp lệ");
}
location.reload();