
function getData() {
    let inputData = document.getElementById('collectData').value;
    let outputText = document.getElementById('outputText');
    console.log(inputData);

    const forwardData = (inputData.split(""));
    const forwardString = forwardData.join(' ');
    console.log(forwardString);

    const reverseData = [...forwardData.reverse()];
    const reverseString = reverseData.join(' ');
    console.log(reverseString);

    if (forwardString === reverseString) {
        let trueElements = document.querySelectorAll('.true');
        trueElements.forEach(function (element) {
            element.classList.add('show');
        });

        let falseElements = document.querySelectorAll('.false');
        falseElements.forEach(function (element) {
            element.classList.remove('show');
        });
        console.log(true)
        return true;
    } else {
        let trueElements = document.querySelectorAll('.true');
        trueElements.forEach(function (element) {
            element.classList.remove('show');
        });

        let falseElements = document.querySelectorAll('.false');
        falseElements.forEach(function (element) {
            element.classList.add('show');
        });
        console.log(false)
        return false;
    }
}

function getInputData() {
    let inputData = document.getElementById('collectValue').value;
    console.log(inputData);

    const latterNumder = inputData.split(" ").join("").length;
    document.getElementById('latter').innerHTML = latterNumder;

    function wordCount(obj) {
        return obj.split(' ').length;
    }
    let wordNumber = wordCount(inputData)
    console.log('word', wordNumber);

    document.getElementById('word').innerHTML = wordNumber;
    console.log("latter Numder", latterNumder);


    function averageLetter() {
        return latterNumder / wordNumber;
    }
    const gornumber = Math.round (averageLetter());
    console.log  ('average Latter', gornumber);
    document.getElementById('averageLatter').innerHTML = gornumber;
}
