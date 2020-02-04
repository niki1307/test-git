window.addEventListener("load", start)


function start(){
    const bubbles = document.querySelectorAll("#wrapper>div");
    console.log(bubbles)
    bubbles.forEach(bubble=> {
        const x = Math.random()*100;
        const y = Math.random()*100;
        const hue = Math.random()*360;
        bubble.style.background = "hsl("+hue+", 70%, 70%)"
    bubble.style.transform="translate("+x+"vw, "+y+"vh)";
    })
}

