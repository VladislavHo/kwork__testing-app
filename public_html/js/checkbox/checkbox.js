

const labelList = document.querySelectorAll('.data__user');
const checkbox = document.querySelectorAll('.data__user-checked');


// labelList.forEach((el, i) =>{

//   // const checkbox = document.querySelector('.data__user-checked');

//   checkbox[i].addEventListener('click', function(event) {
//     if (!checkbox[i].checked) {
//       checkbox[i].checked = false; // Активируем чекбокс
//       return; // Выходим из обработчика события
//     }
//     const label = event.target.closest('label'); // Получаем родительскую метку

//     if (!checkbox[i].checked && label) {
//       event.preventDefault(); // Отменяем переход по ссылке
//     } else {
//       window.open('http://www.consultant.ru/document/cons_doc_LAW_61801', '_blank');
//     }
//   });
// })
