/* 
Descrizione:
Rifare l'esercizio dello slider come fatto assieme in classe.
1. salvare il valore dell'index della singola immagine
2. variare il valore dell'index per consentire all'immagine di cambiare
3. creare un evento click sulle freccie collegando il cambio di valore dell'index

//--------------------------------------------------------------------------
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
*/

var app = new Vue({
    el: '#root',
    data: {

        Images: [
            'https://www.1zoom.me/prev/303/302250.jpg',
            'https://s1.1zoom.me/prev/591/Sunrises_and_sunsets_Men_Sea_Surfing_Windsurfing_590129_600x400.jpg',
            'https://s1.1zoom.me/prev/576/Owls_Eurasian_eagle-owl_Closeup_575589_600x400.jpg',
            'https://www.ducatimilano.it/wp-content/uploads/2019/10/DUCATI_PANIGALE-V2_AMBIENCE_28_UC101517_High-600x400.jpg',
            'https://aiglebleu.net/wp-content/uploads/2016/03/ecologie-ecology-gu%C3%A9rison-healing-earth-wisdom-sagesse-de-la-terre-beaute-beauty.jpg'
        ],
        // index della singola immagine salvato in una variabile
        ImageIndex: 0,
        autoplay: null
    },

    // funzioni per incrementare e decrementare l'indice 
    methods: {
        next: function() {
            this.ImageIndex++;
            
            if ( this.ImageIndex >= this.Images.length ) {
                this.ImageIndex = 0;
            }
        },

        back: function() {
            this.ImageIndex--;

            if ( this.ImageIndex < 0 ) {
                this.ImageIndex = (this.Images.length - 1);
            }
        },

        colorCircle: function(indexCicle) {
            if ( this.ImageIndex == indexCicle ) {
                return 'cicle_color'; // se gli index coincidono aggiungi la classe che colora il cerchietto
            }
            return ''; // altrimenti non aggiungi nulla
        },

        switchImg: function(indexCicle) {
            this.ImageIndex = indexCicle;
        },

        stop: function() {
            clearInterval(this.autoplay);
        }
    },

    // bonus - autoplay slider
    mounted: function() {
        this.autoplay = setInterval(this.next, 2000);
    }
});