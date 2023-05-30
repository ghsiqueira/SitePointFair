// Definir perguntas e respostas
const questions = [
  {
    question: "Como faço para baixar o APP?",
    answer: "Basta ir ao menu iniciar e clicar em Baixar APP.",
  },
  {
    question: "Como me cadastro no site?",
    answer: "Basta clicar em registrar e preencher os campos!",
  },
  {
    question: "Preciso ser maior de idade para usar o APP?",
    answer: "Não precisa!.",
  },
  {
    question: "Duvidas aqui!",
    answer: "aaaa",
  },
  {
    question: "Duvidas aqui!",
    answer: "aaaa",
  },
];

// Adicionar perguntas e respostas à seção de dúvidas frequentes
const questionsContainer = document.querySelector("#Questions");

questions.forEach((itemQuestion, index) => {
  let itemsQuestions = document.querySelector(".questionItem").cloneNode(true);

  itemsQuestions.id = `questionItem-${index}`;
  itemsQuestions.querySelector(".text-q-and-a p").innerHTML =
    itemQuestion.question;
  itemsQuestions.querySelector(".answer p").innerHTML = itemQuestion.answer;
  itemsQuestions.setAttribute("onclick", `showAnswer(${index})`);

  questionsContainer.append(itemsQuestions);
});

document.querySelector(".questionItem").remove();

// Mostrar ou esconder respostas ao clicar na pergunta
function showAnswer(numItem) {
  let answerElement = document.querySelectorAll(".answer");
  let plusIcon = document.querySelectorAll(".text-q-and-a i");

  if (answerElement[numItem].classList.contains("showOff")) {
    answerElement[numItem].classList.replace("showOff", "show");
    plusIcon[numItem].classList.replace("fa-plus", "fa-minus");
  } else {
    answerElement[numItem].classList.replace("show", "showOff");
    plusIcon[numItem].classList.replace("fa-minus", "fa-plus");
  }
}
