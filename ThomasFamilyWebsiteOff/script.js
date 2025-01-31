document.addEventListener('mousemove', (event) => {
    const poster = document.getElementById('poster');
    const { clientX, clientY } = event;

    const { innerWidth, innerHeight } = window;

    const xOffset = (clientX / innerWidth - 0.5) * 15; 
    const yOffset = (clientY / innerHeight - 0.5) * 15;

    poster.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    poster.style.transition = 'transform 0.1s ease'; // adjust for smoothness :/
});


const scrollDown = document.getElementById('scroll-down');
let wentDown = false;

scrollDown.addEventListener('click', () => {
    if(wentDown) {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});

        scrollDown.classList.add('fadeOut');
        setTimeout(() => {
            scrollDown.classList.remove('fadeOut');
            scrollDown.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
        }, 500);
        wentDown = false;
    } else {
        window.scrollTo({top: document.body.scrollTop, behavior: 'smooth'});
        scrollDown.classList.add('fadeOut');
        setTimeout(() => {
            scrollDown.classList.remove('fadeOut');
            scrollDown.innerHTML = `<i class="fa-solid fa-angle-down"></i>`
        }, 500);
        wentDown = true;
    }


})



const waitToRender = document.getElementById('waitToRender');
const loader = document.getElementById('loader');
const loaderImage = document.getElementById('thomasLogo');

function revealThePage() {
    console.log('revealing page')
    loader.style.animation = 'reveal 4s ease';

    setTimeout(() => {
        loader.style.display = 'none';
        loaderImage.style.display = 'none';
    }, 5000);
}

function loaderAnimation() {
    loader.style.animation = 'load 5s ease'
    loaderImage.style.animation = 'image 3s ease reverse'
    
    setTimeout(() => {
            revealThePage()
    }, 4250);
    // loaderText.style.keyFrameNode = '1 0 4 8 8 1 2 0 0 0 0 0 1'
}

function beginLoading() {
        loaderAnimation()
}

beginLoading();