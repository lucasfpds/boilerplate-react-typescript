/* eslint-disable no-inner-declarations */
import $ from 'jquery';

  const canvas = document.getElementById('canvas1');
  console.log(canvas)

  if(canvas){
    $('ul a, .modalMenu a').click(function (e) {
      e.preventDefault();

      const id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
      $('html, body').animate(
        {
          scrollTop: targetOffset - 90,
        },
        1000
      );
    });

    const ctx = canvas.getContext('2d'); // CTX MEANS CONTEXT
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    let particleArray;

    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 100) * (canvas.width / 100),
    };
    window.addEventListener('mousemove', function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.speedX = this.directionX;
        this.speedY = this.directionY;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

        ctx.fillStyle = '#23043a';
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
          this.speedX = this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
          this.speedY = this.directionY;
        }
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }
        
        this.x += this.directionX;
        this.y += this.directionY;
        
        this.draw();
      }
    }


    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let distance =
            (particleArray[a].x - particleArray[b].x) *
              (particleArray[a].x - particleArray[b].x) +
            (particleArray[a].y - particleArray[b].y) *
              (particleArray[a].y - particleArray[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 100000;
            
            ctx.strokeStyle = 'rgba(255,255,255' + opacityValue + ', 0.2 )';
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    }


    function init() {
      particleArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles * 1.2; i++) {
        let size = Math.random() * 4 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;

        let color = 'white';
        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }


    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
      }
      connect();
    }
    init();
    animate();


    window.addEventListener('resize', function () {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.width / 80);
      init();
    });


    window.addEventListener('mouseout', function () {
      mouse.x = undefined;
      mouse.y = undefined;
    });


    const canvas2 = document.querySelector('.canvas');
    const ctx2 = canvas2.getContext('2d');
    ctx2.canvas.width = window.innerWidth;
    ctx2.canvas.height = window.innerHeight;

    let particlesArray = [];
    let hue = 0;

    window.addEventListener('resize', function () {
      canvas2.width = window.innerWidth;
      canvas2.height = window.innerHeight;
    });

    const mouse2 = {
      x: undefined,
      y: undefined,
    };

    window.addEventListener('click', function (event) {
      mouse2.x = event.x;
      mouse2.y = event.y;
      for (let i = 0; i < 10; i++) {
        particlesArray.push(new Particle2());
      }
    });

    canvas2.addEventListener('mousemove', function (event) {
      mouse2.x = event.x;
      mouse2.y = event.y;
      for (let i = 0; i < 80; i++) {
        particlesArray.push(new Particle2());
      }
    });

    class Particle2 {
      constructor() {
        this.x = mouse2.x;
        this.y = mouse2.y;
        this.size = Math.random() * 7 + 1;
        this.speedX = Math.random() * 5 - 1.5;
        this.speedY = Math.random() * 5 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx2.fillStyle = this.color;
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx2.fill();
      }
    }

    function handleParticle2s() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.3) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    }
    function animate2() {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      handleParticle2s();
      hue += 0.5;

      requestAnimationFrame(animate2);
    }
    animate2();

    const target = $('.anime');
    const header = $('header');

    const cases = $('.cases');
    const offset = ($(window).height() * 3) / 4;

    function animeScroll() {
      let documentTop = $(document).scrollTop();
      documentTop > 0
        ? header.addClass('minHeader')
        : header.removeClass('minHeader');

      target.each(function () {
        const $this = $(this);
        const itemTop = $this.offset().top;

        if (documentTop > itemTop - offset / 1) {
          $('.div-picture').addClass('slide-in-right');
          $('.apresentation>h1').addClass('slide-in-top');
          $('.apresentation>h3').addClass('slide-in-left');
          $('.apresentation>p').addClass('slide-in-left');
          $('.socialMedias>div').addClass('slide-in-bl');
          $('.buttonOne').addClass('slide-in-bottom1');
          $('.buttonTwo').addClass('slide-in-bottom2');
          $('.buttonThree').addClass('slide-in-bottom3');
          $('.buttonFour').addClass('slide-in-bottom4');
        }
      });
    }

    function animeScroll2(target) {
      let documentTop = $(document).scrollTop();
      const itemTop = target.offset().top;

      if (documentTop > itemTop - offset * 2) {
        $('.cases').addClass('slide-in-fwd-bottom');
      }
    }

    animeScroll();

    $(document).scroll(function () {
      animeScroll();
      animeScroll2(cases);
    });
  }