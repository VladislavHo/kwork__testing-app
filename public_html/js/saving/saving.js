class Accordion {
  constructor(selector) {
    this.accordions = document.querySelectorAll(selector);

    this.setupAccordions();
  }

  setupAccordions() {
    this.accordions.forEach((accordion) => {
      const question = accordion.querySelector('.saving-Q');
      question.addEventListener('click', () => {
        this.toggleAccordion(accordion);
      });
    });
  }

  toggleAccordion(accordion) {
    const content = accordion.querySelector('.saving-A');
    accordion.classList.toggle('active');
    if (accordion.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  }
}

const accordion = new Accordion('.saving_acardeon');
