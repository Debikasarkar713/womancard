// document.getElementById('tech').onclick = function () {
//   document.getElementById('who').innerHTML = "Hedy Lamar";
// };

// let changeDivs = function(){
//   let tech = document.getElementById('tech');
//   let who = document.getElementById('who');
//   let what = document.getElementById('what');
//   let when = document.getElementById('when');

//   tech.onclick = function() {
//     who.innerHTML = "Hedy Lamar";
//     what.innerHTML = "Mother of Wifi";
//     when.innerHTML = "sometime ago";
//   }
// console.log ('work');
// // }
// $(function () {
//     $('#who div').hide().eq(0).show();
//     $('#what div').hide().eq(0).show();

//     $('#tabs li').click(function () {
//         $('#who div').hide()
//         $('#what div').hide()
//         num = $('#tabs li').index(this);
//         $('#who div').hide().eq(num).show();
//         $('#what div').hide().eq(num).show();
//     });
// });

$(function () {
    $('#who div').hide().eq(0).show();
    $('#what div').hide().eq(0).show();
    $('#when div').hide().eq(0).show();
    $('#image div').hide().eq(0).show();
    $('#para div').hide().eq(0).show();
    $('#quote div').hide().eq(0).show();
    // $('#boxone div').hide().eq(0).show();
    // $('#boxtwo div').hide().eq(0).show();
    // $('#boxthree div').hide().eq(0).show();
    // $('#boxfour div').hide().eq(0).show();
    // $('#boxfive div').hide().eq(0).show();
    // $('#boxsix div').hide().eq(0).show();

    $('button').click(function () {
        $('#who div').hide()
        $('#what div').hide()
        $('#when div').hide()
        $('#image div').hide()
        $('#para div').hide()
        $('#quote div').hide()
        // $('#boxone div').hide()
        // $('#boxtwo div').hide()
        // $('#boxthree div').hide()
        // $('#boxfour div').hide()
        // $('#boxfive div').hide()
        // $('#boxsix div').hide()

        num = $('button').index(this);
        $('#who div').hide().eq(num).show();
        $('#what div').hide().eq(num).show();
        $('#when div').hide().eq(num).show();
        $('#image div').hide().eq(num).show();
        $('#para div').hide().eq(num).show();
        $('#quote div').hide().eq(num).show();
        // $('#boxone div').hide().eq(num).show();
        // $('#boxtwo div').hide().eq(num).show();
        // $('#boxthree div').hide().eq(num).show();
        // $('#boxfour div').hide().eq(num).show();
        // $('#boxfive div').hide().eq(num).show();
        // $('#boxsix div').hide().eq(num).show();
    });
});
