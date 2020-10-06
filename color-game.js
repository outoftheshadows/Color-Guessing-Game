var numofsquares=6;
var colors=generateRandomcolors(numofsquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function()
{
    hardBtn.classList.remove("selected");

    easyBtn.classList.add("selected");
    numofsquares=3;
    colors=generateRandomcolors(numofsquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        squares[i].style.background=colors[i];
        else
        {
            squares[i].style.display="none";
        }
    }
})
hardBtn.addEventListener("click",function()
{
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numofsquares=6;
    colors=generateRandomcolors(numofsquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=colors[i];
        
            squares[i].style.display="block";
       
    }

})
colorDisplay.textContent=pickedColor;

resetButton.addEventListener("click",function()
{
    colors=generateRandomcolors(numofsquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    messagedisplay.textContent="";
    this.textContent="New Colors"
    for(var i=0;i<squares.length;i++)
    squares[i].style.background=colors[i];
    h1.style.background="steelblue";
})
for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click",function()
    {
        var clickedColor=this.style.background;
       
        if(clickedColor == pickedColor)
        {
            messagedisplay.textContent="Correct!";
            changeColors(clickedColor);
            h1.style.background=clickedColor;
            resetButton.textContent="Play again?"
        }
       
        else
        {this.style.background="#232323";
        messagedisplay.textContent="Try Again!";
        }
        
    })
}

function changeColors(color){
    for(i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
function pickcolor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomcolors(num)
{
    var arr=[];
   for(i=0;i<num;i++)
   {
      arr.push(randomColor())
   }
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r+ ", " + g+ ", " + b+ ")"

}