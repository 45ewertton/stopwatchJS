window.onload = function(){
    let minutes = 00
    let seconds = 00
    let tens = 00
    let appendMinutes = document.getElementById('minutes')
    let appendSeconds = document.getElementById('seconds')
    let appendTens = document.getElementById('tens')
    let start = document.getElementById('btnStart')
    let stop = document.getElementById('btnStop')
    let reset = document.getElementById('btnReset')
    let Interval

    start.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(()=> {

            tens++
    
            if (tens <= 9){ 
                appendTens.innerHTML = "0" + tens
            }

            if (tens > 9){
                appendTens.innerHTML = tens
            }

            if (tens > 99){
                seconds++
                appendSeconds.innerHTML = "0" + seconds
                tens = 0
                appendTens.innerHTML = "0" + 0
            }

            if (seconds > 9){
                appendSeconds.innerHTML = seconds
            }

            if(seconds > 59){
                minutes++
                appendMinutes.innerHTML = "0" + minutes
                seconds = 0
                appendSeconds.innerHTML = "0" + 0
            }

            if (minutes > 9){
                appendMinutes.innerHTML = minutes
            }

            if (minutes == 60){
                window.alert(`Tempo finalizado, inicie o cronômetro novamente \u{1F604}`)
                clearInterval(Interval)
                minutes = '00'
                seconds = '00'
                tens = '00'
                appendMinutes.innerHTML = minutes
                appendSeconds.innerHTML = seconds
                appendTens.innerHTML = tens
            }
        }, 10)
    }
    stop.onclick = function() {
        clearInterval(Interval)
    }
    reset.onclick = function() {
        clearInterval(Interval)
        minutes = '00'
        seconds = '00'
        tens = '00'
        appendMinutes.innerHTML = minutes
        appendSeconds.innerHTML = seconds
        appendTens.innerHTML = tens 
    }
}