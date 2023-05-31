class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    this.successMessage = document.querySelector(settings.successMessage);
    this.errorMessage = document.querySelector(settings.errorMessage);

    if (this.form) {
      this.url = this.form.getAttribute("action");
    }

    this.sendForm = this.sendForm.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  displaySuccess() {
    this.successMessage.style.display = "block";
    this.errorMessage.style.display = "none";
    this.form.reset();
  }

  displayError(message) {
    this.successMessage.style.display = "none";
    this.errorMessage.style.display = "block";
    this.errorMessage.querySelector(".error").textContent = message;
  }

  closeMessage() {
    this.successMessage.style.display = "none";
    this.errorMessage.style.display = "none";
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);

      const formObject = this.getFormObject();
      const isEmpty = Object.values(formObject).some((value) => value === "");

      if (isEmpty) {
        throw new Error("Todos os campos devem ser preenchidos.");
      }

      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(formObject.email)) {
        throw new Error("E-mail inválido. Por favor, insira um e-mail válido.");
      }

      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formObject),
      });

      this.displaySuccess();
    } catch (error) {
      this.displayError(error.message);
    } finally {
      event.target.disabled = false;
      event.target.innerText = "Enviar";
    }
  }

  init() {
    if (this.form) {
      this.formButton.addEventListener("click", this.sendForm);
      this.successMessage
        .querySelector(".close-button")
        .addEventListener("click", this.closeMessage);
      this.errorMessage
        .querySelector(".close-button")
        .addEventListener("click", this.closeMessage);
    }
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: ".submitBtn",
  successMessage: ".success-message",
  errorMessage: ".error-message",
});

formSubmit.init();
