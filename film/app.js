const arrows = document.querySelectorAll(".arrow"); /*1+ tane var*/
const movieLists = document.querySelectorAll(".movie-list"); /*movie-listlere ulaşma*/

arrows.forEach((arrow, i) => {
  /*okların her birini seçmek için, i index bulmak için*/
  let clickCounter = 0;
  const imageItem =movieLists[i].querySelectorAll("img").length; /*kaç resim var?*/
  arrow.addEventListener("click", function () {
    /*tıklanılan oku bulmak için */ 
    clickCounter++;
    if (imageItem - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = 'translateX(${(clickCounter * -300)}px)';
      /*"translateX(-300px)" tıkladığımda yatayda hareket istiyorum(270+30)*/
    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});

