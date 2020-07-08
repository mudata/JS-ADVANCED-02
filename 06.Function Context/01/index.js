function solve(){
   let x=document.getElementsByTagName("table")[0];
   let tbody=x.getElementsByTagName("tbody")[0];
   //console.log(tbody);
   tbody.addEventListener("click",function(e){
      let targerEl=e.target.parentElement;
      if(targerEl.style.backgroundColor==="rgb(65, 63, 94)"){
         targerEl.removeAttribute("style");
      }
      else{
         let a=document.querySelectorAll("td")
         //console.log(a[1].parentElement)
         a[1].parentElement.removeAttribute("style")
         a[2].parentElement.removeAttribute("style")
         a[3].parentElement.removeAttribute("style")
         a[4].parentElement.removeAttribute("style")
         a[5].parentElement.removeAttribute("style")
         a[6].parentElement.removeAttribute("style")
         a[7].parentElement.removeAttribute("style")
         targerEl.style.backgroundColor="rgb(65, 63, 94)";
      }
      

   });
}