var images = [
    '../assests/bg_images/GCE101_1.jpeg',
    '../assests/bg_images/mech1.jpeg',
    "../assests/bg_images/Untitled-1.jpg"
];
var text_1 = [
    "Welcome to gceb's",
    'say hello to mr',
    'cbcs - regulation 2019'
];
var text_2 = [
    'mark results',
    'mark results',
    'choice based choice system'
];

var img = document.querySelector('.sec_1_bg_img');
var text_main = document.querySelector('.text_main');
var text_sec = document.querySelector('.text_sec');
var i = 0;

var change = () => {
    i = (i + 1) % images.length;
    img.classList.remove('smooth-transition_1');
    text_main.classList.remove('smooth-transition');
    text_sec.classList.remove('smooth-transition');
    
    img.src = images[i];
    text_main.textContent = text_1[i];
    text_sec.textContent = text_2[i];

    void img.offsetWidth;
    void text_main.offsetWidth;
    void text_sec.offsetWidth;

    img.classList.add('smooth-transition_1');
    text_main.classList.add('smooth-transition');
    text_sec.classList.add('smooth-transition');
};

document.querySelector('.right').addEventListener('click',(e)=>{
    clearInterval(interval)
    change()
    interval =setInterval(change, 4000);
})


interval =setInterval(change, 5000);

var scrollIt = () =>{
    window.scrollTo({
        top:document.querySelector('.sec_2').offsetTop,
        behavior:'smooth'
    })
}
