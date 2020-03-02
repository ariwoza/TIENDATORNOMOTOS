window.onscroll = function() {
    if (document.body.scrollTop > 90|| document.documentElement.scrollTop > 90) {
        console.log('si funciona');
        document.getElementById("header").classList.add("headerbg")
    }
    else {
        console.log('nop');
        document.getElementById("header").classList.remove("headerbg")
    }
}