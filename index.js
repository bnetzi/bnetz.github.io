let textDiv = document.getElementById('Text')
let wordsArray = ['תקווה', 'אח', 'פסימיסט', 'מכונית צעצוע', 'שליליות', 'הורים', 'פלייסטיישן', 'שמחה', 'לגו', 'דוד', 'צחוק', 'חבר', 'אופטימיסט', 'פחד', 'פאזל', 'מכשול']
let startButton = document.getElementById('start')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function wordsPrint() {

}



startButton.onclick = function wordsPrint(){
    textDiv.innerHTML = `<h1> ${wordsArray[0]} </h1>`
    let counter = 0;
    let presentID = setInterval(
        function(){
                if (!wordsArray[counter]){
                    textDiv.innerHTML = `<h1> Done </h1>`
                    clearInterval(presentID);
                    let words = window.prompt("אנא הכנס את כל המילים שזכרת, מופרדות בפסיק ,תוך 90 שניות")
                    words = words.split(',').map(elem => {return elem.trim()});
                    let matches = 0;
                    let matchesWords = [];
                    let unMatchedWords =[];
                    words.forEach(match => {
                        if (wordsArray.includes(match)){
                         matches += 1;
                         matchesWords.push(match);
                        } else {
                            unMatchedWords.push(match);
                        }
                    });

                    textDiv.innerHTML = `<h1> Done - Words matched: ${matches} </h1>`
                    textDiv.innerHTML += `<h3> מילים שהכנסת:  ${matchesWords} 
<br>
  מילים שהכנסת אך לא תאמו: ${unMatchedWords} </h3>`



                } else {
                    counter += 1;
                    textDiv.innerHTML = `<h1> ${wordsArray[counter]} </h1>`
                }

        },7500);
};

