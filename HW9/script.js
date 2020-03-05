  let div = document.createElement("div");
 function randomColor(){
        let colorRes = document.querySelectorAll('#content div').forEach(el=>{
          el.style.backgroundColor = '#'+Math.random().toString(14).slice(2,8);
             });
    return colorRes;
}

function generateBlocks(){
    for(let i = 0; i < 26; i++){
    let div = document.createElement("div");
    div.style.background = randomColor();
    content.append(div);
    }
}

function generateBlocksInterval(){
generateBlocks();
    function repeatSquare(){
      content.innerHTML = "";
        generateBlocks();
    }
    setInterval(() => {
        repeatSquare();
    }, 1000);
}

generateBlocksInterval();
