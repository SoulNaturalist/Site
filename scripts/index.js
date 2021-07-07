localStorage.setItem('state', 'false')


function Update_page_state() {
    state_site = true;

}

const now = new Date();

const thisHour = now.getHours();


if (Number(thisHour) < 18 && state_site !== true){
    if (document.URL.indexOf('TestVersionDay') === -1 && state_site !== true){
        console.log(1, state_site)
        window.location.replace('TestVersionDay/index.html')
    }
}

else if (Number(thisHour) > 18 && state_site !== true) {
    console.log(2)
    if (document.URL.indexOf('Site_card/index.html') !== -1){
        console.log(3)
        window.location.replace('../index.html')
    }
}
