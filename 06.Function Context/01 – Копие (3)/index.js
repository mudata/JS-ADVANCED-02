function getArticleGenerator(articles) {
   const content = document.getElementById("content")

   function showNext() {
      if(articles.length>0){
         const article = document.createElement("article");
         article.textContent = articles.shift();
         content.apendChild(article);
      }
      
   }
   return showNext;

}