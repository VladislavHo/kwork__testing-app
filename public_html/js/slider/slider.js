class Slider {
  constructor(sliderElement) {
    this.slider = sliderElement;
    this.slides = sliderElement.querySelector('.reviews-slider');
    this.slide = sliderElement.querySelector('.review');
    this.prevBtn = sliderElement.querySelector('.prev-btn');
    this.nextBtn = sliderElement.querySelector('.next-btn');
    this.slideWidth = this.slide.offsetWidth;
    this.currentSlide = 0;
    
    this.prevBtn.addEventListener('click', this.prevSlide.bind(this));
    this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
    
    this.autoPlayInterval = null;
    // this.startAutoPlay();
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.children.length) % this.slides.children.length;
    this.updateSlidePosition();
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.children.length;
    this.updateSlidePosition();
  }
  
  updateSlidePosition() {
    this.slides.style.transform = `translateX(-${this.slideWidth * this.currentSlide}px)`;
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }
  
  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }
}

const slider = new Slider(document.querySelector('.reviews'));
