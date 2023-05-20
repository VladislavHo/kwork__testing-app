class PresentModal {
  constructor(modalId) {
      this.modal = document.getElementById(modalId);
      this.closeBtn = this.modal.getElementsByClassName("close")[0];
      this.openBtn = document.querySelector(".present")

      this.openBtn.addEventListener("click", () => this.open());
      this.closeBtn.addEventListener("click", () => this.close());
      window.addEventListener("click", (event) => this.closeOutside(event));
  }

  open() {
      this.modal.style.display = "flex";
      this.openBtn.style.display = 'none'
  }

  close() {
      this.modal.style.display = "none";
      this.openBtn.style.display = 'flex'
  } 

  closeOutside(event) {
      if (event.target === this.modal) {
          this.close();

      }
  }
}

// Создание экземпляра модального окна
const modal = new PresentModal("myModal");