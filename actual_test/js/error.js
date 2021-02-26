const backToTop = document.getElementById('backtotop');

function checkScroll() {
    
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

} //여기 오류남 수정해야함

function moveBackToTop() {
    if (window.pageYOffset > 0) {

    
       window.scrollTo({top: 0, behavior: "smooth"})
    }
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);

//
function transformPrev(event) {
    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;
    const classList = slidePrev[i].parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementByTagName('li');

if(classList.clientWidth > (liList.length * 260 + Number(activeLi))) {
    activeLi = Number(activeLi) - 260;
    
    slideNext.style.color = '#2f3059' ;
    SlideNext.classList.add('slide-next-hover');
}
classList.style.transition = 'trnasform 1s';
classList.syle.trnstform = 'trnaslateX(' + String (activeLi) + 'px)';
classList.setAttribute('data-position', activeLi);
};

const slidePreviewList = document.getElementById('slide-prev');

for(let i=0; i<slidePreviewList.length; i++) {
    let classList =slidePreviewList[i].parentElement.parentElement.nextElementSibling;
    let liList= classList.getElementByTagName('li');

    if(classList.clientWidth < liList.length * 260 ) {
        slidePreviewList[i].classList.add('slide-prev-list');
        slidePreviewList[i].addEventListener('click', transformPrev);
    } else {
        const arrowContainer = slidePreviewList[i].parentElement;
        arrowContainer.removeChild(slidePrevLIst[i].nestElmentSibling);
        arrowContainer.removeChild(slidePrevLIst[i]);
    }
}
const backToTop = document.getElementById('backtotop');
const backToTop = document.getElementById('backtotop');

function checkScroll() {
    
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

} //여기 오류남 수정해야함

function moveBackToTop() {
    if (window.pageYOffset > 0) {

    
       window.scrollTo({top: 0, behavior: "smooth"})
    }
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);

//
function transformPrev(event) {
    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;
    const classList = slidePrev[i].parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementByTagName('li');

if(classList.clientWidth > (liList.length * 260 + Number(activeLi))) {
    activeLi = Number(activeLi) - 260;
    
    slideNext.style.color = '#2f3059' ;
    SlideNext.classList.add('slide-next-hover');
}
classList.style.transition = 'trnasform 1s';
classList.syle.trnstform = 'trnaslateX(' + String (activeLi) + 'px)';
classList.setAttribute('data-position', activeLi);
};

const slidePreviewList = document.getElementById('slide-prev');

for(let i=0; i<slidePreviewList.length; i++) {
    let classList =slidePreviewList[i].parentElement.parentElement.nextElementSibling;
    let liList= classList.getElementByTagName('li');

    if(classList.clientWidth < liList.length * 260 ) {
        slidePreviewList[i].classList.add('slide-prev-list');
        slidePreviewList[i].addEventListener('click', transformPrev);
    } else {
        const arrowContainer = slidePreviewList[i].parentElement;
        arrowContainer.removeChild(slidePrevLIst[i].nestElmentSibling);
        arrowContainer.removeChild(slidePrevLIst[i]);
    }
}

