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



/*Анимация новостей*/
$(document).ready(function() {
	setTimeout((function() {
		let e = new IntersectionObserver((function(e) {
			e.forEach((e => {
				e.isIntersecting && e.target.classList.add("show_anime");
			}));
		}), {
			threshold: [.7]
		});
		$("._anime").each(((t, n) => {
			e.observe(n);
		}))
	}), 700);
 });



$(document).ready((function() {
	$(".slider-2").slick({
		arrows: !1,
		dots: !0,
		infinite: !0,
		speed: 1e3,
		autoplay:true,
		autoplaySpeed:2000,
	})
}));


$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed:1500,
		autoplaySpeed:1800,
		responsive:[
              {
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});


/*Открытие картинок студентов*/
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'}); /*Модальное окно */
});








/*Привет мне из input*/
$(document).ready(function(){
$('#inputName').keyup(function(){
	$("#hello").text("Привет: "+ $(this).val());
});
});




/*Сообщение мне(проверка)*/

document.querySelectorAll(".load_img").forEach((f => observer1.observe(f))), document.addEventListener("DOMContentLoaded", (function() {
	const f = document.getElementById("form");

	function t(f) {
		f.classList.add("_error")
	}

	function n(f) {
		f.classList.remove("_error")
	}


	function o(f) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(f.value)
	}
	f.addEventListener("submit", (async function(l) {
		l.preventDefault();
		let c = function(f) {
				let l = 0,
					c = document.querySelectorAll("._req");
				for (let f = 0; f < c.length; f++) {
					const s = c[f];
					n(s), s.classList.contains("_email") ? o(s) && (t(s), l++) : "" === s.value && (t(s), l++)
				}
				return l
			}(),
			s = new FormData(f);
		if (0 === c) {
			f.classList.add("_send");
			let t = await fetch("php/sendmail.php", {
				method: "POST",
				body: s
			});
			if (t.ok) {
				let n = await t.json();
				alert(n.message), f.reset(), f.classList.remove("_send")
			} else alert("Ошибка отправки формы."), f.classList.remove("_send")
		} else alert("Заполните поля формы.")
	}))
}));


$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();

		$.ajax({
			type:"POST",
			url:"php/send.php",
			data:$(this).serialize()
		}).done(function(){
			$(this).find("input").val("");
			alert("Отправлено!");
			$("form").trigger("reset");
		});
		return false;
	});
});














	
