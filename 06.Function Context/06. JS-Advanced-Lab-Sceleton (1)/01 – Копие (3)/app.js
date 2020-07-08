function solve() {
    let dropdown1=document.getElementById("dropdown-ul")
        window.addEventListener("click", function(e){
            if(e.target.id==="dropdown"){
                if(dropdown1.style.display==="block"){
                    dropdown1.style.display="none";
                    document.getElementById("box").removeAttribute("style");
                }
                else{
                    dropdown1.style.display="block";
                }
            }
            if(e.target.closest("#dropdown-ul")){
                const color=e.target.innerText;
                document.getElementById("box").style.backgroundColor=color;
                document.getElementById("box").style.color="black";
            }
            //document.getElementById("dropdown-ul").style.display="hidden";
        });
}