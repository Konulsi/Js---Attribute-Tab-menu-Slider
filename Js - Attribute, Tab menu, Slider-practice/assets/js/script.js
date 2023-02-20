"use strict";

// let linkElem = document.querySelector("a");

// console.log(linkElem.getAttribute("href"));      // atributun deyerini goturursen(sadece baxa bilirsen href atributu var ya yox)

// linkElem.setAttribute("href", "https://www.linkedin.com/");       // href atributunun ichinde olani deyiwib bawqa link qoyduq. evvel google idi deyiwdin linkedin oldu




// console.log(linkElem.hasAttribute("href"));    // tegde href atributu var ya yox onu yoxlamaq uchundur. true false qaytarir


// let btnGoogle = document.querySelector("button:nth-child(1)");
// let btnLinkedin = document.querySelector("button:nth-child(2)");


// btnGoogle.addEventListener("click",function(){
//     linkElem.setAttribute("href", "https://www.google.com/")     //google butonuna click edende a nin href i deyiwir got to website olan hisseye basanda google a gedir
// })


// btnLinkedin.addEventListener("click",function(){
//     linkElem.setAttribute("href", "https://www.linkedin.com/")    //leinkedin butonuna click edende a nin href i deyiwir got to website olan hisseye basanda linkedin e gedir
// })


// document.querySelector("a").removeAttribute("href");




//tab-menu


let headers = document.querySelectorAll(".tab-menu .header .item");

let contents = document.querySelectorAll(".tab-menu .content .item");



// headers.forEach(element => {                                 //headersde olan itemleri yeni bawliqlari foreacha salib elementi gotururuk
//     element.addEventListener("click", function(){           //headerlerin heresine click olanda (yeni elemnte click edende)  
//         document.querySelector(".active").classList.remove("active");     //active class hansinda varsa   hemin elementden active classini silir ve                
//         this.classList.add("active");                                     // click olunan elemnte active classsini elave edir

//         contents.forEach(content => {                                                            //headerlere(yeni elemente) click olunan anda  ele onun contentini de foreacha salib bir bir elde et hemin contentin ichreisinden hansini data idsinin thisin data id sinnnen (yeni click olunanla) eyni olub olmasasini yoxlayiriq
//             if(content.getAttribute("data-id")== this.getAttribute("data-id")){                 //contentin dataid si beraberdirse click olunan elementin data id sine buzaman
//                 content.classList.remove("d-none")                                              // hemin click olunannan remove edirik d-none i yeni gorunsun
//             }else{
//                 content.classList.add("d-none")                                                  // d-none u elave edirik diger contentlere (yeni contentlerin idsi elementin idsi ile eyni olmayanlara)
//             }  

//         });

//     })
// });




// headers.forEach(element => {                                 //headersde olan itemleri yeni bawliqlari foreacha salib elementi gotururuk
//     element.addEventListener("mouseover", function(){           //headerlerin heresine click olanda (yeni elemnte click edende)  
//         document.querySelector(".active").classList.remove("active");     //active class hansinda varsa   hemin elementden active classini silir ve                
//         this.classList.add("active");                                     // click olunan elemnte active classsini elave edir

//         contents.forEach(content => {                                                            //headerlere(yeni elemente) click olunan anda  ele onun contentini de foreacha salib bir bir elde et hemin contentin ichreisinden hansini data idsinin thisin data id sinnnen (yeni click olunanla) eyni olub olmasasini yoxlayiriq
//             if(content.getAttribute("data-id")== this.getAttribute("data-id")){                 //contentin dataid si beraberdirse click olunan elementin data id sine buzaman
//                 content.classList.remove("d-none")                                              // hemin click olunannan remove edirik d-none i yeni gorunsun
//             }else{
//                 content.classList.add("d-none")                                                  // d-none u elave edirik diger contentlere (yeni contentlerin idsi elementin idsi ile eyni olmayanlara)
//             }  

//         });

//     })
// });





//modal

// let mailInput =document.querySelector("#exampleInputEmail1");    //modal da mailin ichine yazilanlari elde etmek uchun bele edirik
//                                                                   // elde edib backedn de gondermek uchun

// document.querySelector(".login-btn").addEventListener("click",function(){
//     console.log(mailInput.value);
// })







//slider



// let leftIcon = document.querySelector(".slider .left");   // left iconu gotururuk

// let rightIcon = document.querySelector(".slider .right");  // right iconu gotururuk



// rightIcon.addEventListener("click",rightSlider )    //right iconun clickin de


// function rightSlider() {
//     let activeImage = document.querySelector(".active")   // active olan img i goturub variable a beraber edirik

//     if (activeImage.nextElementSibling != null) {                  //  active olan imgden sonra gelen wekil varsa yeni null deylse bunlari edek
//         activeImage.classList.remove("active");                    // active imagenin class listinden active classini silirik. yeni bu gorsenmesin novbeti wekil active olsun
//         activeImage.nextElementSibling.classList.add("active");   //active classdan  sildiyimizi novbeti gelen wekilin gorsenmesi uchun hemin wekile active classi elave edib active edirik
//     }else{                                                           // active imgden sonra wekil gelmirse bu zaman
//         activeImage.classList.remove("active");                      // active olan imgden active classini sil 
//         activeImage.parentNode.firstElementChild.classList.add("active")    // elave et en birinci olan wekile.
//     }
// }





// leftIcon.addEventListener("click",leftSlider )    //right iconun clickin de


// function leftSlider(){    //function kimi istifade etmek uchun bele edirik
//     let activeImage = document.querySelector(".active")   // active olan img i goturub variable a beraber edirik

//     if (activeImage.previousElementSibling != null) {                  //  active olan imgden evvel gelen wekil varsa yeni null deylse bunlari edek
//         activeImage.classList.remove("active");                    // active imagenin class listinden active classini silirik. yeni bu gorsenmesin novbeti wekil active olsun
//         activeImage.previousElementSibling.classList.add("active");   //active classdan  sildiyimizi novbeti gelen wekilin gorsenmesi uchun hemin wekile active classi elave edib active edirik
//     }else{                                                           // active imgden evvel wekil gelmirse bu zaman
//         activeImage.classList.remove("active");                      // active olan imgden active classini sil 
//         activeImage.parentNode.lastElementChild.classList.add("active")    // elave et en birinci olan wekile.
//     } 
// }



// leftIcon.addEventListener("mouseover",leftSlider )    // mouseoverde slider deyiwsin deye functionda istifade edirik

// rightIcon.addEventListener("mouseover",function(){
//     let activeImage = document.querySelector(".active")   
//     if (activeImage.nextElementSibling != null) {                  
//         activeImage.classList.remove("active");                    
//         activeImage.nextElementSibling.classList.add("active");   
//     }else{                                                           
//         activeImage.classList.remove("active");                      
//         activeImage.parentNode.firstElementChild.classList.add("active")    
//     }

//     this.style.opacity = "0"
// }) 
   

// setInterval(() => {       //intervalda edirikki click etmeden 2 saniye interval ile sliderler deyiwilsin
//     rightSlider()
// }, 2000);













