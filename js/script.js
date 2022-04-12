
window.onload = () =>{
    updatePage(question_index);
}

let question_index = 1;
let isCorrect = 0;
let totalQuestion = 0;
let correctCount = 0;

const q_init =() =>{
    const A = Math.floor(Math.random() * 5000);
    const B = Math.floor(Math.random() * 5000);
    const answer = A + B; 
    const answerArr = [answer
                        , answer + Math.floor(Math.random() * 40) * (Math.floor(Math.random()*2) == 1 ? 1 : -1)
                        ,answer + Math.floor(Math.random() * 40) * (Math.floor(Math.random()*2) == 1 ? 1 : -1)
                        ,answer + Math.floor(Math.random() * 40) * (Math.floor(Math.random()*2) == 1 ? 1 : -1)]
    const Q = `What is ${A} + ${B}?`;
    answerArr.sort(()=>Math.random()-0.5);

    isCorrect = answerArr.indexOf(answer);
    
    return {"Q":Q, "answer":answerArr};
}

const ABC = {
    0:"A",
    1:"B",
    2:"C",
    3:"D",
}
// 페이지 업데이트
const updatePage = () =>{
    const obj = q_init();
    
    document.querySelector('.question').innerHTML = obj.Q
    const parentNode = document.querySelector('.parent');

    while ( parentNode.hasChildNodes() ) {
        parentNode.removeChild( parentNode.firstChild ); 
    }


    obj.answer.map((item,i) =>{
        let div = document.createElement('div');
        div.className = "child" + (i + 1);
        div.onclick = () =>{checkAnswer(i)};
        div.innerHTML = `<div class="child-inner">${ABC[i]}</div>${item}`;
        
        parentNode.appendChild(div);
    });
    
    
}

// 답 체크
const checkAnswer = (x) =>{
    totalQuestion += 1;
    if(x === isCorrect) correctCount += 1;

    const score = document.querySelector('.score');
    score.innerHTML = `${correctCount} / ${totalQuestion}`;

    const progress = document.querySelector('progress');
    progress.value = correctCount / totalQuestion;

    updatePage();
}



