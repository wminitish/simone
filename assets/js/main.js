$(document).ready(function () {
  $(".humberg_icon, .close_btn").click(function () {
    $(".main_sidebar_section").toggle();
  });
});
// cat slider
$("#catslider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
// services slider
$(
  "#categorySlider_services, #catslider_listing, #catslider_gallery"
).owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
//  #catslider_listing, #categorySlider_services
// cat slider
$("#Calender_slider").owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});

$(document).ready(function () {
  $("a.item_popup_opn").click(function (e) {
    e.preventDefault();
    var target = $(this).data("target");

    $(".item_popup").hide();

    $("#" + target).toggle();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".item_popup, .item_popup_opn").length) {
      $(".item_popup").hide();
    }
  });
});

$(document).ready(function () {
  $(".play__btn, .video_icon_i").click(function () {
    $(".video__pop").css("display", "flex");
  });

  $(".clos-btn").click(function () {
    $(".video__pop").css("display", "none");
  });
});
// tabs
$(document).ready(function () {
  $(".nav_tab").on("click", function () {
    $(".nav_tab").removeClass("active");
    $(this).addClass("active");

    var target = $(this).data("target");
    $(".tab_content").each(function () {
      if ($(this).attr("id") === target) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});
// gallery
$(document).ready(function () {
  $(".gallery_masory_m .grid-wrapper_i > div").slice(8).hide();
  $(".gallery_masory_m .gallery_load_more a").click(function (e) {
    e.preventDefault();

    $(".gallery_masory_m .grid-wrapper_i div:hidden").slideDown();

    $(this).hide();
  });
});
// for login popup
function showPopup() {
  $(".popupp").addClass("popupp-show").show();
}

// Function to hide the popup
function hidePopup() {
  console.log("hidePopup() called");
  $(".popupp").removeClass("popupp-show").hide();
}

$(document).ready(function () {
  const signUpButtons = document.getElementsByClassName("signUp");
  const signInButtons = document.getElementsByClassName("signIn");
  const container = document.getElementById("contain");
  const signupFormPopup = $(".bttn_login");
  const closeButton = $(".popupp .close");

  Array.from(signUpButtons).forEach(function (button) {
    button.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
  });

  Array.from(signInButtons).forEach(function (button) {
    button.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });
  signupFormPopup.on("click", () => {
    showPopup();
  });

  closeButton.on("click", () => {
    console.log("Close button clicked");
    hidePopup();
  });
});
