let hearts = Array.from(document.querySelectorAll(".fa-heart"))
let deletes = Array.from(document.querySelectorAll(".fa-trash-alt"))
let plus = Array.from(document.querySelectorAll(".plus-btn"))
let minus = Array.from(document.querySelectorAll(".minus-btn"))



// hearts Part
for (let h of hearts) {
    h.addEventListener("click", function () {
        if (h.style.color === 'red') {
            h.style.color = '#212529'
        } else {
            h.style.color = 'red'
        }
    })
}

// remove parts 
for (let d of deletes) {
    d.addEventListener("click", function () {
        d.parentNode.parentNode.remove();
        total();
    })
}

// plus quantity part 
for (let p of plus) {
    p.addEventListener("click", function () {
        p.nextElementSibling.innerHTML++;
        total();
    })
}

//minus quantity part 
for (let m of minus) {
    m.addEventListener("click", function () {
        if (m.previousElementSibling.innerHTML > 0) {
            m.previousElementSibling.innerHTML--;
        }
        total();
    })
}


// total price
function total() {
    let unite_prices = Array.from(document.querySelectorAll(".unit"))
    let quantites = Array.from(document.querySelectorAll(".qute"))
    let ttc = document.querySelector(".t_price")
    let t = 0
    for (let i in unite_prices) {
        t += unite_prices[i].innerHTML * quantites[i].innerHTML
    }
    ttc.innerHTML = t
}