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

    function createCalculatorInterfaceElements(){

        let interfaceElements = [];

        for (let i = 0; i < 10; i++){

            let currentElement = createButton(`${i}`);
            currentElement.classList.add('calculator__interface-item');
            interfaceElements.push(currentElement);
        }

        let sumButton = createButton('+');
        sumButton.classList.add('calculator__interface-item');
        interfaceElements.push(sumButton);

        let subtractButton = createButton('-');
        subtractButton.classList.add('calculator__interface-item');
        interfaceElements.push(subtractButton);
   
        let multiplicButton = createButton('*');
        multiplicButton.classList.add('calculator__interface-item');
        interfaceElements.push(multiplicButton);

        let divisionButton = createButton('/');
        divisionButton.classList.add('calculator__interface-item');
        interfaceElements.push(divisionButton);

        let leftBracketButton = createButton('(');
        leftBracketButton.classList.add('calculator__interface-item');
        interfaceElements.push(leftBracketButton);

        let rightBracketButton = createButton(')');
        rightBracketButton.classList.add('calculator__interface-item');
        interfaceElements.push(rightBracketButton);

        let buttonAC = createButton('AC');
        buttonAC.classList.add('calculator__interface-item');
        interfaceElements.push(buttonAC);

        let equalityButton = createButton('=');
        equalityButton.classList.add('calculator__interface-item');
        interfaceElements.push(equalityButton);

        let dotButton = createButton('.');
        dotButton.classList.add('calculator__interface-item');
        interfaceElements.push(dotButton);

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