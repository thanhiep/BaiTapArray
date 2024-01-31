
let listNum = [];

function resetInput() {
    document.getElementById("inputNum").value = "";
}


//* Thêm số nguyên
document.getElementById("addNum").onclick = function () {
    let num = document.getElementById("inputNum").value * 1;
    if (Number.isInteger(num)) {
        listNum.push(num);
    }
    else {
        alert("số nhập vào phải là số nguyên")
    }
    document.getElementById("list").innerHTML = listNum;
    resetInput();
}

//* Tính tổng số dương
/**
 * 0. Tạo biến sum = 0
 * 1. Duyệt mảng listNum
 *              Nếu listNum[i] > 0 => sum = sum + listNum[i]
 * 2. Xuất kết quả
 */

document.getElementById("sumPositive").onclick = function () {
    let sum = 0;
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] > 0) {
            sum += listNum[i]
        }
    }
    document.getElementById("txtSum").innerHTML = sum;
}

//* Đếm số số dương
/**
 * 0. Tạo biến count = 0
 * 1. Duyệt mảng listNum
 *              Nếu listNum[i] > 0 => count = count + 1
 * 2. Xuất kết quả
 */

document.getElementById("countPositive").onclick = function () {
    let count = 0;
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] > 0) {
            count++
        }
    }
    document.getElementById("txtCount").innerHTML = count;
}

//* Tìm số nhỏ nhất trong mảng
/**
 * 0. Tạo biến min = listNum[0]
 * 1. Duyệt mảng từ listNum[1] đến i < listNum.length
 *                  Nếu listNum[i] < min => min = listNum[i]
 * 2. Xuất kết quả
 */

document.getElementById("findMin").onclick = function () {
    let min = listNum[0];
    for (let i = 1; i < listNum.length; i++) {
        if (listNum[i] < min) {
            min = listNum[i]
        }
    }
    document.getElementById("txtMin").innerHTML = min;
}

//* Tìm số dương nhỏ nhất trong mảng
/**
 * 0. Tạo mảng listPositive = []
 * 1. Duyệt mảng listNum
 *          Nếu listNum[i] > 0 => push listNum[i] vào mảng listPosivite[]
 * 2. Tạo biến minPositive = listPositive[0]
 * 3. Duyệt mảng listPositive từ i = 1
 *          Nếu listPositive[i] < minPositive => minPositive = listPositive[i]
 * 4. Xuất kết quả
 */

document.getElementById("findMinPositive").onclick = function () {
    let listPositive = [];
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] >= 0) {
            listPositive.push(listNum[i])
        }
    }
    let minPositive = listPositive[0]
    for (let j = 1; j < listPositive.length; j++) {
        if (listPositive[j] < minPositive) {
            minPositive = listPositive[j]
        }
    }
    document.getElementById("txtMinPositive").innerHTML = minPositive;
}

//* Tìm số chẵn cuối cùng trong mảng
/**
 * 0. Tạo biến last = -1
 * 1. Duyệt mảng listNum
 *          Nếu listNum[i] % 2 == 0
 *                  => last = listNum[i]
 * 2. Xuất kết quả
 */

document.getElementById("findLast").onclick = function () {
    let last = -1;
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] % 2 == 0) {
            last = listNum[i];
        }
    }
    document.getElementById("txtLast").innerHTML = last;
}

//* Đổi chỗ 2 vị trí được chọn
/**
 * 0. Tạo biến firstPosition, secondPostion lấy giá trị 2 vị trí được chọn (vị trí > 0)
 *    Tạo mảng listSwap = [] => khi đổi vị trí 2 số được chọn sẽ không ảnh hưởng đến listNum
 *                              khi nhập lại 2 vị trí khác sẽ dựa vào dãy số ban đầu nhập vào để đổi vị trí.
 * 1. Duyệt mảng listNum[i] từ 0 tới hết mảng => push listNum[i] vào listSwap
 * 2. Nếu 2 vị trí nhập vào > 0 và <= số phần tử trong mảng
 *                  => Tạo biến temp = 0
 *                     gán temp = listSwap[firstPosition - 1] (phần tử ở vị trí 1)
 *                         listSwap[firstPosition - 1] = listSwap[secondPostion - 1]
 *                         listSwap[secondPostion - 1] = temp
 * 3. Xuất kết quả listSwap                     
 */

document.getElementById("swap").onclick = function () {
    let firstPosition = document.getElementById("inputFirstNum").value * 1;
    let secondPosition = document.getElementById("inputSecondNum").value * 1;
    let listSwap = [];

    for (let i = 0; i < listNum.length; i++) {
        listSwap.push(listNum[i])
    }
   
    if (firstPosition > 0 && firstPosition <= listSwap.length && secondPosition > 0 && secondPosition <= listSwap.length) {
            let temp = 0;
            temp = listSwap[firstPosition - 1];
            listSwap[firstPosition - 1] = listSwap[secondPosition - 1];
            listSwap[secondPosition - 1] = temp;
    }
    else {
        alert("nhập lại vị trí")
    }
    document.getElementById("txtSwap").innerHTML = listSwap;
}


//* Sắp xếp dãy số theo thứ tự tăng dần
/**
 * 0. Tạo mảng listUp = []
 * 1. Duyệt mảng listNum => push(listNum[i]) vào listUp
 * 2. Tạo biến temp = 0;
 * 3. Duyệt mảng listUp[i] từ 0 đến listUp.length - 1
 *          Duyệt mảng listUp[j] từ i + 1 đến listUp.length
 *              Nếu listUp[j] < listUp[i] 
 *                  => temp = listUp[i]
 *                     listUp[i] = listUp[j]
 *                     listUp[j] = temp;
 * 4. Xuất kết quả
 */

document.getElementById("btnUp").onclick = function () {
    let listUp = [];
    for (let i = 0; i < listNum.length; i++) {
        listUp.push(listNum[i])
    }
    let temp = 0;
    for (let i = 0; i < listUp.length - 1; i++) {
        for (let j = i + 1; j < listUp.length; j++) {
            if (listUp[j] < listUp[i]) {
                temp = listUp[i]
                listUp[i] = listUp[j]
                listUp[j] = temp
            }
        }
    }
    document.getElementById("txtUp").innerHTML = listUp;
}


//*Tìm số nguyên tố đầu tiên trong dãy số
/**
 * 0. Tạo hàm kiểm tra số nguyên tố isPrime(num)
 *            Nếu num <= 1 => không phải số nguyên tố => false
 *            Kiểm tra trong vòng lặp từ 2 đến căn bậc 2 của num
 *                  Nếu num chia hết cho 1 số bất kì trong vòng lặp => không phải số nguyên tố => false
 *                  Còn lại => true
 * 1. Tạo biến primeNum = -1;
 * 2. Duyệt mảng listNum[i] từ 0 đến hết
 *          Kiếm tra listNum[i] bằng hàm isPrime(listNum[i])
 *                  Nếu true => primeNum = listNum[i] => break;
 * 3. Xuất kết quả
 */


// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


document.getElementById("findPrime").onclick = function () {
    let primeNum = -1;
    for (let i = 0; i < listNum.length; i++) {
        if (isPrime(listNum[i])) {
            primeNum = listNum[i];
            break;
        }
    }
    document.getElementById("txtPrime").innerHTML = primeNum;
}



//* So sánh số lượng số âm và số lượng số dương
/**
 * 0. Tạo biến countPositive = 0
 *             countNegative = 0
 * 1. Duyệt mảng listNum[i] từ 0 đến hết
 *          Nếu listNum[i] >= 0 => countPositive++
 *          else => countNegative++
 * 2. So sánh countPositive và countNegative
 * 3. Xuất kết quả
 */

document.getElementById("compare").onclick = function () {
    let countPositive = 0;
    let countNegative = 0;
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] >= 0) {
            countPositive++
        }
        else {
            countNegative++
        }
    }

    let result = compareNum(countPositive, countNegative)
    document.getElementById("txtCompare").innerHTML = `
        <br>
        Số số dương: ${countPositive}
        <br>
        Số số âm: ${countNegative}
        <br>
        So sánh: ${result}
    `
}

function compareNum(a, b) {
    if (a > b) {
        return "Số số dương > số số âm"
    }
    else if (a < b) {
        return "Số số dương < số số âm"
    }
    else {
        return "Số số dương = số số âm"
    }
}


//* Nhập số thực

let listNumber = [];

function resetInputNum() {
    document.getElementById("inputNumber").value = "";
}

document.getElementById("addNumber").onclick = function () {
    let number = document.getElementById("inputNumber").value * 1;
    listNumber.push(number)

    document.getElementById("listNumber").innerHTML = listNumber;
    resetInputNum();
}


//* Đếm số nguyên trong dãy số thực
/**
 * 0. Tạo biến countInteger = 0;
 * 1. Duyệt mảng listNumber[i] từ 0 đến hết
 *         => Nếu Number.isInteger(listNumber[i]) => countInteger++
 * 2. Xuất kết quả
 */

document.getElementById("findInteger").onclick = function () {
    let countInteger = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (Number.isInteger(listNumber[i])) {
            countInteger++
        }
    }
    document.getElementById("txtInteger").innerHTML = countInteger;
}