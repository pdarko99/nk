const tl = gsap.timeline({ defaults: { ease: "power1.out" } });



tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });

tl.to(".slider", { y: "-100%", duration: 1.5, delay:0.2});

tl.to(".intro", {y:"-100%", duration: 1}, "-=1.5");

tl.fromTo(".content", {opacity:0}, {opacity:1, duration:1});

tl.fromTo(".main_pics", {opacity:0}, {opacity:1, duration:1}, "-=1");



