const questionItems = document.querySelectorAll(".questionItem");
questionItems.forEach((questionItem) => {
  const questionText = questionItem.querySelector(".text-q-and-a");
  questionText.addEventListener("click", () => {
    const answer = questionItem.querySelector(".answer");
    answer.classList.toggle("show");
    questionText.querySelector("i").classList.toggle("fa-plus");
    questionText.querySelector("i").classList.toggle("fa-minus");
  });
});
