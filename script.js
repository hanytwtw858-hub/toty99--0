// سرعة تساقط مطر النيون الأصلي
let rainIntervalSpeed = 180;
let rainTimer;

function initNeonRain() {
    const rainContainer = document.getElementById("neon-rain");
    const items = ['❤️', '💖', '✨', '🎂', '🎁', '🎈'];
    const colors = ['#ff007f', '#b5179e', '#ff3333', '#ff66cc'];
    
    clearInterval(rainTimer);
    rainTimer = setInterval(() => {
        const drop = document.createElement("div");
        drop.classList.add("rain-drop");
        drop.innerText = items[Math.floor(Math.random() * items.length)];
        
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.color = colors[Math.color(Math.random() * colors.length)];
        drop.style.fontSize = Math.random() * 20 + 16 + "px";
        drop.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        rainContainer.appendChild(drop);
        setTimeout(() => drop.remove(), 5000);
    }, rainIntervalSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    initNeonRain();
});

// التحقق من بوابة تاريخ الميلاد
function checkDate() {
    const input = document.getElementById('birthdate').value.trim();
    const pageCard = document.getElementById('page1');
    
    if (input.includes('1') || input.includes('٠١') || input.includes('اغسطس') || input.includes('أغسطس') || input.includes('8')) {
        nextPage(2);
        startCounter();
    } else {
        document.getElementById('error-msg').style.display = 'block';
        pageCard.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => pageCard.style.animation = '', 500);
    }
}

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if(pageNumber === 6) {
        // إظهار الصفحة الختامية الكاملة الشاشة
        const finalPage = document.getElementById('page6');
        finalPage.style.display = 'flex';
        
        // زيادة جنونية في مطر القلوب ليصبح احتفالاً صاخباً ومبهراً!
        rainIntervalSpeed = 50; 
        initNeonRain();
    } else {
        document.getElementById('page' + pageNumber).classList.add('active');
    }
}

// دالة إرسال الأمنية مباشرة وسرياً إلى تيليجرام الخاص بك
function submitWish(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    // جلب النص المكتوب في مربع الرسالة
    const wishInput = document.querySelector('textarea[name="u_wish"]');
    const wishText = wishInput ? wishInput.value : '';
    
    // البيانات الخاصة بالبوت والتيلجرام الخاص بك
    const botToken = "8571764847:AAG1YpeP0cTDp0sRSEWU-rYCi9uCQnUYLnE"; 
    const chatId = "8026511855";
    const message = `✨ أمنية جديدة من مارينا:\n\n${wishText}`;

    // إرسال الرسالة في الخلفية إلى تيليجرام
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            chat_id: chatId, 
            text: message 
        })
    }).catch(error => {
        console.log("Error sending wish:", error);
    });

    // الانتقال الفوري للشاشة الأخيرة
    nextPage(6);
}

// تشغيل عداد الأيام
function startCounter() {
    const birthDate = new Date("August 1, 2004 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const difference = now - birthDate;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById("days-count").innerText = days.toLocaleString('ar-EG') + " ";
        document.getElementById("hours-count").innerText = hours.toLocaleString('ar-EG') + " ";
        document.getElementById("mins-count").innerText = minutes.toLocaleString('ar-EG') + " ";
    }, 1000);
}

// فرقعة البلالين
function popBubble(element, text) {
    element.style.transform = "scale(2.5)";
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
    
    const displayBox = document.getElementById("bubble-text");
    displayBox.innerText = text;
    displayBox.style.animation = 'fadeInBlock 0.4s ease';
}

// دالة الكتابة الحية
function typeWriter(text, elementId, speed, callback) {
    const element = document.getElementById(elementId);
    element.style.display = "block";
    element.innerHTML = ""; 
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function openMemory(cardElement, text) {
    cardElement.style.borderColor = "#7209b7";
    cardElement.style.boxShadow = "inset 0 0 10px #7209b7";
    cardElement.style.transform = "scale(0.95)";
    typeWriter(text, "memory-text", 35);
}

function openLetter() {
    document.getElementById("envelope-btn").style.display = "none";
    const longLetterText = "اطلعي ي ستي  ع اللي بعدو مكسل اكتب بصراحه . ❤️";
    
    typeWriter(longLetterText, "letter-text", 45, () => {
        document.getElementById("nav-to-wish").style.display = "block";
    });
}