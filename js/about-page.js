
let aboutPageMenuItems = document.querySelector('main section.about-page ul.about-page__menu');
let aboutPageSections = document.querySelector('main section.about-page .about-page__section');

for(let i=0; i<aboutPageMenuItems.children.length; i++){
    aboutPageMenuItems.children[i].onclick = function(){
        for(let i=0; i<aboutPageMenuItems.children.length; i++){
            aboutPageMenuItems.children[i].classList.remove('active');
            aboutPageMenuItems.children[i].removeAttribute('id');
        }
        for(let i=0;i<aboutPageSections.children.length;i++){
            aboutPageSections.children[i].classList.remove('active');
        }        
        aboutPageMenuItems.children[i].classList.add('active');
        aboutPageMenuItems.children[i].setAttribute('id',i);
        aboutPageSections.children[parseInt(aboutPageMenuItems.children[i].getAttribute('id'))].classList.add('active');
        console.log(aboutPageSections.children[parseInt(aboutPageMenuItems.children[i].getAttribute('id'))]);
        console.log(aboutPageSections.children);
    }

}















