//2021-05-03 1:24:39
console.log("This is alarm clock file");

const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setAlarm);

//var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
    //console.log("playing.");
}
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    //console.log(`Setting Alarm for ${alarm.value}......`);

    alarmDate = new Date(alarm.value);
    alert(`Setting value for ${alarmDate}......`);

    now = new Date();
    let timeToAlarm = alarmDate-now

    console.log(timeToAlarm);
    
    if(timeToAlarm>=0){
        setTimeout(() => {
            //console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }

}