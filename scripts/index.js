const now = new Date();


let current_time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();

let thisHour = now.getHours();


if (Number(thisHour) < 18){
    window.location.replace('./TestVersionDay/index.html')
}

else if (Number(thisHour) > 18 || Number(thisHour) === 18) {
    window.location.replace('index.html')


}