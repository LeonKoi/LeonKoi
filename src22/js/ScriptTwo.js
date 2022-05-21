"use strict";


/*Burger menu для Логотипа*/
$(document).ready(function(){
if (document.documentElement.clientWidth < 470  ) {

let btn = document.getElementById('btn')

var x=true
  btn.addEventListener('click',  function(){if (x) {document.getElementById("nav").setAttribute("style", "display: block; opacity:1; max-height: 100%;");x=false} else { document.getElementById("nav").setAttribute("style", "display: none; opacity:0; max-height: 100%;");x=true}});

 };
 
 });

/*Анимация меню (все скрытые эдементы задействуються с тайфмером:)*/
$(document).ready(function(){

 $('.menu div').hide().each(function(i){
  (function(e, i){
    setTimeout(function() {
       e.fadeIn(600);
    }, 600+300*i); 
  })($(this), i);
});

 });




$(document).ready(function() {
  if (document.documentElement.clientWidth > 995  ) {
  $('#btn').click(function(){
    document.location.href = "index.html";
    
  });
   };
});






/*Предолжения обучения*/
/*Анимация новостей*/
$(document).ready(function() {
  setTimeout((function() {
    let e = new IntersectionObserver((function(e) {
      e.forEach((e => {
        e.isIntersecting && e.target.classList.add("show_animee");
      }));
    }), {
      threshold: [.7]
    });
    $("._animee").each(((t, n) => {
      e.observe(n);
    }))
  }), 700);
 });








/*О нас цифры------------------------------------------------------------------------2*/

/*Статистика*/ 

$(document).ready(function(){
let options = {thresgold: [0.5]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.GGGR');
  elements.each((i,el) => {
  	 observer.observe(el);
  });
function onEntry (entry){
	  entry.forEach(change => {
	  	if (change.isIntersecting){
	  		change.target.classList.add('lines');
	  	}
	  });
}


});

/*Статистика 	*/ 
$(document).ready(function(){
	$(function() {
		var target_block = $('.statistic-counter'); // Ищем блок 
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				console.log( "Привет");
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				$({numberValue: 0}).animate({numberValue: 900}, {
					duration: 3500, // Продолжительность анимации, миллисекунд 
					step: function(val) {
						$('#liness1').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
					}	
				});	
			}	
		});	
	});

$(function() {
		var target_block = $('#liness2'); // Ищем блок 
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				$({numberValue: 0}).animate({numberValue: 1.0e+6}, {
					duration: 3500, // Продолжительность анимации, миллисекунд 
					step: function(val) {
						$('#liness2').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
					}	
				});	
			}	
		});	
	});
$(function() {
		var target_block = $('#liness3'); // Ищем блок 
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				$({numberValue: 0}).animate({numberValue: 240}, {
					duration: 3500, // Продолжительность анимации, миллисекунд 
					step: function(val) {
						$('#liness3').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
					}	
				});	
			}	
		});	
	});


});














/*Проверка формы*/

document.querySelectorAll(".load_img").forEach((e => observer1.observe(e))), document.addEventListener("DOMContentLoaded", (function() {
  const e = document.getElementById("form");

  function t(e) {
    e.classList.add("_error")
  }

  function n(e) {
    e.classList.remove("_error")
  }


  function o(e) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)
  }
  e.addEventListener("submit", (async function(l) {
    l.preventDefault();
    let c = function(e) {
        let l = 0,
          c = document.querySelectorAll("._req");
        for (let e = 0; e < c.length; e++) {
          const s = c[e];
          n(s), s.classList.contains("_email") ? o(s) && (t(s), l++) : "" === s.value && (t(s), l++)
        }
        return l
      }(),
      s = new FormData(e);
    if (0 === c) {
      e.classList.add("_send");
      let t = await fetch("php/sendmail.php", {
        method: "POST",
        body: s
      });
      if (t.ok) {
        let n = await t.json();
        alert(n.message), e.reset(), e.classList.remove("_send")
      } else alert("Ошибка отправки формы."), e.classList.remove("_send")
    } else alert("Заполните поля формы.")
  }))
}));
const popupLinks = document.querySelectorAll(".popup-link"),
  body = document.querySelector("body"),
  lockPadding = document.querySelectorAll(".lock-padding");
let unlock = !0;
const timeout = 800;
if (popupLinks.length > 0)
  for (let e = 0; e < popupLinks.length; e++) {
    const t = popupLinks[e];
    t.addEventListener("click", (function(e) {
      const n = t.getAttribute("href").replace("#", "");
      popupOpen(document.getElementById(n)), e.preventDefault()
    }))
  }
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0)
  for (let e = 0; e < popupCloseIcon.length; e++) {
    const t = popupCloseIcon[e];
    t.addEventListener("click", (function(e) {
      popupClose(t.closest(".popup")), e.preventDefault()
    }))
  }

function popupOpen(e) {
  if (e && unlock) {
    var t = document.querySelector(".popup.open");
    t ? popupClose(t, !1) : bodyLock(), e.classList.add("open"),e.style.display = "block" , e.addEventListener("click", (function(e) {
      e.target.closest(".popup-content") || popupClose(e.target.closest(".popup"))
    }))
  }
}

function popupClose(e, t = !0) {
  unlock && (e.classList.remove("open"), t && bodyUnLock())
}

function bodyLock() {
  const e = window.innerWidth - body.offsetWidth + "px";
  if (lockPadding.length > 0)
    for (let t = 0; t < lockPadding.length; t++) {
      lockPadding[t].style.paddingRight = e
    }
  body.style.paddingRight = e, body.classList.add("lock"), unlock = !1, setTimeout((function() {
    unlock = !0
  }), 800)
}

function bodyUnLock() {
  setTimeout((function() {
    for (let e = 0; e < lockPadding.length; e++) {
      lockPadding[e].style.paddingRight = "0px"
    }
    body.style.paddingRight = "0px", body.classList.remove("lock")
  }), 800), unlock = !1, setTimeout((function() {
    unlock = !0
  }), 800)
}
document.addEventListener("keydown", (function(e) {
  if (27 === e.which) {
    popupClose(document.querySelector(".popup.open"))
  }
})), window.addEventListener("DOMContentLoaded", (function() {
  [].forEach.call(document.querySelectorAll(".tel"), (function(e) {
    var t;

    function n(e) {
      e.keyCode && (t = e.keyCode), this.selectionStart < 3 && e.preventDefault();
      var n = "+7 (___) ___ ____",
        o = 0,
        l = n.replace(/\D/g, ""),
        c = this.value.replace(/\D/g, ""),
        s = n.replace(/[_\d]/g, (function(e) {
          return o < c.length ? c.charAt(o++) || l.charAt(o) : e
        })); - 1 != (o = s.indexOf("_")) && (o < 5 && (o = 3), s = s.slice(0, o));
      var i = n.substr(0, this.value.length).replace(/_+/g, (function(e) {
        return "\\d{1," + e.length + "}"
      })).replace(/[+()]/g, "\\$&");
      (!(i = new RegExp("^" + i + "$")).test(this.value) || this.value.length < 5 || t > 47 && t < 58) && (this.value = s), "blur" == e.type && this.value.length < 5 && (this.value = "")
    }
    e.addEventListener("input", n, !1), e.addEventListener("focus", n, !1), e.addEventListener("blur", n, !1), e.addEventListener("keydown", n, !1)
  }))
})), document.addEventListener("DOMContentLoaded", (function() {
  const e = document.getElementById("popup-form");

  function t(e) {
    e.classList.add("_error-form")
  }

  function n(e) {
    e.classList.remove("_error-form")
  }

  function o(e) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)
  }
  e.addEventListener("submit", (async function(l) {
    l.preventDefault();
    let c = function(e) {
        let l = 0,
          c = document.querySelectorAll("._req-form");
        for (let e = 0; e < c.length; e++) {
          const s = c[e];
          n(s), s.classList.contains("_email-form") ? o(s) && (t(s), l++) : "" === s.value && (t(s), l++)
        }
        return l
      }(),
      s = new FormData(e);
    if (0 === c) {
      e.classList.add("_send");
      let t = await fetch("php/sendmail.php", {
        method: "POST",
        body: s
      });
      if (t.ok) {
        let n = await t.json();
        alert(n.message), e.reset(), e.classList.remove("_send")
      } else alert("Ошибка отправки формы."), e.classList.remove("_send")
    } else alert("Заполните поля формы.")
  }))
}));








	


