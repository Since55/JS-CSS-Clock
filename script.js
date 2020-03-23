"use strict"
//starts clock script after page load
$( document ).ready(function(){
    setInterval(() =>{
        let date = new Date();
        let sec = date.getSeconds();
        let min = date.getMinutes();
        let hours = date.getHours();
    
        setDate(sec, min, hours)
}, 1000);
})

//changing css via jquery every second with actual-0.7s date
function setDate(sec, min, hours){

    $("#sec").css(
        "transform", "rotate(" + (90+sec*6) + "deg)"
    );
    
    $("#min").css(
        "transform", "rotate(" + (90+min*6) + "deg)"
    );

    $("#hours").css(
        "transform", "rotate(" + (90+hours*30) + "deg)"
    );
}