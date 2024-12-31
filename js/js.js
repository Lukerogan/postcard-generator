const states = document.getElementById('states');

if (states) {
    states.onchange = function () {
        const postcard = document.getElementById('postcard');
        
        if (postcard) {
            postcard.style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
        } else {
            console.error("something when wrong with postcard img");
        }

        const stateHeading = document.getElementById('state-heading')

        if (stateHeading){
            stateHeading.innerHTML = states.options[states.selectedIndex].text;
            document.getElementById('greeting').innerHTML = 'Greetings from';
        } else{
            console.error("something went wrong with heading")
        }
    };
} else {
    console.error("something went wrong with states");
}