/* ==========================================================
   SAKIB PORTFOLIO
   STEP 3 - PART 1
   Loader • Cursor • Navbar • Smooth Scroll • Reveal
========================================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader-wrapper");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }

});

/* ================= Cursor Glow ================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* ================= Sticky Navbar ================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ================= Smooth Scroll ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ================= Scroll Reveal ================= */

const revealItems = document.querySelectorAll(

    ".skill-card,.timeline-item,.portfolio-card,.stat-box,.video-card,.about-info div"

);

const revealOnScroll = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const trigger = window.innerHeight - 100;

        if (top < trigger) {

            item.classList.add("fade-up", "show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ================= Mobile Menu ================= */

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

/* ================= Active Navigation ================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================================
   STEP 3 - PART 2
   Counter • Contact • Back To Top • Typing • Lightbox
========================================================== */

/* ================= Counter Animation ================= */

const counters = document.querySelectorAll(".stat-box h2");

const animateCounter = (counter) => {

    const text = counter.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    if (isNaN(number)) return;

    let count = 0;

    const speed = Math.max(10, Math.floor(number / 80));

    const update = () => {

        count += speed;

        if (count >= number) {

            counter.innerText = text;

        } else {

            const suffix = text.replace(/[0-9]/g, "");

            counter.innerText = count + suffix;

            requestAnimationFrame(update);

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));

/* ================= Contact Form ================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (!input.value.trim()) {

                valid = false;

                input.style.borderColor = "#ff4d4d";

            } else {

                input.style.borderColor = "";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been received.");

            contactForm.reset();

        }

    });

}

/* ================= Back To Top ================= */

const topButton = document.createElement("button");

topButton.innerHTML = "?";

topButton.className = "back-to-top";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
right:30px;
bottom:110px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#2563EB;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(37,99,235,.35);
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ================= Typing Effect ================= */

const typingTarget = document.querySelector(".hero-content h2");

if (typingTarget) {

    const text = typingTarget.innerText;

    typingTarget.innerHTML = "";

    let i = 0;

    const typing = () => {

        if (i < text.length) {

            typingTarget.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 70);

        }

    };

    setTimeout(typing, 500);

}

/* ================= Portfolio Hover ================= */

const portfolioCards = document.querySelectorAll(".portfolio-card");

portfolioCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/* ================= Skill Hover ================= */

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.boxShadow = "0 0 35px rgba(37,99,235,.35)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.boxShadow = "";

    });

});

/* ================= Video Card Click ================= */

const videos = document.querySelectorAll(".video-card");

videos.forEach(video => {

    video.addEventListener("click", () => {

        video.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

});
/* ==========================================================
   STEP 3 - PART 3
   Final Effects & Enhancements
========================================================== */

/* ================= Current Year ================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Sams Uddin Sakib. All Rights Reserved.`;

}

/* ================= Active Button Ripple ================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/* ================= Simple Fade In ================= */

const fadeElements=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{

threshold:.15

});

fadeElements.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all .8s ease";

sectionObserver.observe(section);

});

/* ================= Image Hover Zoom ================= */

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".4s";

img.style.transform="scale(1.03)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* ================= Console Message ================= */

console.log("%cWelcome to Sakib Portfolio",
"color:#2563EB;font-size:20px;font-weight:bold;");

console.log("Designed with ?? using HTML, CSS & JavaScript");

/* ================= Disable Right Click (Optional) ================= */

// Uncomment if needed
// document.addEventListener("contextmenu",e=>e.preventDefault());

/* ================= Keyboard Shortcut ================= */

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

