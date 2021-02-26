
let clickbtn = document.getElementById('clickbtn');
    clickbtn.onclick = function() {
        let arrImg = [document.getElementsByClassName('item')];
        let arrImg2 = arrImg.split(',');

        let choiceImg = function() {
            let number = Math.round(Math.random(arrImg2) * 4) +1;
            return number;
        }
        return choiceImg;
        let printImg = function() {
        document.getElementsByClassName('mainimg').classList.add('choiceImg');
        }

        };



