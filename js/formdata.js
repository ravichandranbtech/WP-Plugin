/*  $("#Save").click(function () {
      
      var person = {};

      person.name = $('#name').val();

      person.mobile = $('#mobile').val();
      
      person.email = $('#emailid').val();

      person.description = $('#description').val();

      console.log(person);
      
      var persondata = JSON.stringify(person);

      $.ajax({
          url: 'http://powwa-api.herokuapp.com/api/v1/websitedetails',
          type: 'POST',
          dataType: 'json',
          contentType: "application/json",
          data: persondata,
          success: function (data, textStatus, xhr) {
              console.log(data);
              alert('submited successfully');
          },
          error: function (xhr, textStatus, errorThrown) {
              console.log('Error in Operation');
              alert(xhr);
          }

      });


  });*/

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $("#success-alert").hide();
     $("#success-alert2").hide();


    $scope.webDetail = {};
    //// for mobile number below////
    $("#myField").keyup(function () {
        $("#myField").val(this.value.match(/[0-9]*/));
    });
    //////  for mobile number above ////
    $scope.SaveData = function () {

        if ($scope.webDetail.name == '' || $scope.webDetail.name == null || $scope.webDetail.email == '' || $scope.webDetail.email == null || $scope.isEmail == false || $scope.webDetail.description == '' || $scope.webDetail.description == null) {
            return;
        } else {
            $http.post("https://powwa-api.herokuapp.com/api/v1/websitedetails", $scope.webDetail).then(function (data) {
                //                alert("Your query submitted successfully !!!");
                $scope.clicked = false;
                $scope.webDetail = '';
                $("#success-alert").fadeTo(4500, 500).slideUp(500, function () {
                    $("#success-alert").slideUp(500);
                });
                
                $("#success-alert2").fadeTo(4500, 500).slideUp(500, function () {
                    $("#success-alert2").slideUp(500);
                });
                //                                    $route.reload();

            });
        }
    };
    //        /////////


    //    /////////
    
    // Email must be an email

    $('#contact_email').keyup('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        $scope.isEmail = is_email;

        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    
   
   
    
    
});


 //////////////
    // default bootstrap click, apenas muda com ação do utilizador
//$('#myTab a').click(function (e) {
//  e.preventDefault()
//  $(this).tab('show')
//})

// Tab-Pane change function
    var tabChange = function(){
        var tabs = $('.nav-tabs > li');
        var active = tabs.filter('.active');
        var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
        // Bootsrap tab show, para ativar a tab
        next.tab('show')
    }
    // Tab Cycle function
    var tabCycle = setInterval(tabChange, 7000)
    // Tab click event handler
    $(function(){
        $('.nav-tabs a').click(function(e) {
            e.preventDefault();
            // Parar o loop
            clearInterval(tabCycle);
            // mosta o tab clicado, default bootstrap
            $(this).tab('show')
            // Inicia o ciclo outra vez
            setTimeout(function(){
                tabCycle = setInterval(tabChange, 7000)//quando recomeça assume este timing
            }, 7000);
        });
    });
    /////////////////
    