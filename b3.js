let num=+prompt("mời nhập số tự nhiên");
if(Number.isInteger(num)&&num>=0){
    num=String(num).split("").reverse().join("");
    alert(num);
}else{
    alert("dãy không hợp lệ");
}
location.reload();