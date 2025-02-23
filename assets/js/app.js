const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const info = document.querySelector(".info");
const header = document.querySelector(".header");
const headerUl = document.querySelector("#navbar")
const hero = document.querySelector("#hero");
const logo = document.querySelector('.logo');
const iconsContainer = document.querySelector(".icons");  
const infoContainer = document.querySelector(".infoTwo"); 
const heroContainer = document.querySelector("#hero .container");
const mainContainer = document.querySelector(".custom-section .container .row");
const projectsContainer = document.querySelector(".projects-section .container .row");
const swiperWrapper1 = document.querySelectorAll(".swiper.mySwiper")[0].querySelector(".swiper-wrapper");
const testimonialContainer = document.querySelector(".testimonial-section .container .row");
const row = document.querySelector(".services-section .container .row");
const sectionContainer = document.querySelector(".project-idea-section .container .have");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        nav.style.display = 'block'  
        console.log(nav);

    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


const navMenu = [
    {
        title: "Home",
        id: 1,
        link: "/home",

    },
    {
        title: "Service",
        id: 2,
        link: "/service"

    },
    {
        title: "Projects",
        id: 3
    },
    {
        title: "About",
        id: 4,
    },
    {
        title: "Client",
        id: 5
    },
    {
        title: "Contact",
        id: 6
    }
]

logo.innerHTML = `<a href="#"><img src="./assets/image/logo.png" class="logo" alt="logo"></a>`
navMenu.map(item => (
    headerUl.innerHTML += `<li key=${item.id}><a class="active" href="puffs.html">${item.title}</a></li>`
))
header.innerHTML += ' <button class="btn" onclick="openWhatsApp()">Discuss for Projects</button> ';

function openWhatsApp() {
    window.open("https://wa.me/994997595777", "_blank");
}

const imageData = [
    { id: 1, img: "./assets/icons/Vector.png", link: "https://linkedin.com" },
    { id: 2, img: "./assets/icons/facebook.png", link: "https://facebook.com" },
    { id: 3, img: "./assets/icons/twit.icon.png", link: "https://twitter.com" },
    { id: 4, img: "./assets/icons/Youtube.png", link: "https://youtube.com" }
];

imageData.forEach((item) => {
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");
    iconDiv.innerHTML = `<img src="${item.img}" alt="Icon ${item.id}">`;

    // Kliklənən zaman linkə yönləndirir
    iconDiv.addEventListener("click", () => {
        window.open(item.link, "_blank");
    });

    iconsContainer.appendChild(iconDiv);
});

const infoData = [
    { id: 1, icon: "fa-phone", text: "+994 99 75 95 777", link: "https://wa.me/994997595777" },
    { id: 2, icon: "fa-paper-plane", text: "eliyevk384@gmail.com", link: "mailto:eliyevk384@gmail.com" },
    { id: 3, icon: "fa-location-dot", text: "Badamdar", link: "https://www.google.com/maps/search/?api=1&query=Badamdar,Baku" }
];

infoData.forEach((item, index) => {
    const element = `
        <div class="infoTwo row">
        <a href="${item.link}" target="_blank">
        <i class="fa-solid ${item.icon}"></i><span>${item.text}</span>
            </a>
        </div>
    `;

    if (index === 0) {
        infoContainer.innerHTML += element; // Telefon nömrəsi `icons` div-inə gedir
    } else {
        infoContainer.innerHTML += element; // Email və ünvan `infoTwo` div-inə gedir
    }
});


// infoData.map((item) => {
//     infoContainer.innerHTML += `
//         <div>
//             <i class="fa-solid ${item.icon}"></i><span>${item.text}</span>
//         </div>
//     `;
// });

const heroData = {
    title: "This is your designer",
    name: "Esther Howard",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    buttonText: "Discuss for Projects",
    portfolioText: "View Portfolios",
    images: [
        { id: 1, src: "./assets/image/Frame 12250.png", alt: "Main Image" },
        { id: 2, src: "./assets/image/foto-man.png", alt: "Secondary Image" }
    ]
};

// Hero sekmesini dinamik olaraq əlavə edirik
heroContainer.innerHTML = `
    <div class="row main flex-wrap">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="text">
                <h2>${heroData.title}<br><h3 class="est">${heroData.name}</h3></h2>
                <h5>${heroData.description}</h5>
                <button class="btn btn2" onclick="openWhatsApp()">${heroData.buttonText}</button>
                <span>${heroData.portfolioText}</span>
                <span><i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="imageOwe">
                <img src="${heroData.images[0].src}" alt="${heroData.images[0].alt}">
            </div>
            <div class="imageTwo">
                <img src="${heroData.images[1].src}" alt="${heroData.images[1].alt}">
            </div>
        </div>
    </div>
`;
const cardData = [
    {
        id: 1,
        image: "./assets/image/hover.png",
        logo: "./assets/icons/mark_email_unread.png",
        title: "Email marketing",
        description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit.`
    },
    {
        id: 2,
        image: "./assets/image/hover.png",
        logo: "./assets/icons/storefront.png",
        title: "Market analysis",
        description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit.`
    },
    {
        id: 3,
        image: "./assets/image/hover.png",
        logo: "./assets/icons/query_stats.png",
        title: "Keyword research",
        description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit.`
    }
];

// Kartları dinamik olaraq əlavə edirik
cardData.map((card) => {
    mainContainer.innerHTML += `
        <div class="col-lg-4 col-md-6">
            <div class="cart">
                <div class="text-center">
                    <img class="imgP" src="${card.image}" alt="foto">
                    <img style="margin-left: 20px;" src="${card.logo}" alt="logo">
                </div>
                <h4>${card.title}</h4>
                <div class="border"></div>
                <p>${card.description}</p>
            </div>
        </div>
    `;
});

const projectsData = [
    {
        id: 1,
        imageX: "./assets/image/Rectangle 68.png",
        imageY: "./assets/icons/webhook.png",
        title: "Digital branding",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        buttonText: "Discuss for Projects",
        subtImage: "./assets/image/Subtract.png"
    },
    {
        id: 2,
        imageX: "./assets/image/Rectangle 68.png",
        imageY: "./assets/icons/1.png",
        title: "Creative solutions",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        buttonText: "Discuss for Projects",
        subtImage: "./assets/image/Subtract.png"
    },
    {
        id: 3,
        imageX: "./assets/image/Rectangle 68.png",
        imageY: "./assets/icons/2.png",
        title: "Marketing solutions",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        buttonText: "Discuss for Projects",
        subtImage: "./assets/image/Subtract.png"
    },
    {
        id: 4,
        imageX: "./assets/image/Rectangle 68.png",
        imageY: "./assets/icons/3.png",
        title: "Business analytics",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        buttonText: "Discuss for Projects",
        subtImage: "./assets/image/Subtract.png"
    },
    {
        id: 5,
        imageX: "./assets/image/Rectangle 68.png",
        imageY: "./assets/icons/4.png",
        title: "UI & UX Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        buttonText: "Discuss for Projects",
        subtImage: "./assets/image/Subtract.png"
    },
    {
        id: 6,
        imageX: "./assets/image/Rectangle 68.png",
        imageY: "./assets/icons/6.png",
        title: "Photography",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        buttonText: "Discuss for Projects",
        subtImage: "./assets/image/Subtract.png"
    }
];

// Kartları dinamik olaraq əlavə edirik
projectsData.map((project) => {
    projectsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6">
            <div class="cart2 text-center">
                <div class="text-center iconsT">
                    <img class="imgX" src="${project.imageX}" alt="foto">
                    <img class="imgY" src="${project.imageY}" alt="logo">
                </div>
                <h4>${project.title}</h4>
                <div class="border"></div>
                <p>${project.description}</p>
                <button class="btn3">${project.buttonText} <span><i class="fa-solid fa-arrow-right"></i></span></button>
                <div class="subt"><img src="${project.subtImage}" alt=""></div>
            </div>
        </div>
    `;
});

const testimonialData = {
    starImages: [
        { id: 1, src: "./assets/image/star.png" },
        { id: 2, src: "./assets/image/unsplash_RIt88XBR3G0.png" },
        { id: 3, src: "./assets/image/Group 47448.png" }
    ],
    quote: "“Service is good and I recommend”",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br><br>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br><br>Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    imgSrc: "./assets/image/image 50.png",
    starImgSrc: "./assets/image/star2.png"
};

// Yuxarıdakı məlumatlarla yeni HTML elementi yaradacağıq
const testimonialHtml = `
    <div class="col-lg-4 col-12">
        <div class="star">
            ${testimonialData.starImages.map(star => `<img class="star${star.id}" src="${star.src}" alt="">`).join('')}
        </div>
    </div>
    <div class="col-lg-7 col-12">
        <div class="text2">
            <img class="hov" src="./assets/image/hover.png" alt="">
            <h4>${testimonialData.quote}</h4>
            <p>${testimonialData.description}</p>
            <div style="margin-top: 40px;">
                <img src="${testimonialData.imgSrc}" alt="">
            </div>
            <img class="hov2" src="${testimonialData.starImgSrc}" alt="">
        </div>
    </div>
`;

testimonialContainer.innerHTML = testimonialHtml;

const swiperData1 = [
    "./assets/image/prj-1.png",
    "./assets/image/prj-2.png",
    "./assets/image/prj-4.png",
    "./assets/image/prj-3.png",
    "./assets/image/prj-4.png",
    "./assets/image/prj-1.png",
    "./assets/image/prj-2.png",
    "./assets/image/prj-5.png",
    "./assets/image/prj-3.png"
];

const swiperData2 = [
    "./assets/image/prj-3.png",
    "./assets/image/prj-5.png",
    "./assets/image/prj-2.png",
    "./assets/image/prj-4.png",
    "./assets/image/prj-2.png",
    "./assets/image/prj-1.png",
    "./assets/image/prj-2.png",
    "./assets/image/prj-5.png",
    "./assets/image/prj-3.png"
];

swiperData1.forEach(src => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    slide.appendChild(img);
    swiperWrapper1.appendChild(slide);
});

// İkinci swiper-ə şəkil əlavə etmək
const swiperWrapper2 = document.querySelectorAll(".swiper.mySwiper")[1].querySelector(".swiper-wrapper");

swiperData2.forEach(src => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    slide.appendChild(img);
    swiperWrapper2.appendChild(slide);
});

const serviceData = [
    {
        imgSrc: "./assets/image/foto1.png",
        title: "UI & UX Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        hoverImgSrc: "./assets/image/hover 7.png"
    },
    {
        imgSrc: "./assets/image/foto2.png",
        title: "UI & UX Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        hoverImgSrc: "./assets/image/hover 7.png"
    },
    {
        imgSrc: "./assets/image/foto3.png",
        title: "UI & UX Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        hoverImgSrc: "./assets/image/hover 7.png"
    },
    {
        imgSrc: "./assets/image/foto4.png",
        title: "UI & UX Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        hoverImgSrc: "./assets/image/hover 7.png"
    }
];

serviceData.forEach(service => {
    const col = document.createElement("div");
    col.classList.add("col-lg-3", "col-md-6", "col-sm-12", "col-12");

    col.innerHTML = `
        <div>
            <div class="group">
                <img class="imgK" src="${service.hoverImgSrc}" alt="">
                <img class="imgT Y-img" src="${service.imgSrc}" alt="">
            </div>
            <div class="group2">
                <h2 class="ui">${service.title}</h2>
                <p>${service.description}</p>
            </div>
        </div>
    `;

    row.appendChild(col);
});

const projectIdeaData = {
    imageSrc: "./assets/image/hover-foto.png",
    planeImageSrc: "./assets/image/paper plane.png",
    title: "Have any project idea?",
    description: "Amet minim mollit non deserunt ,<br> ullamco est sit aliqua dolor do amet sint.",
    buttonText: "Contact Now",
    telegramLink: "https://t.me/+994997595777"
};

// Dinamik HTML əlavə edirik
sectionContainer.innerHTML = `
    <img class="have2" src="${projectIdeaData.imageSrc}" alt="">
    <div class="have3 row">
        <div>
            <div><img src="${projectIdeaData.planeImageSrc}" alt=""></div>
            <span>
                <h2 style="color: aliceblue;">${projectIdeaData.title}</h2>
                <p style="color: #E6E6E682;">${projectIdeaData.description}</p>
            </span>
        </div>
        <div><a href="${projectIdeaData.telegramLink}" target="_blank"><button class="btn">${projectIdeaData.buttonText}</button></a></div>
    </div>
`;

const footerData = {
    logoSrc: "./assets/image/logo.png",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    socialLinks: [
        { icon: "./assets/icons/Vector.png", link: "https://linkedin.com" },
        { icon: "./assets/icons/facebook.png", link: "https://facebook.com" },
        { icon: "./assets/icons/twit.icon.png", link: "https://twitter.com" },
        { icon: "./assets/icons/Youtube.png", link: "https://youtube.com" }
    ],
    quickLinks: [
        "Home",
        "Service",
        "Projects",
        "About",
        "Client",
        "Contact"
    ],
    importantLinks: [
        "Career",
        "Terms & Conditions",
        "Privacy Policy",
        "Cookies Policy",
        "Social Work"
    ],
    contacts: {
        phone: "+994 99 759 57 77",
        email: "eliyevk384@gmail.com",
        address: "Badamdar"
    },
    website: "designer"
};


// Dinamik HTML-ə əlavə edəcəyimiz konteynerlər
document.getElementById("logo").src = footerData.logoSrc;
document.getElementById("description").innerHTML = footerData.description;

// Sosial linklər
const socialIcons = footerData.socialLinks.map(social => 
    `<div class="icon">
        <a href="${social.link}" target="_blank">
            <img src="${social.icon}" alt="icon">
        </a>
    </div>`
).join('');
document.getElementById("social-icons").innerHTML = socialIcons;

// Quick links
const quickLinks = footerData.quickLinks.map(link => 
    `<div><a class="pages" href="#"><strong>${link}</strong></a></div>`
).join('');
document.getElementById("quick-links").innerHTML = quickLinks;

// Important links
const importantLinks = footerData.importantLinks.map(link => 
    `<div><a class="pages" href="#"><strong>${link}</strong></a></div>`
).join('');
document.getElementById("important-links").innerHTML = importantLinks;

{/* // Contact məlumatları */}
document.getElementById("phone-number").innerHTML = `<i class="fa-solid fa-phone"></i><strong style="margin-left: 10px;">${footerData.contacts.phone}</strong>`;
document.getElementById("email").innerHTML = `<i class="fa-solid fa-paper-plane"></i><strong style="margin-left: 10px;">${footerData.contacts.email}</strong>`;
document.getElementById("address").innerHTML = `<i class="fa-solid fa-location-dot"></i><strong style="margin-left: 15px;">${footerData.contacts.address}</strong>`;

// Copyright məlumatı
const currentYear = new Date().getFullYear();
document.getElementById("footer-left").innerHTML = `Copyright © ${currentYear} ${footerData.website}. All Rights Reserved.`;

document.getElementById('phone-number').innerHTML = `<a href="https://wa.me/+994997595777" target="_blank">${footerData.contacts.phone}</a>`;
document.getElementById('email').innerHTML = `<a href="mailto:${footerData.contacts.email}">${footerData.contacts.email}</a>`;
document.getElementById('address').innerHTML = `<a href="https://www.google.com/maps?q=${footerData.contacts.address},Baku" target="_blank">${footerData.contacts.address}, Baku</a>`;


