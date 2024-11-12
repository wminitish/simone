// collapse
$(".collaose_menu").on("click", function () {
  $(".main_dashboard_m").toggleClass("collaose_menu_m");
});
$(document).ready(function () {
  function checkScreenWidth(e) {
    if (e.matches) {
      $(".main_dashboard_m").addClass("collaose_menu_m");
    } else {
      $(".main_dashboard_m").removeClass("collaose_menu_m");
    }
  }

  var mediaQuery = window.matchMedia("(max-width: 767px)");

  checkScreenWidth(mediaQuery);
  mediaQuery.addListener(checkScreenWidth);
});

// search bar
$(document).ready(function () {
  var $searchbar = $("#searchbar");
  var $searchbarinput = $("#searchbarinput");
  var $dropdown = $("#dropdown");
  var $resultlist = $("#resultlist");
  var $lis = $resultlist.find("li");

  function darksoulsearch() {
    $searchbarinput.css("border-radius", "25px 25px 0 0");

    $resultlist.css("display", "flex");

    $dropdown.css({
      animation: "height 0.5s 1 linear forwards",
      height: "fit-content",
      "max-height": "200px",
      "overflow-x": "hidden",
      "overflow-y": "scroll",
      transition: "all 0.5s",
    });
  }

  function closesearch() {
    $searchbarinput.css("border-radius", "25px");

    $dropdown.css({
      animation: "revheight 0.5s 1 linear forwards",
      height: "fit-content",
      "max-height": "0px",
      "overflow-x": "hidden",
      "overflow-y": "scroll",
      transition: "all 0.5s",
    });

    $resultlist.css("display", "none");
  }

  $(window).on("click", function (event) {
    if (!$(event.target).is($searchbarinput)) {
      closesearch();
      console.log("body");
    }
  });

  $searchbarinput.on("input", function () {
    var searchValue = $searchbarinput.val().toLowerCase();

    $lis.each(function () {
      var $li = $(this);
      var liName = $li.text().toLowerCase();

      if (liName.includes(searchValue)) {
        darksoulsearch();
        $li.css("display", "flex");
      } else {
        $li.css("display", "none");
      }
    });
  });
});

// checkbox
$(document).ready(function () {
  $("#toggleCheckbox").change(function () {
    $(".field_show_1").toggle(this.checked);
  });

  $("#toggleCheckbox2").change(function () {
    $(".field_show_2").toggle(this.checked);
  });

  $(".field_show_1").toggle($("#toggleCheckbox").is(":checked"));
  $(".field_show_2").toggle($("#toggleCheckbox2").is(":checked"));

  // for add new progeny show form

  $(".add_progeny_data").on("click", function () {
    if ($(".main_stallions_p").is(":visible")) {
      $(".main_stallions_p").hide();
      $(".add_new_progeny").show();
    } else {
      $(".main_stallions_p").show();
      $(".add_new_progeny").hide();
    }
  });
  // show image add new fields
  $(".add_imgs_b").on("click", function () {
    if ($(".add_imgs_i").is(":visible")) {
      $(".add_imgs_i").hide();
      $(".add-new-img-p").show();
    } else {
      $(".add_imgs_i").show();
      $(".add-new-img-p").hide();
    }
  });
  // add video filed showing
  $(".add_video_b").on("click", function () {
    if ($(".add_video_i").is(":visible")) {
      $(".add_video_i").hide();
      $(".add-new-video-p").show();
    } else {
      $(".add_video_i").show();
      $(".add-new-video-p").hide();
    }
  });
  // for tabs stallions main
  function showTab(tabId) {
    $(".tab-content").removeClass("active");
    $("#" + tabId).addClass("active");
    $(".tab-link").removeClass("active");
    $(".tab-link[data-tab='" + tabId + "']").addClass("active");
  }

  $(".tab-link").on("click", function () {
    const tabId = $(this).data("tab");
    showTab(tabId);
  });

  $(".btn_update").on("click", function () {
    const nextTab = $(".tab-link.active").next(".tab-link").data("tab");
    if (nextTab) showTab(nextTab);
  });

  $(".Back_btn").on("click", function () {
    const prevTab = $(".tab-link.active").prev(".tab-link").data("tab");
    if (prevTab) showTab(prevTab);
  });

  showTab("tab-1");
});

// for pedigree edit text
$(document).ready(function () {
  $(".black-node, .blue-node, .pink-node").on("click", function (e) {
    e.preventDefault();

    $(this).attr("contenteditable", "true").text("").focus();
  });

  $(".black-node, .blue-node, .pink-node").on(
    "blur keypress",
    function (event) {
      if (
        event.type === "blur" ||
        (event.type === "keypress" && event.which === 13)
      ) {
        $(this).removeAttr("contenteditable");

        if (event.which === 13) event.preventDefault();
      }
    }
  );
});
// upload images
window.onload = function () {
  if (window.File && window.FileList && window.FileReader) {
    $(document).on("change", "#files", function (event) {
      var files = event.target.files;
      var output = document.getElementById("result");

      // Set display to block
      output.style.display = "block";

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (file.type.match("image.*")) {
          if (this.files[0].size < 2097152) {
            var picReader = new FileReader();
            picReader.addEventListener("load", function (event) {
              var picFile = event.target;
              var div = document.createElement("div");
              div.innerHTML =
                "<img class='thumbnail' src='" +
                picFile.result +
                "' title='preview image'/>";
              output.insertBefore(div, null);
            });
            $("#clear, #result").show();
            picReader.readAsDataURL(file);
          } else {
            alert("Image Size is too big. Maximum size is 2MB.");
            $(this).val("");
          }
        } else {
          alert("You can only upload image files.");
          $(this).val("");
        }
      }
    });
  } else {
    console.log("Your browser does not support File API");
  }
};

$(document).on("click", "#files", function () {
  $(".thumbnail").parent().remove();
  $("#result").hide();
  $(this).val("");
});

$(document).on("click", "#clear", function () {
  $(".thumbnail").parent().remove();
  $("#result").hide();
  $("#files").val("");
  $(this).hide();
});
