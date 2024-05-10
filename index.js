let count = 0;
function checkAnswer(answer) {
    const result = document.getElementById('result1');
    const result3 = document.getElementById('result3');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง คุณอยู่หน่วยงานข้อมูลจ่าย";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "ตอบผิด กรุณาตอบใหม่";
        result.style.color = 'red';
    }
 

}
function checkAnswer1(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง คุณอยู่คลังสุวรรณภูมิ";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "ตอบผิด กรุณาตอบใหม่";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;
 }
 


