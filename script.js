$(function(){
    $(document).scroll(function(){
        var $nav = $("#nb1");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  
    });
  });


  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  
  // $("#typed").typed({
  //   strings: ["Hello world.", "Check this out.", "Add any text you like here."],
  //   typeSpeed: 100,
  //   startDelay: 0,
  //   backSpeed: 60,
  //   backDelay: 2000,
  //   loop: true,
  //   cursorChar: "|",
  //   contentType: 'html'
  // });

  const text = ["ECO","Electronics and Communication Student's Organisation!!"];
let count = 0;
let index = 0;
let forward = 0;
let currentText = '';
let letter = '';

(function type(){

    if(index==0){
      document.getElementById("typer").classList.add("typing");
    }
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    if(forward === 0){
    letter = currentText.slice(0,++index);
    }
    if(forward === 1){
    letter = currentText.slice(0,--index);
    }
    document.querySelector(".typing").textContent = letter;
    if(index==0){
      document.getElementById("typer").classList.toggle("typing");
    }
    if(letter.length === currentText.length){
        forward = 1;
    }
    if((forward === 1) && (index === 0)){
        count++;
        forward = 0;
        // index=0;
    }

    setTimeout(type,200);

})();

$(function activeLink(){
  $(document).on('click','ul li a',function(){
      $('ul li a').removeClass('activeNav');
      $(this).addClass('activeNav');
  
  });
});

        // let section = document.querySelectorAll('.navScroll');
        // let lists = document.querySelectorAll('.list');
        // function activeLink(li) {
        //     lists.forEach((item) => item.classList.removeClass('activeNav'));
        //     li.classList.addClass('activeNav');
        // }
        // lists.forEach((item) =>
        //     item.addEventListener('click', function(){
        //         activeLink(this);
        //     }));

        // window.onscroll = () => {
        //     section.forEach(sec => {
        //         let top = window.scrollY;
        //         let offset = sec.offsetTop;
        //         let height = sec.offsetHeight;
        //         let id = sec.getAttribute('id');

        //         if (top >= offset && top < offset + height) {
        //             const target = document.querySelector(`[href='#${id}']`).parentElement;
        //             activeLink(target);
        //         }
        //     })
        // };

let disp = document.getElementsByClassName("unhide");
let viewMore = document.getElementById("viewMore");

viewMore.addEventListener("click", function(){
  for(let i=0; i<disp.length; i++){
    disp[i].classList.remove("hide");
    viewMore.classList.add('hide');
  }

});

viewLess.addEventListener("click", function(){
  for(let i=0; i<=disp.length; i++){
    disp[i].classList.add("hide");
    viewLess.classList.add("hide");
    viewMore.classList.remove("hide")
  }

});