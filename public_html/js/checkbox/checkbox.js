const checkbox = document.querySelectorAll('.data__user-checked');


checkbox.forEach((el, i) =>{
  el.addEventListener('change', function() {
    if (this.checked) {
      window.open('./policy.html', '_blank');
    }
  });
})
