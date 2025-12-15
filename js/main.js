function createClock(){
    let now = new Date();

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds= now.getSeconds()

    hours = hours < 10 ? '0'+ hours:hours;
    minutes = minutes < 10 ? '0'+ minutes:minutes;
    seconds = seconds < 10 ? '0'+ seconds:seconds;


    document.getElementById("clock").innerHTML=`
    ${hours}:${minutes}:${seconds}`;
}
createClock()

setInterval(createClock,1000);









let barobar = document.getElementById('barobar')
let ochrish = document.getElementById('ochrish')
let backspaceBtn = document.getElementById('backspace'); // X tugmasi
let natija = document.getElementById('natija')

let buttons = document.querySelectorAll('button[data-val]')

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        natija.value += btn.dataset.val;


         if (val === '.') {
            // Agar natijada operator bo'lmasa va nuqta allaqachon bo'lsa, qo'shmaymiz
            if (!currentValue.includes('+') && !currentValue.includes('-') && !currentValue.includes('*') && !currentValue.includes('/') && currentValue.includes('.')) {
                return; 
            }
            // Agar operator bo'lsa, faqat oxirgi raqamda nuqta borligini tekshirish kerak bo'ladi
            // Ammo sodda eval tizimida shunchaki qo'shib ketsak ham ishlaydi, faqat sintaksis xatosi kelib chiqadi
        }
        natija.value += val;
    })
   
})

barobar.addEventListener('click',()=>{
    try{
        natija.value = eval(natija.value);
    }catch{
        natija.value= 'Error';
    }
})
ochrish.addEventListener('click',()=>{
    natija.value='';
})

backspaceBtn.addEventListener('click', () => {
    let currentExpression = natija.value;
    if (currentExpression.length > 0) {
        // Oxirgi belgisiz qolgan qismini qayta yuklaymiz
        natija.value = currentExpression.slice(0, -1);
    }
});




let showBtn = document.getElementById("show-btn");
let closeBtn = document.getElementById("close-btn");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");


// ======================================================
let removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showBtn.addEventListener("click", () => {
  removeHidden()
});

// ==================================================
let addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeBtn.addEventListener("click", () => {
  addHidden();
});

overlay.addEventListener("click", () => {
  addHidden();
});

//qisqaroq yozish uslubi
// showBtn.addEventListener("click",removeHidden);

//closeBtn.addEventListener("click",addHidden);

// overlay.addEventListener("click",addHidden);

// ============================================================
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    console.log("You are clicked escape");
    addHidden();
  }
});
