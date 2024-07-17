const wrapper=document.querySelector(".wrapper");
const question=document.querySelector(".question");
const yesbtn=document.querySelector(".yes-btn");
const nobtn=document.querySelector(".no-btn");


const wrapperreact=wrapper.getBoundingClientRect();
const yesbtnreact=yesbtn.getBoundingClientRect();


nobtn.addEventListener("click",()=>{
    question.innerHTML="Thank you";
});

yesbtn.addEventListener("mouseover",()=>{
    const i=Math.floor(Math.random()* (wrapperreact.width - yesbtnreact.width))+1;
    const j=Math.floor(Math.random()* (wrapperreact.width - yesbtnreact.width))+1;

    yesbtn.style.left=i+'px';
    yesbtn.style.top=j+'px';
});