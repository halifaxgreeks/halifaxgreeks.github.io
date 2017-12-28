var userLang = navigator.language || navigator.userLanguage; 

SplashPage = new Vue({
    el: '#splash-main-app',

    data: {
        language: userLang.toLowerCase()
    },

    methods: {
        toggleLanguage: function () {
            if (this.language === 'el-gr') {
                this.language = 'en-us';
            } else {
                this.language = 'el-gr';
            }
        }
    },

    computed: {
        contents: function () {
            if (this.language === 'el-gr') {
                return resourceStore.gr.translation;
            } else {
                return resourceStore.en.translation;
            }
        }
    }
});