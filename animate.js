document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".intro", {duration: 2, y: -50, opacity: 0});
    
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 1.5,
            y: 30,
            opacity: 0
        });
    });
});
