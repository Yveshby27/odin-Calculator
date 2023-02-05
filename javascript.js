const container=document.querySelector('.container');
const deletebutton=container.querySelector('.backspace ');
const clearbutton=container.querySelector('.clear');
const operatorbuttons=container.querySelectorAll('.operator');
const current=container.querySelector('.current');
const previous=container.querySelector('.previous');
const equalbutton=container.querySelector('.equals');
const digitButtons=document.querySelector('.container-buttons');


let currentNumber='';
let operator='';
let previousNumber='';
let result='';
for(let i=0;i<10;i++)
{
    let digit=document.createElement('button');
    digit.textContent=i;
    digitButtons.appendChild(digit).className='digit';
}
const numberbuttons=container.querySelectorAll('.digit');
    numberbuttons.forEach(numberbutton=>{
        numberbutton.addEventListener('click',()=>
        { if(current.textContent.length<=9)//limit the max amount of digits in the field to 10
            {
            current.textContent+=numberbutton.textContent;
            currentNumber=current.textContent;
            }
        })
    })


    operatorbuttons.forEach(operatorbutton=>{
    operatorbutton.addEventListener('click',()=>
    {
        if(operator==='') 
        {
        operator=operatorbutton.textContent;
        previousNumber=currentNumber;
        previous.textContent=previousNumber+operator;
        currentNumber='';
        current.textContent='';
        }
        else if(operator!=='')
        {
            operate();//if the user clicks on an operator and there already is one,the result is calculated
            currentNumber=result;
            operator='';
        }
     })
    })
   
function add()
{
    return previousNumber+currentNumber;
}
function subtract()
{
    return previousNumber-currentNumber;
}
function multiply()
{
    return previousNumber*currentNumber;
}
function divide()
{
    if(currentNumber===0)
    return 'ERROR, CANNOT DIVIDE BY 0';
    return Math.round((previousNumber/currentNumber)*100)/100;
}
function calculate()
{
    previousNumber=Number(previousNumber);
    currentNumber=Number(currentNumber);
switch(operator)
{
    case '+':
        result=add();
        break;
    case'-':
        result=subtract();
        break;
    case'x':
        result=multiply();
        break;
    case'/':
        result=divide();
        break;
}
previous.textContent='';
}
function operate()
{
    if(previousNumber==='') return;
    calculate();
    current.textContent=result;
}
equalbutton.addEventListener('click',operate);
clearbutton.addEventListener('click',()=>
{
current.textContent='';
previous.textContent='';
previousNumber='';
currentNumber='';
operator='';
})
deletebutton.addEventListener('click',()=>{
current.textContent=current.textContent.slice(0,-1);//remove the last character in the string in the text field
})