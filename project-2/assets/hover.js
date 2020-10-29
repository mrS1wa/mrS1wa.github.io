$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#starset').hover(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".starset-header").toggleClass("visible");
        $(".starset-overlay").toggleClass("visible");
        });
});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#bad-suns').hover(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".badsuns-header").toggleClass("visible");
        $(".badsuns-overlay").toggleClass("visible");
        });
});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#shinedown').hover(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".shinedown-header").toggleClass("visible");
        $(".shinedown-overlay").toggleClass("visible");
        });
});
