// Load your images on page-load
    /*function preloader() {
        const imagesPaths = [
           "../img/recycle-2-1238403.jpg",
           "../img/bike-1419051-1918x1206.jpg",
           "../img/hamburger-1516940.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);*/
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    const nodes = document.querySelectorAll('.container button');

    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const dynContent = [
        {
            header: "Recyle more",
            imgUrl: "../img/recycle-2-1238403.jpg",
            imgAlt: "recycle Image",
            body: "Recycling helps reduce waste. Be sure to look out for the recycle symbol on products. The less you put in the trash the less you waste."
        },
        {
            header: "Bike over driving",
            imgUrl: "../img/bike-1419051-1918x1206.jpg",
            imgAlt: "Bicycle Image",
            body: "Biking helps reduce carbon emissions. Driving releases a lot of carbon in the atmosphere and adds more to global warming. It's also pretty good exercise."
        },
        {
            header: "Eat your veggies",
            imgUrl: "../img/hamburger-1516940.jpg",
            imgAlt: "Hamburger Image",
            body: "Eating less meat greatly carbon and waste emissions. Cattle ranchers have clear cut millions of square kilometers of forests for grazing pastures. So eating less meat reduces deforestation."
        }
    ];

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const content = document.querySelector('.content');

    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>`*/
    

    /* 
    Start your handleSelection function here. */ 
    function handleSelection(par){
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 
        
        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
        for (let icon of nodes){
            if(icon.hasAttribute('id')){
             icon.removeAttribute('id');
                
            }
        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */ 
            /*icon.setAttribute('id', 'active-button');*/
            par.target.id ='active-button';
        };
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
        
        if(nodes[0].id === 'active-button'){
            content.innerHTML = `<div class="head"><h1>${dynContent[0].header}</h1>
                                <div class="body"><img alt="${dynContent[0].imgAlt}" src="${dynContent[0].imgUrl}">
                                <p>${dynContent[0].body}</p></div></div>`
        }else if(nodes[1].id === 'active-button'){
            content.innerHTML = `<div class="head"><h1>${dynContent[1].header}</h1>
                                <div class="body"><img alt="${dynContent[1].imgAlt}" src="${dynContent[1].imgUrl}">
                                <p>${dynContent[1].body}</p></div></div>`
        }else if(nodes[2].id === 'active-button'){
            content.innerHTML = `<div class="head"><h1>${dynContent[2].header}</h1>
                                <div class="body"><img alt="${dynContent[2].imgAlt}" src="${dynContent[2].imgUrl}">
                                <p>${dynContent[2].body}</p></div></div>`
        }else{
            content.innerHTML = 'Click around the button. It\'s a bit finicky.'
        };
    /* 
    Close your handleSelection function here. */  
    };
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 
        for (let btn of nodes){
            btn.addEventListener('click', handleSelection);
        }