// ScrollReveal Configuration
const sr = ScrollReveal({
    distance: '70px', // مسافة الحركة
    duration: 1500,   // مدة التأثير
    delay: 200,       // تأخير بين العناصر
    reset: true       // إعادة التأثير عند التمرير مجددًا
});

sr.reveal('.home-section .content', {
    origin: 'bottom', // تتحرك من الأسفل
    interval: 150
});

sr.reveal('.about-section .about-data', {
    origin: 'left', // تتحرك من اليسار
    interval: 150
});

sr.reveal('.about-section .about-img', {
    origin: 'right', // تتحرك من اليمين
    interval: 150
});

sr.reveal('.services .box', {
    origin: 'top', // تتحرك من الأسفل
    interval: 65
});

sr.reveal('.menu-section .menu-card', {
    origin: 'top', // تتحرك من الأسفل
    interval: 50
});

sr.reveal('.menu-section .menu-more-button', {
    origin: 'top', // تتحرك من الأعلى
    scale: 0.9,    // تصغير ثم تكبير
    interval: 50
});

sr.reveal('.staff-section .card', {
    origin: 'top', // تتحرك من الأسفل
    interval: 70
});