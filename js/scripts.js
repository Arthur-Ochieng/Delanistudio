$(document).ready(function() {
 $("div#design").click(function() {
     $("div#content").toggle();
     $("div#design").toggle();
  });
 $("div#content").click(function() {
    $("div#content").toggle();
    $("div#design").toggle();
  });
  $("div#dev").click(function() {
    $("div#dev-content").toggle();
    $("div#dev").toggle();
  });
  $("div#dev-content").click(function() {
    $("div#dev-content").toggle();
    $("div#dev").toggle();
  });
  $("div#product").click(function() {
    $("div#prod-content").toggle();
    $("div#product").toggle();
  });
  $("div#prod-content").click(function() {
    $("div#prod-content").toggle();
   $("div#product").toggle();
  });
  $("form").click(function() {
      var name= $("input#name").val();
      alert("Hello  "+name+" Thank you for contacting us");
      event.preventDefault();
  });
  $("#photo1").mouseover(function() {
      $("#text1").show();
    }).mouseout(function() {
        $("#text1").hide();
    });
  $("#photo2").mouseover(function() {
      $("#text2").show();
    }).mouseout(function() {
        $("#text2").hide();
    });
  $("#photo3").mouseover(function() {
      $("#text3").show();
    }).mouseout(function() {
        $("#text3").hide();
    });
  $("#photo4").mouseover(function() {
      $("#text4").show();
    }).mouseout(function() {
        $("#text4").hide();
    });
  $("#photo5").mouseover(function() {
      $("#text5").show();
    }).mouseout(function() {
        $("#text5").hide();
    });
  $("#photo6").mouseover(function() {
      $("#text6").show();
    }).mouseout(function() {
        $("#text6").hide();
    });
  $("#photo7").mouseover(function() {
      $("#text7").show();
    }).mouseout(function() {
        $("#text7").hide();
    });
  $("#photo8").mouseover(function() {
      $("#text8").show();
    }).mouseout(function() {
        $("#text8").hide();
    });
});