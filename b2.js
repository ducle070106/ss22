let number=[2,5,7,4,1,8,6];
num= +prompt("mời chọn sô may mắn từ 1-9");
if(number.includes(num)){
    alert("bingo")
}else{
    alert("chúc bạn may mắn lần sau(sai là 2/9)");
}
location.reload();