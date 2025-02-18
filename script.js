// Реєструємо ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".container");

sections.forEach((section) => {
    const title = section.querySelector("h2");
    const text = section.querySelector("p");

    // Початкові значення (контейнер м'яко з'являється при скролі)
    gsap.set(section, { opacity: 0, scale: 0.9, filter: "blur(10px)" });
    gsap.set(text, { opacity: 0, y: 20 });

    // Анімація появи контейнера при скролі
    const sectionAnimation = gsap.to(section, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset",
        },
    });

    // Анімація основного тексту при скролі
    const textAnimation = gsap.to(text, {
        y: 0,
        opacity: 0, // Легко видимий, але не повністю
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reset",
        },
    });

    // Ефекти при наведенні курсора
    section.addEventListener("mouseenter", () => {
        gsap.to(section, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        gsap.to(title, { opacity: 0, duration: 0.3, ease: "power2.out" }); // Заголовок зникає
        gsap.to(text, { opacity: 1, duration: 0.3, ease: "power2.out" }); // Основний текст повністю проявляється
        gsap.to(section, { boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)", duration: 0.3 }); // Неоновий ефект
    });

    section.addEventListener("mouseleave", () => {
        gsap.to(section, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(title, { opacity: 1, duration: 0.3, ease: "power2.out" }); // Заголовок повертається
        gsap.to(text, { opacity: 0, duration: 0.3, ease: "power2.out" }); // Основний текст трохи затемнюється
        gsap.to(section, { boxShadow: "none", duration: 0.3 });
    });
});

