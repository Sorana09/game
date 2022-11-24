
            // function sleep(ms) {
            //     return new Promise(resolve => setTimeout(resolve, ms));
            // }

            // async function notif() {
            //     let btn = document.getElementById("btn")
            //     await sleep(2000)
            //     btn.textContent = "Sent Successfully !!"
            //     await sleep(6000)
            //     btn.textContent = "Send"
            // }

            let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});