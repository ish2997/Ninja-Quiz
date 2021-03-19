const correctAnswers=['B','B','B','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();
let score=0;
const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
//check answers
userAnswers.forEach((answer,index)=>{
    if(answer===correctAnswers[index]){
        score+=25;
    }
});
scrollTo(0,0); // scrolls at the top left of the page can also be written as window.scrollTo // scrolls to the top of the page when the user clicks the submit button.

result.classList.remove('d-none');

let output=0;
const timer=setInterval(()=>{
result.querySelector('span').textContent=`${output}%`;
if(output===score){                                   // to animate the score we take an output variable and set it to zero and keep incrementing it until it reaches the score.
 clearInterval(timer);                                   // the display duration is set to 10ms
}else{
    output++;
}
},100);




});
// window object global object  everything is stored inside the window object, the console, the document and everything else.
// console.log("hello");   // both console.log statements will print hello on the console // we do not need to mention window explicitly
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));  // both are same statements, again window object is not needed explicitly.

// alert("hello");
// window.alert("hello");  

// setTimeout(()=>{
//   alert("hello, ninjas");   // this function waits for 3000ms after the page loads that is 3s and then issues an alert
// },3000);
// let i=0;
//const timer=setInterval(()=>{
//  console.log("hello");
//    //this functions fires alert every second. this keeps on going until we use a stopping condition ,in this case we use clearinterval function to stop this
//    i++;
//    if(i===5){
//        clearInterval(timer);
//    }
// },1000)


