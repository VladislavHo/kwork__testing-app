const checkboxes = document.querySelectorAll('.data__user input[type="checkbox"]');
const checkboxLabels = document.querySelectorAll('.data__user label');

checkboxLabels.forEach((label, index) => {
  label.addEventListener('click', function() {
    const i = index
    if (checkboxes[i].checked) {
      window.open('http://www.consultant.ru/document/cons_doc_LAW_61801', '_blank');
    }
  });
});
