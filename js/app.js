const quizData = [{
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];
const head = document.querySelector('h2');
const options = document.querySelectorAll('.opt');
var index = 0;
const loadques = ()=>{
    head.innerText = quizData[index].question;
    options[0].innerText = quizData[index].a;
    options[1].innerText = quizData[index].b;
    options[2].innerText = quizData[index].c;
    options[3].innerText = quizData[index].d;
    setInterval(clear,5000);

}
const btn = document.querySelector('button');
let correct = 0, incorrect=0;
btn.addEventListener('click',
    ()=>{
        const x = getAnswer();
        if(x==quizData[index].correct){
            correct++;
            btn.style.backgroundColor= 'green';
            btn.innerHTML = "Correct";
        }
        else{
            incorrect++;
            btn.style.backgroundColor='red';
            btn.innerHTML="Incorrect";
        }
        if(index>=quizData.length-1){
            EndPage();
            return;
        }
        index++;
        loadques();
    }
);
const clear = ()=>{
    const op = document.getElementsByName('option');
    for(let i=0;i<op.length;i++){
        op[i].checked = false;
    }
    btn.style.backgroundColor =  '#3498db';
    btn.innerHTML = "Submit";
}
const getAnswer = ()=>{
    const op = document.getElementsByName('option');
    for(let i=0;i<op.length;i++){
        if(op[i].checked){
            return op[i].value;
        } 
    }
}
const EndPage = ()=>{
    document.getElementsByClassName("box")[0].innerHTML = `
        <div class="col">
            <h3> Hii, you've scored ${correct} correct and ${incorrect} incorrect </h3>
        </div>
    `
}

loadques();