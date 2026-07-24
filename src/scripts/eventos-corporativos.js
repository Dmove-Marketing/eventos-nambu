/* Scripts extraídos de eventos-corporativos.html */

// ---- Menu mobile (hamburguer) ----
(function(){
  var burger = document.getElementById('navBurger');
  var menu   = document.getElementById('navMobile');
  if (!burger || !menu) return;

  function toggle(open) {
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', !open);
  }

  burger.addEventListener('click', function() {
    toggle(!burger.classList.contains('is-open'));
  });

  // Fecha ao clicar em qualquer link do menu mobile
  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() { toggle(false); });
  });
})();

// ---- Carrossel ----
  (function(){
    var track=document.getElementById('gastroTrack');
    var step=function(){var item=track.querySelector('.carousel__item');return item?item.offsetWidth+22:340;};
    document.getElementById('gastroNext').addEventListener('click',function(){track.scrollBy({left:step(),behavior:'smooth'});});
    document.getElementById('gastroPrev').addEventListener('click',function(){track.scrollBy({left:-step(),behavior:'smooth'});});
  })();

  // ---- Reveal on scroll ----
  (function(){
    var els=document.querySelectorAll('.reveal');
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:.12});
    els.forEach(function(el){io.observe(el);});
  })();

  // ---- About Carousel ----
  (function(){
    var track = document.getElementById('aboutTrack');
    if (!track) return;
    var items = track.querySelectorAll('.about-carousel__item');
    var dots = document.querySelectorAll('.about-carousel__dot');
    var current = 0;
    var interval;

    function show(index) {
      items[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = index;
      items[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function next() {
      var nextIdx = (current + 1) % items.length;
      show(nextIdx);
    }

    function start() {
      interval = setInterval(next, 4000);
    }

    function stop() {
      clearInterval(interval);
    }

    dots.forEach(function(dot, idx) {
      dot.addEventListener('click', function() {
        stop();
        show(idx);
        start();
      });
    });

    start();
  })();