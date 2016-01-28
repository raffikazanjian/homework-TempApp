
 function convert() {

   var temp = parseFloat($('#celsius').val());

   var fTemp = (temp * 9/5) + 32;
   var cTemp = ((temp -32) * .5556);

   console.log(fTemp);
   console.log(cTemp);

   if (isNaN(fTemp) || isNaN(cTemp)) {
     alert('Please Enter a Number!');
       $('body').removeClass('warm');
       $('body').removeClass('hot');
       $('body').removeClass('cold');
       $('h2 span').html('__');
   }
   else if (fTemp <= 45) {
     $('body').addClass('cold');
     $('h2 span').html('cold');
       $('body').removeClass('warm');
       $('body').removeClass('hot');
   }
   else if (fTemp >= 46 && fTemp <= 70) {
     $('body').addClass('warm');
     $('h2 span').html('warm');
       $('body').removeClass('cold');
       $('body').removeClass('hot');
   }
   else {
     $('body').addClass('hot');
     $('h2 span').html('hot');
       $('body').removeClass('warm');
       $('body').removeClass('cold');
   }
 }

$('#changeTemp').click(convert);
