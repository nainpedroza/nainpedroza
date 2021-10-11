function display(textColor ="#FF00FF",size = "x-large",bgColor="blue" ){//defautls are set
    this.style.color = textColor;
    this.style.fontSize = size;
    this.style.backgroundColor = bgColor; 
}

let element = document.getElementById("meter");
display.call(element, 'blue', 30 , 'red')
