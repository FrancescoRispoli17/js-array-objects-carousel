'use strict';
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const thumbs=document.querySelector('.thumbs');
const imgitems=document.querySelector('.item img');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

for(let element of images){
    const div=document.createElement('div');
    div.classList.add('thumb');
    const img=document.createElement('img');
    img.src=element.image;
    div.append(img);
    thumbs.append(div);
    div.addEventListener('click', function(event){
        const currentEleemt=event.target;
        
        for(let i=0;i<imagesDiv.length;i++){
            imagesDiv[i].classList.remove('active');
        }
        div.classList.add('active');
        imgitems.src=element.image;
    });
}

const imagesDiv=[document.querySelector('.thumbs div:nth-child(3)'),document.querySelector('.thumbs div:nth-child(4)'),document.querySelector('.thumbs div:nth-child(5)'),document.querySelector('.thumbs div:nth-child(6)'),document.querySelector('.thumbs div:nth-child(7)')];
document.querySelector('.thumbs div:nth-child(3)').classList.add('active')


prev.addEventListener('click',function(){
    const active=document.querySelector('.thumbs .active');
    for(let i=0;i<imagesDiv.length;i++){
        if(active.querySelector('img').src===imagesDiv[i].querySelector('img').src){
            if(i==0)
                i=5;
            active.classList.remove('active');
            imagesDiv[i-1].classList.add('active');
            imgitems.src=imagesDiv[i-1].querySelector('img').src;
        }
    }
})
next.addEventListener('click',function(){
    const active=document.querySelector('.thumbs .active');
    for(let i=0;i<imagesDiv.length;i++){
        if(active.querySelector('img').src===imagesDiv[i].querySelector('img').src){
            if(i==4)
                i=-1;
            active.classList.remove('active');
            imagesDiv[i+1].classList.add('active');
            imgitems.src=imagesDiv[i+1].querySelector('img').src;
            break;
        }
    }
})



