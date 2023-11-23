<script setup>
import i18n from  '../main';
import { computed} from  'vue'

// Change Langaue 
function changeLang() {
    const local = i18n.global.locale;
    i18n.global.locale.value = local.value === 'en' ? local.value = 'ar': local.value = 'en';
    // Store Lanaguge in LocalStorage 
    localStorage.setItem('lang', JSON.stringify(i18n.global.locale.value))
    // RTL directions
    i18n.global.locale.value === "ar" ? 
  document.getElementById('app').dir ="rtl": 
  document.getElementById('app').dir = 'ltr'
}
</script>
<template>
    <!-- Who Am I Section  -->
    <section class="Who_Am_I">
        
        <header >
            <h1 data-lang="en">{{ $t('logo') }}</h1>
            <!-- Rigth Navs  -->
            <nav>
                <a href="#Portfolio" class="link" data-lang="en">{{ $t('myProjects') }}</a>
                <a id="translate_container" class="link">
                    <span class="en active" data-langs="en" @click="changeLang">{{ $t('translateText') }}</span>
                </a>
                <a href="#contact" class="secondary-btn" data-lang="en">{{ $t('contactme') }}</a>
            </nav>
        </header>
        <!-- Hero Content  --> 
        <div class="hero" id="#hero">
            <!-- left side content  -->
            <div class="left_content" data-banga="left">
                <p data-lang="en">{{ $t('heroContent.greating') }}, <span>{{ $t('heroContent.im') }}</span></p>
                <h1 class="big_name" data-lang="en">{{ $t('heroContent.name') }}</h1>
                <h1 class="spicel_title" data-lang="en">{{ $t('heroContent.frontend') }}</h1>
                <p style="margin-top: 1.5rem; font-size: 1rem;" data-lang="en">{{ $t('heroContent.whatToDo') }}.</p>
                <a href="./files/Mohammed Bankaita CV.pdf" download="Mohammed Bankaita CV" class="primary-btn" data-lang="en">{{ $t('heroContent.downloadCV') }}</a>
            </div>
            <!-- right side content -->
            <div class="right_content RTL" data-banga="right">
                    <img src="../assets/images/my_pic.png" />
                    <div class="inline"></div>
                    <div class="outline"></div>
                    <!-- bubbles -->
                    <div class="big_bubble bubble"></div>
                    <div class="medium_bubble bubble"></div>
                    <div class="small_bubble bubble"></div>
            </div>
        </div>
    </section>
</template>