function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง คุณอยู่หน่วยงานข้อมูลบริหาร";
        result.style.color = 'green';
    } else {
        result.textContent = "คำตอบคุณผิด กรุณาตอบใหม่!!!";
        result.style.color = 'red';
    }
 }
 function checkAnswer1(answer) {
    const result = document.getElementById('result1');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง คุณอยู่คลังสุวรรณภูมิ";
        result.style.color = 'green';
    } else {
        result.textContent = "คำตอบคุณผิด กรุณาตอบใหม่!!!";
        result.style.color = 'red';
    }
 }
 

