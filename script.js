(function(){
    function createElement(el){
        let element = document.createElement(el);

        return element;
    }

    // function createText(text){
    //     let textElement = document.textContent(text);
    //     return textElement;
    // }

    function createButton(value){
        let button = createElement('button');
        button.classList.add(`btn`);
        button.classList.add(`buttonSet${value}`);
        button.id = `set(${value})`;

        button.append(value);
        
        return button;
    }

    function createCalculatorInterface(){
        let element = createElement('ul');
        element.classList.add('calculator__interface');

        return element;
    }

    function createEvent(element){
        element.addEventListener('click', function(){
            if (!(+element.id.slice(4,5)) && element.id.slice(4,5) != '0'){
                if (+document.querySelector('.input').value[document.querySelector('.input').value.length - 1] || +document.querySelector('.input').value[document.querySelector('.input').value.length - 1] == 0){
                    document.querySelector('.input').value += element.id.slice(4,5);
                }
            } else{
                document.querySelector('.input').value += element.id.slice(4,5);
            }
        })
    }

    function getAnswerExample(){
        let answer;
        let example = document.querySelector('.input').value;
        let nums = example;
        nums = nums.replace('-', '+').replace('*', '+').replace('/', '+').replace('%', '+');
        nums = nums.split('+');
        let actions = example;
        actions = actions.replace(/[0-9]/g,'');
        actions = actions.split('');
        
        answer = +nums[0];

        console.log(actions,answer, nums)

        for (let i = 0; i < actions.length; i++){
            if (actions[i] == '+'){
                answer += +nums[i+1];
            }
            if (actions[i] == '-'){
                answer -= +nums[i+1];
            }
            if (actions[i] == '*'){
                answer *= +nums[i+1];
            }
            if (actions[i] == '/'){
                answer /= +nums[i+1];
            }
            if (actions[i] == '%'){
                answer %= +nums[i+1];
            }
        }
        return answer;
    }

    function createCalculatorInterfaceElements(){

        let interfaceElements = [];

        for (let i = 0; i < 10; i++){

            let currentElement = createButton(`${i}`);

            currentElement.classList.add('calculator__interface-item');
            
            createEvent(currentElement);
            
            interfaceElements.push(currentElement);
        }

        let sumButton = createButton('+');
        sumButton.classList.add('calculator__interface-item');
        
        createEvent(sumButton);
        
        interfaceElements.push(sumButton);

        let subtractButton = createButton('-');
        subtractButton.classList.add('calculator__interface-item');
        
        createEvent(subtractButton);
        
        interfaceElements.push(subtractButton);
   
        let multiplicButton = createButton('*');
        multiplicButton.classList.add('calculator__interface-item');
        
        createEvent(multiplicButton);
        
        interfaceElements.push(multiplicButton);

        let divisionButton = createButton('/');
        divisionButton.classList.add('calculator__interface-item');

        createEvent(divisionButton);

        interfaceElements.push(divisionButton);

        let leftBracketButton = createButton('(');
        leftBracketButton.classList.add('calculator__interface-item');

        createEvent(leftBracketButton);

        interfaceElements.push(leftBracketButton);

        let rightBracketButton = createButton(')');
        rightBracketButton.classList.add('calculator__interface-item');

        createEvent(rightBracketButton);

        interfaceElements.push(rightBracketButton);

        let buttonAC = createButton('AC');
        buttonAC.classList.add('calculator__interface-item');

        buttonAC.addEventListener('click', function(){
            document.querySelector('.input').value = '';
        });

        interfaceElements.push(buttonAC);

        let equalityButton = createButton('=');
        equalityButton.classList.add('calculator__interface-item');

        equalityButton.addEventListener('click', function(){
            document.querySelector('.input').value = getAnswerExample();
        });

        interfaceElements.push(equalityButton);

        let dotButton = createButton('.');
        dotButton.classList.add('calculator__interface-item');

        createEvent(dotButton)

        interfaceElements.push(dotButton);

        let remainderDiv = createButton('%');
        remainderDiv.classList.add('calculator__interface-item');

        createEvent(remainderDiv)

        interfaceElements.push(remainderDiv);

        return  interfaceElements;
    }

    function createCalculatorApp(){
        let container = document.querySelector('.container');

        let calculator = document.createElement('div');
        calculator.classList.add('calculator');

        let input = createElement('input');

        input.classList.add('calculator__interface-item');
        input.classList.add('input')
        input.id = 'input';
        // input.value = '0';

        // input.addEventListener('input' , function(event){
        //     console.log(1)
        //     if (!(+input.value[input.value.length-2])){
        //         if (!(+event.target.value)){
        //             input.value.splice(input.value.length-1, 1);
        //         }
        //     }
        // })

        calculator.append(input)

        let calculatorInterface = createCalculatorInterface();

        let calculatorInterfaceElements = createCalculatorInterfaceElements();

        for (let calculatorInterfaceElement of calculatorInterfaceElements){
            calculatorInterface.append(calculatorInterfaceElement);
        }
        
        calculator.append(calculatorInterface);

        container.append(calculator);
    }

    addEventListener('DOMContentLoaded', function(){
        createCalculatorApp();
    })

})()