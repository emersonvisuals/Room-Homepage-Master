const header = document.querySelector('.wrapper h1');
const para = document.querySelector('.wrapper p');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let object = [
    {
        id:0,
        heading:"We are available all across the globe",
        text:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },

    {
        id: 1,
        heading:"Manufactured with the best materials",
        text:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    },

    {
        id:2,
        heading:"Discover innovative ways to decorate",
        text:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    }
];

let currentItem = 0; 

console.log("start");

right.addEventListener('click',function(){
    let item = object[currentItem];
    currentItem++;
    if(currentItem > object.length -1){
currentItem = 0;
    }
    header.textContent = item.heading;
    para.textContent = item.text;
    console.log(`i am value no ${currentItem}`)
})

left.addEventListener('click',function(){
    let item = object[currentItem];
    currentItem--;
    if(currentItem < 0){
currentItem = 2;
    }
    header.textContent = item.heading;
    para.textContent = item.text;
    console.log(`i am value no ${currentItem}`)
})

