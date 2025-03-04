let currentAudio = null;
const audioLevel = document.getElementById("audioLevel");
const stopAll = document.getElementById("STOPALL");

stopAll.addEventListener("click", function() {  
    window.location.reload();
});

const soundsData = [
    {
        "title": "GET OUT",
        "color": "red",
        "link": "media/sounds/getOut.mp3"
    },
    {
        "title": "Anime Wow",
        "color": "teal",
        "link": "media/sounds/wow.mp3"
    },
    {
        "title": "Downer Noise",
        "color": "green",
        "link": "media/sounds/sad.mp3"
    },    
    {
        "title": "Zelda Opening Chest Sound",
        "color": "purple",
        "link": "media/sounds/zelda.mp3"
    },    
    {
        "title": "Metal Pipe Clanging",
        "color": "black",
        "link": "media/sounds/metalpipe.mp3"
    },    
    {
        "title": "Rizz Sound Effect",
        "color": "pink",
        "link": "media/sounds/rizzEffect.mp3"
    },    
    {
        "title": "Baby Laugh",
        "color": "teal",
        "link": "media/sounds/babyLaugh.mp3"
    },    
    {
        "title": "Fart",
        "color": "brown",
        "link": "media/sounds/dry-fart.mp3"
    },    
    {
        "title": "SpongeBob",
        "color": "Yellow",
        "link": "media/sounds/spongeBOB.mp3"
    },    
    {
        "title": "Bruh",
        "color": "red",
        "link": "media/sounds/Bruh.mp3"
    },    
    {
        "title": "Rat Dance Music",
        "color": "green",
        "link": "media/sounds/ratSong.mp3"
    },    
    {
        "title": "Sad Meow Song",
        "color": "black",
        "link": "media/sounds/SadMeow.mp3"
    },    
    {
        "title": "Buzzer",
        "color": "teal",
        "link": "media/sounds/Buzzer.mp3"
    },    
    {
        "title": "Smoke Detector",
        "color": "red",
        "link": "media/sounds/SmokeDetector.mp3"
    },    
    {
        "title": "Careless Whisper",
        "color": "purple",
        "link": "media/sounds/CarelessWhisper.mp3"
    },    
    {
        "title": "Dun Dun Dunnnnnn",
        "color": "red",
        "link": "media/sounds/DunDun.mp3"
    },    
    {
        "title": "YOUR PHONE RINGING",
        "color": "teal",
        "link": "media/sounds/Ringing.mp3"
    },    
    {
        "title": "Outro Song",
        "color": "red",
        "link": "media/sounds/outro.mp3"
    },    
    {
        "title": "Cat Laugh meme",
        "color": "green",
        "link": "media/sounds/Laugh.mp3"
    },    
    {
        "title": "Cricket",
        "color": "purple",
        "link": "media/sounds/cricket.mp3"
    },    
    {
        "title": "Let Me Know",
        "color": "pink",
        "link": "media/sounds/letmeknow.mp3"
    },    
    {
        "title": "We Do not Care",
        "color": "yellow",
        "link": "media/sounds/Wedonotcare.mp3"
    },    
    {
        "title": "OMG Wow",
        "color": "teal",
        "link": "media/sounds/omgwow.mp3"
    }
];

function populateBoard(data) {
    const board = $('#board');

    $.each(data, function(index, item){
        const boardItem = $(`
            <div class="buttonBox">
                <div style="background-color: ${item.color}; box-shadow: 0px 0px 0px 3px ${item.color};" class="button"></div>
                <p>${item.title}</p>
            </div>
        `);

        boardItem.click(function() {  
            if(currentAudio && audioLevel.checked){
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = new Audio(item.link);
            currentAudio.play();
        });

        board.append(boardItem);
    });
}

populateBoard(soundsData);
