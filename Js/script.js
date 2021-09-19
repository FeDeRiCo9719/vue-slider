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
            'https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg',
            'https://media.tdc.travel/tdc_media/tmp/new/1569358007.500.Distinction-SOUTH-title-500x300-v2.jpg',
            'https://i.guim.co.uk/img/media/f1c805f02b98e92359aaf7436f175326fbbdedd7/0_0_5400_3238/500.jpg?quality=85&auto=format&fit=max&s=c8315df8131190f83e1c22ec3122e3fc'
        ],
        // index della singola immagine salvato in una variabile
        ImageIndex: 0
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
        }
    },
});