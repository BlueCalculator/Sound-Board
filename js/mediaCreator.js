let currentAudio = null
const audioLevel = document.getElementById("audioLevel");
const stopAll = document.getElementById("STOPALL");

stopAll.addEventListener("click", function() {  
    window.location.reload()
});

function fetchData(callback) {
        $.getJSON('js/sounds.json', function(data) {
            callback(data);
        });
}

function populateBoard(data){
    const board = $('#board')

    $.each(data, function(index, item){
        const boardIteam = $(`
            <div class="buttonBox">
                <div style="background-color: ${item.color}; box-shadow: 0px 0px 0px 3px ${item.color};"class="button"></div>
                <p>${item.title}</p>
            </div>
        `)

       

        boardIteam.click(function(){  
            if(currentAudio && audioLevel.checked){
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = new Audio(item.link)
            currentAudio.play()
        })

        board.append(boardIteam)
    })
}


fetchData(populateBoard);