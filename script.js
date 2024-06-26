var A = gsap.timeline();

// Initial settings for elements
gsap.set(".a", { opacity: 1, y: 10 });
gsap.set("#right img", { opacity: 0, y: 10, scale: -1.9 });

// Timeline animations
A.from("#left", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut
})
.from("#right", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut
})
.from(".a", {
  opacity: 0,
  y: 0,
  delay: -1.5,  // Adjusting delay for proper overlap
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 0.2,
})
.to("#right img", {
  opacity: 1,
  y: 0,
  scale: 1,
  ease: Expo.easeInOut,
  duration: 2,
  delay: -2  // Adjusting delay for proper overlap
})
.from("#right img", {
  duration: 1.5,
  rotation: 360
});


