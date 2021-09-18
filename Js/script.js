/* 
Descrizione:
Rifare l'esercizio dello slider come fatto assieme in classe.
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

        ImageIndex: 0
    }
});

