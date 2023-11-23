

function removeHideCardClass() {
    let cards = document.querySelectorAll(".projects_container .card");
    cards.forEach(card => {
        card.classList.remove("hideCard")
    })
}
function Filter_grid(type) {
    let cards = document.querySelectorAll(".projects_container .card")
    let gridNavs = document.querySelectorAll(".projects_container .projects_tags span")
    console.log(cards)
    switch (type) {
        case "Real":
            cards.forEach(card => {
                card.dataset.card == type ? card.classList.remove("hideCard") : card.classList.add("hideCard")
            })
            gridNavs.forEach(nav => {
                nav.dataset.active == type ? nav.classList.add("active") : nav.classList.remove("active")
            })
            break;
        case "Design":
            cards.forEach(card => {
                card.dataset.card == type ? card.classList.remove("hideCard") : card.classList.add("hideCard")
            })
            gridNavs.forEach(nav => {
                nav.dataset.active == type ? nav.classList.add("active") : nav.classList.remove("active")
            })
            break;
        default:
            gridNavs.forEach(nav => {
                nav.dataset.active == "All" ? nav.classList.add("active") : nav.classList.remove("active")
            })
            removeHideCardClass();
            break;
    }
}

// emailjs.init("DpDOgX3EUj3hzc5hl")


// var submit_button = document.querySelector(".form_container .submit_button")
// var loading_container = document.getElementById("loading_container")

// submit_button.onclick = function() {
//     submit_button.querySelectorAll("span")[0].style.display = 'none'
//     submit_button.querySelectorAll("span")[1].style.display = 'none'
//     loading_container.style.display = "inline-block"
//     if(checkFields()){
//         var templateParams = {
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             message: document.getElementById("description").value,
//         };
    
//         emailjs.send('service_2k7pihn', 'template_l099lys', templateParams)
//             .then(function(response) {
//                 loading_container.style.display = "none"
//                 submit_button.querySelectorAll("span")[0].style.display = 'inline-block'
//                 submit_button.querySelectorAll("span")[1].style.display = 'inline-block'
//                 openPopupMessgae(true)
//                 clearFields();
//             }, function(error) {
//                 loading_container.style.display = "none" 
//                 submit_button.querySelectorAll("span")[0].style.display = 'inline-block'
//                 submit_button.querySelectorAll("span")[1].style.display = 'inline-block'
//                 openPopupMessgae(false)
//                 console.log(error)
//         });

//     }
//     else {
//         loading_container.style.display = "none"
//         submit_button.querySelectorAll("span")[0].style.display = 'inline-block'
//         submit_button.querySelectorAll("span")[1].style.display = 'inline-block'
//     }
     
    
// }
// Clear Fields After Send Message 
// function clearFields() {
//  let fields = document.querySelectorAll(".fields");
//  fields.forEach(elemnt => {
//     elemnt.value = ''
//  })
//  let labels = document.querySelectorAll(".form_container label");
//  labels.forEach(label => {
//     label.classList.remove("inputActive")
//  }) 
// }
// // Check required Fields 
// function checkFields(){
//     let errors = document.querySelectorAll(".form_container .error");
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email");
//     let description = document.getElementById("description").value;
//     if(name == "" ) {
//         errors[0].innerHTML = "Field Required *"
//         return false
//     }

//     if(description == "" ) {
//         errors[2].innerHTML = "Field Required *"
//          return false
//         }

    
//     if(email == "" ) {
//         errors[1].innerHTML = "Field Required *"
//          return false
//     }

//     else {
//         return true
//     }
    
// }
// email Validatin field 
// let errors = document.querySelectorAll(".form_container .error");
// let email = document.getElementById("email");
// email.addEventListener("keyup", function() {
//     if(!validateEmail(email.value)) {
//         errors[1].innerHTML = "The email is not valid"
//     }
//     else { errors[1].innerHTML = ""}
// })
// function validateEmail(email) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

// let fields = document.querySelectorAll(".fields")
// let labels = document.querySelectorAll(".form_container label")
// for (let index = 0; index < fields.length; index++) {
//     const element = fields[index];
//     element.addEventListener("change", function() {
//         if(element.value.length > 0) {
//             if (index == 0) {
//                 labels[0].classList.add("inputActive")
//                 labels[1].classList.add("inputActive")
//             }
//             if (index == 1) {
//                 labels[2].classList.add("inputActive")
//                 labels[3].classList.add("inputActive")
//             }
//             if (index == 2) {
//                 labels[4].classList.add("inputActive")
//                 labels[5].classList.add("inputActive")  
//             } 
//         }
//         else {
//             if (index == 0) {
//                 labels[0].classList.remove("inputActive")
//                 labels[1].classList.remove("inputActive")
//             }
//             if (index == 1) {
//                 labels[2].classList.remove("inputActive")
//                 labels[3].classList.remove("inputActive")
//             }
//             if(index == 2) {
//                 labels[4].classList.remove("inputActive")
//                 labels[5].classList.remove("inputActive")
//             }
//         }
//         })
// }

function openPopupMessgae(isSuccess) {
    let popup_container = document.getElementById("PopUp_window_message")
    let lottefiles_container = document.querySelector(".lottefiles_container")
    // Seucces Text 
    let seccuss_text = document.querySelector(".seccuss_text")
    seccuss_text.style.display = 'none'
    // Error Text 
    let error_text = document.querySelector(".error_text")
    error_text.style.display = 'none'
    lottefiles_container.innerHTML = ''
    
    if(isSuccess) {
        lottefiles_container.innerHTML = `<lottie-player src="./83962-mail-sent.json" id="seccuss_icon"  background="transparent"  speed="1"  style="width: 250px; height: 250px;"  autoplay></lottie-player>`
        seccuss_text.style.display = 'block'
    }
    else {
        console.log(isSuccess)
        lottefiles_container.innerHTML = `<lottie-player src="./113888-errorfailure.json" id="failed_icon"  background="transparent"  speed="1"  style="width: 250px; height: 250px; margin: auto;"  autoplay></lottie-player>`
        error_text.style.display = 'block'
    }
    popup_container.classList.add("show")
}

// let closePopup = document.querySelector(".closePopup")
// closePopup.addEventListener("click", function() {
//     document.getElementById("PopUp_window_message").classList.remove("show")
// })