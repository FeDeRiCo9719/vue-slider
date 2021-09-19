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
            'https://www.coopalleanza3-0.it/dam/relation/images/placeholder/placeholder-content1-500x300.png',
            'https://ftl-media.imgix.net/media/truck/flat-bed/114sd-blue-500x300.jpg',
            'https://www.fromoldbooks.org/Bell-BritishLocomotivesIllustrated/24-Re-constructed-Atlantic-type-Locomotive-q75-500x300.jpg'
        ],
        // index della singola immagine salvato in una variabile
        ImageIndex: 0
    },

    methods: {
        next: function() {

            this.ImageIndex++
        },

        back: function() {

            this.ImageIndex--
        }
    },
});

