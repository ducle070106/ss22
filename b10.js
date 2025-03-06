let choose;
let arr=[];
let i;
let input;
do{
    choose= +prompt("       MENU\n1. Nhập vào mảng\n2. Hiển thị mảng\n3. Thêm phần tử\n4. Sửa phần tử\n5. Xóa phần tử\n6. Thoát");
    switch(choose){
        case 1:
            input= +prompt("mời nhập số lượng phần tử");
            if(Number.isInteger(input)&&input>0){
                i=0;
                while(i<input){
                    arr[i]= +prompt("mời nhập số nguyên thứ "+(i+1));
                    if(!Number.isInteger(arr[i])){
                        alert("giá trị không hợp lệ");
                    }else{
                        i++;
                    }
                }
            }else{
                alert("giá trị không hợp lệ");
            }
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            arr.push(prompt("mời nhập phần tử thêm vào"));
            break;
        case 4:
            i= +prompt("mời nhập vị trí muốn sửa");
            if(Number.isInteger(i)&&i>=0&&i<arr.length){
                arr[i]=prompt("mời nhập vào giá trị thay thế");
            }else{
                alert("giá trị không hợp lệ");
            }
            break;
        case 5:
            i= +prompt("mời nhập vị trí muốn xóa");
            if(Number.isInteger(i)&&i>=0&&i<arr.length){
                arr.splice(i,1);
            }else{
                alert("giá trị không hợp lệ");
            }
            break;
    }
}while(choose!=6);