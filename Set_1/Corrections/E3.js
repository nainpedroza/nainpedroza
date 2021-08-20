function display(textcolor ="#FF00FF",size = "x-large",bgcolor="blue" )//default colors are set
{
var col = document.getElementById("elementId");
col.style.color=textcolor;
col.style.fontSize = size;
col.style.backgroundColor = bgcolor;
col.display = function(textcolor, size, bgcolor){
    this.style.color = textcolor;
    this.style.fontSize = size;
    this.style.backgroundColor = bgcolor; 
    }
}
