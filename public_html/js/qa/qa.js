class Accordion {
  constructor(element) {
    this.element = element;
    this.panel = element.nextElementSibling;
    this.element.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    this.element.classList.toggle("active");
    if (this.panel.style.maxHeight) {
      this.panel.style.maxHeight = null;
    } else {
      this.panel.style.maxHeight = this.panel.scrollHeight + "px";
    }
  }
}

const accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
  new Accordion(accordions[i]);
}
