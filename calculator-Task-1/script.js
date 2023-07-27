let string = ""
let buttons = document.querySelectorAll(".btn")
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }

        //console.log(e.target)
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

