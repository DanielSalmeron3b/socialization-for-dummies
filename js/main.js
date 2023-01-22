const question = document.getElementById('question');
const reloadQuestionButton = document.getElementById('reload');
const questionList = [
    '¿Qué es lo más raro?',
    '¿Si no fuera por el dinero a qué te dedicarías?',
    '¿Por qué crees que te rechazarían un noviazgo?',
    '¿Algo que le gusta a todo el mundo menos a ti?',
    '¿Qué es lo más loco que has hecho por amor?',
    '¿FMLN o ARENA?',
    '¿Estarías con alguien por el dinero?',
    '¿Si pudieras resolver un problema mundial cuál sería?',
    '¿Si tuvieras que dejar de usar una red social cuál sería?',
    'Versículo favorito de la biblia',
    'Parte favorita y parte que menos te gusta de tu cuerpo?',
    '¿Gusto culposo?',
];

window.onload = () => {
    let randomQuestionNumber = Math.floor(Math.random() * questionList.length);
    // Insert the question in the html
    const pQuestion = document.querySelector('#question-text');
    const pQuestionText = document.createTextNode(questionList[randomQuestionNumber]);
    pQuestion.appendChild(pQuestionText);
};

reloadQuestionButton.addEventListener('click', () => {
    window.location.reload();
});
