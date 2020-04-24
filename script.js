// $(document).ready(function(){
//     console.log(
//     "Document made"
//     )


// $("button.btnClass").click(function(event){
//     $("p#p1").css("background-color", "red")
       
//     })

//     $("button.btnClass2").dblclick(function(event){
//         $("#last").css("background-color", "red")
           
//         })

//     $("span").mouseleave(function(){
    //     $(this).css("background-color", "yellow")
    // })
   // $("#p1).parent()".css("background color", "red")
//     $("div").has("p").css("background-color", "blue")
// })

//console.log(this)
$(document).ready(function(){
$("#btn-n").click(() => {
    $("#div2").hide();
})
$("#btn-m").click(() => {
    $("#div2").show();
})

$("#btn-i").click(() => {
    $("#div2").fadeIn();
})

$("#btn-o").click(() => {
    $("#div2").fadeOut();
})

$("#btn-a").click(() => {
    $("#div2").animate({left: 100, top: 200}, 2000);
})
})