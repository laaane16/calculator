(function(){
    function createElement(el){
        let element = document.createElement(`${el}`);
        return element;
    }

    function createText(text){
        let textElement = document.textContent(`${text}`);
        return textElement;
    }

    function createCalculator(el){
        let element = createElement(el);
        element.classList.add('calculator');
    }

    function createCalculatorInterfaceElements(){

    }

    function createCalculatorApp(){

    }

    addEventListener('DOMContentLoaded', function(){

    })
})()