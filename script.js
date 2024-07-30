document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById('section-6');
    const text = document.getElementById('animate-text');
    const thinkText = document.getElementById('think-text');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Step 2: Move "think" to the right with smooth sliding
                gsap.to(thinkText, { x: '2.5em', duration: 5, ease: "power4.in" });

                // Step 3: Add "re" after "think" has moved
                setTimeout(() => {
                    const reText = document.createElement('span');
                    reText.id = "re-text";
                    reText.style.opacity = 0;
                    reText.innerText = 're';
                    text.insertBefore(reText, thinkText);

                    // Step 4: Smoothly fade in "re"
                    gsap.to(reText, { opacity: 1, duration: 3, ease: "power4.inOut" });
                }, 2000);

                observer.unobserve(section);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const footerBand = document.getElementById("footer-band");
    // const textAnimate = document.getElementById("text-animate");
    const animateHide = document.getElementById("animate-hide");
    const animateType = document.getElementById("animate-type");
    const menuContainer = document.getElementById("menu-container");

    // Detect when the footer comes into view
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove characters one at a time from textAnimate
                function removeCharacters() {
                    if (animateHide.textContent.length > 0) {
                        animateHide.textContent = animateHide.textContent.slice(1);
                        setTimeout(removeCharacters, 40);
                    } 
                }
                removeCharacters();

                // Animate the footer band to disappear from bottom to top
                gsap.to(footerBand, { height: 0, duration: 3, ease: "power4.inOut" });

                // Delay the animation by 2 seconds
                setTimeout(() => {
                    // Typewriter effect for " Requires CREO"
                    const text = " Requires CREO";
                    let index = 0;
                    function typeWriter() {
                        if (index < text.length) {
                            animateType.textContent += text.charAt(index);
                            index++;
                            setTimeout(typeWriter, 100);
                        }
                    }
                    typeWriter();
                }, 2000);

                // Animate the footer band to disappear from bottom to top
                gsap.to(footerBand, { height: 0, duration: 3, ease: "power4.inOut" });

                // Delay the animation by 2 seconds
                setTimeout(() => {
                    // Use GSAP to animate the element and make it visible
                    gsap.to(menuContainer, { opacity: 1, duration: 10, display: 'block', ease: "power4.inOut" });
                }, 2000);

                observer.unobserve(footer);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(footer);
});

document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const section4 = document.getElementById('section-4');
    const highlightX = document.querySelector('.highlightX');
    const highlightY = document.querySelector('.highlightY');

    // Detect when the section-4 comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Show and animate highlightX from left to right
                gsap.set(highlightX, { width: 0, visibility: 'visible' });
                gsap.to(highlightX, { width: '50%', duration: 2, ease: "power4.inOut" });

                // After highlightX animation, show and animate highlightY from top to bottom
                gsap.set(highlightY, { height: 0, visibility: 'visible', display: 'block' });
                gsap.to(highlightY, { height: '55%', duration: 2, ease: "power4.inOut", delay: 2 });

                observer.unobserve(section4);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section4);
});


document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const section4 = document.getElementById('section-5');
    const highlightX = document.querySelector('.highlight-invertX');
    const highlightY = document.querySelector('.highlight-invertY');

    // Detect when the section-4 comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // After highlightX animation, show and animate highlightY from top to bottom
                gsap.set(highlightY, { height: 0, visibility: 'visible', display: 'block'});
                gsap.to(highlightY, { height: '55%', duration: 2, ease: "power4.inOut"});

                // Show and animate highlightX from left to right
                gsap.set(highlightX, { width: 0, visibility: 'visible' });
                gsap.to(highlightX, { width: '50%', duration: 2, ease: "power4.inOut", delay: 2  });

                observer.unobserve(section4);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section4);
});