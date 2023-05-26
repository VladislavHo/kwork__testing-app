const checkbox = document.querySelectorAll('.data__user-checked');


checkbox.forEach((el, i) =>{
  el.addEventListener('change', function() {
    if (this.checked) {
      window.open('http://www.consultant.ru/document/cons_doc_LAW_61801', '_blank');
    }
  });
})
