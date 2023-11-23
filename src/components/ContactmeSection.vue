<script setup>
import seuccesMessage from '../assets/83962-mail-sent.json';
import errorMessage from '../assets/113888-errorfailure.json';

emailjs.init("DpDOgX3EUj3hzc5hl")

// Submit Form 
function submitForm() {
    if(checkFields()){
        var submit_button = document.querySelector(".form_container .submit_button")
        var templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("description").value,
        };
        var loading_container = document.getElementById("loading_container")
        emailjs.send('service_2k7pihn', 'template_l099lys', templateParams)
            .then(function(response) {
                console.log(response)
                loading_container.style.display = "none"
                submit_button.querySelectorAll("span")[0].style.display = 'inline-block'
                submit_button.querySelectorAll("span")[1].style.display = 'inline-block'
                openPopupMessgae(true)
                clearFields();
            }, function(error) {
                loading_container.style.display = "none" 
                submit_button.querySelectorAll("span")[0].style.display = 'inline-block'
                submit_button.querySelectorAll("span")[1].style.display = 'inline-block'
                openPopupMessgae(false)
                console.log(error)
        });

    }
    else {
        console.log(loading_container)
        loading_container.style.display = "none"
        submit_button.querySelectorAll("span")[0].style.display = 'inline-block'
        submit_button.querySelectorAll("span")[1].style.display = 'inline-block'
    }
}
// Clear Fields After Send Message 
function clearFields() {
 let fields = document.querySelectorAll(".fields");
 fields.forEach(elemnt => {
    elemnt.value = ''
 })
 let labels = document.querySelectorAll(".form_container label");
 labels.forEach(label => {
    label.classList.remove("inputActive")
 }) 
}
// Check required Fields 
function checkFields(){
    let errors = document.querySelectorAll(".form_container .error");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email");
    let description = document.getElementById("description").value;
    if(name == "" ) {
        errors[0].innerHTML = "Field Required *"
        return false
    }

    if(description == "" ) {
        errors[2].innerHTML = "Field Required *"
         return false
        }

    
    if(email == "" ) {
        errors[1].innerHTML = "Field Required *"
         return false
    }

    else {
        return true
    }
    
}
// Check Email if it correct 
function emailCheck(value) {
let errors = document.querySelectorAll(".form_container .error");
    if(!validateEmail(value)) {
        errors[1].innerHTML = "The email is not valid"
    }
    else {
        console.log(errors[1])
         errors[1].innerHTML = ""
        }
}
// Check Email Validation 
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// Dailog for message after submiting 
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
        lottefiles_container.innerHTML = `<lottie-player :src="../assets/83962-mail-sent.json" id="seccuss_icon"  background="transparent"  speed="1"  style="width: 250px; height: 250px;"  autoplay></lottie-player>`
        seccuss_text.style.display = 'block'
    }
    else {
        console.log(isSuccess)
        lottefiles_container.innerHTML = `<lottie-player :src="${errorMessage}" id="failed_icon"  background="transparent"  speed="1"  style="width: 250px; height: 250px; margin: auto;"  autoplay></lottie-player>`
        error_text.style.display = 'block'
    }
    popup_container.classList.add("show")
}
// Close Dailog
function closePopUp() {
    document.getElementById("PopUp_window_message").classList.remove("show")
}

</script>
<template>
    <!-- Contact me  -->
   <section class="contact" id="contact">
    <h1 class="title" data-lang="en" >{{ $t('contact.title') }}</h1>
    <div class="contact_container">
        <!-- Contect Text  -->
        <div class="content">
            <h1 data-lang="en" data-banga="up">{{ $t('contact.sendMe') }} <br/><span>{{ $t('contact.messageText') }}</span></h1>
        </div>
        <!-- form  -->
        <div class="form_container" data-banga="down">
            <div class="quick_contact">
                <a href="https://wa.me/734081383" target="_blank" title="Whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
                <a class="social" href="https://www.linkedin.com/in/mohammed-bankaita-032513220/" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                <a class="social" href="https://twitter.com/BangaMssb18"><i class="fa-brands fa-twitter" title="Twitter"></i></a>
                <a class="social" href="mailto:mohammed.bankaita@gmail.com" title="mohammed.bankaita@gmail.com"><i class="fa-solid fa-at"></i></a>
            </div>
            <div class="line" data-lang="en"><span>{{ $t('contactForm.or') }}</span></div>
            <div class="input-group">
                <input type="text" id="name" class="fields" value=""/>
                <p class="error"></p>
                <label for="name" id="name_label" data-lang="en">{{ $t('contactForm.name') }}</label>
            </div>
            <div class="input-group">
                <input type="email" @keyup="emailCheck($event.target.value)" id="email" class="fields" value=""/>
                <p class="error"></p>
                <label for="email" id="email_label" data-lang="en">{{ $t('contactForm.email') }}</label>
            </div>
            <div class="input-group">
                <textarea id="description" maxlength="100" placeholder="Maximum characters 100" class="fields" value=""></textarea>
                <p class="error"></p>
                <label for="description" id="description_label" data-lang="en">{{ $t('contactForm.description') }}</label>
            </div>

            <div class="submit_button" @click="submitForm">
                <span data-lang="en">{{ $t('contactForm.submit') }}</span>
                <!-- Loading  -->
                <div id="loading_container">
                    <span class="point"></span>
                    <span class="point"></span>
                    <span class="point"></span>
                </div>
            </div>
        </div>
    </div>
    <div class="medium_bubble bubble" data-lang="en"></div>
    </section>
    <div id="PopUp_window_message">
        <div class="card">
            <!-- Close PopUp  -->
            <div class="closePopup" @click="closePopUp"><i class="fa fa-times"></i></div>
            <!-- Image  -->
            <div class="lottefiles_container">
                <!-- Render Lottefiles Here  -->
                
            </div>
            <div class="seccuss_text">
                <p class="popup_content" data-lang="en">{{ $t('messages.success') }}</p>
            </div>
            <div class="error_text">
                <p class="popup_content" data-lang="en">{{ $t('messages.error') }}</p>
            </div>

        </div>
   </div>
</template>