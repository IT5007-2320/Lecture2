function newsfetch()
{   var newsitems = ["N1", "N2", "N3", "N4", "N5"];
    var tbl = document.getElementById("firstatable");
    for (i=0;i<newsitems.length; i++)
    {
        tr = tbl.insertRow();
        td = tr.insertCell();
        td.innerHTML = newsitems[i]; 
    }
}

function loadScript(){
    //Decide on the secret first
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    const guessedValue = document.querySelector(".guessField");
    const guessSubmit = document.querySelector(".guessSubmit");
    const result = document.querySelector(".result");
    const lowOrHi = document.querySelector(".lowOrHi");
    guessSubmit.addEventListener('click', checkguess); //Alternative is to use the onClick option in HTML file
    function checkguess()
    {   let guessedValueinNumber = Number(guessedValue.value);

        if (guessedValueinNumber == secretNumber)
        {
            result.textContent="Correct Guess!";
            result.style.backgroundColor = 'green';
        }
        else
        {
            result.textContent="Incorrect!";
            result.style.backgroundColor = 'red';
            if(guessedValueinNumber < secretNumber)
            {
                lowOrHi.textContent = "Guess higher!";
            }
            else
            {
                lowOrHi.textContent = "Guess Lower!";
            }
        }
    }
}