Vue.config.devtools = true;

var app = new Vue(
{
    el : "#app",

    data : 
    {
        header : 
        {
            logo :"img/av-freelance-logo-retina.png",
            leftMenu: ["fas fa-plus",
                        "fas fa-bars"
                        ]
        },

        footer : 
        {
            logo: "img/avada-footer-logo.png",
            credits : 
                    [
                        "© Copyright 2012-20202",
                        "Avada Theme by",
                        "All rights Reserved",
                        "Powerd by"
                    ],
            socialMedia : 
                        [
                            "fab fa-facebook-square",
                            "fab fa-twitter-square",
                            "fab fa-instagram",
                            "fab fa-youtube"
                        ]
        }
    },

    mounted(){
        console.log("hello")
    }
})