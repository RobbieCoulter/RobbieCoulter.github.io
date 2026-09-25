document.getElementById("btn-loop").onclick =(e) +> {
    const loopResult = document.getElementById("loop-result");

    for(let i = 0; i < 10; i++){
        let p= document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
        p.classList.add("special");
        p.onclick = () => {
            console.log('you clicked the ${i} 'th element' )
        };
    }
};