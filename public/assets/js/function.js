/*----- Password Display -----*/
let eyeBtn = Array.from(document.querySelectorAll(".passDisplay"));
if (eyeBtn) {
  eyeBtn.forEach((e) => {
    e.addEventListener("click", function () {
      let passwordWrapper = e.closest(".passwordWrapper");
      let passInput = passwordWrapper.querySelector(".passInput");
      let eyeIcon = passwordWrapper.querySelector(".passDisplay i");
      if (passInput.type == "password") {
        passInput.setAttribute("type", "text");
        eyeIcon.setAttribute("class", "fas fa-eye");
      } else {
        passInput.setAttribute("type", "password");
        eyeIcon.setAttribute("class", "fas fa-eye-slash");
      }
    });
  });
}

/*----- Navigation Menu -----*/
let path = window.location.pathname;
path = path.split("/");
let activePath = path[path.length - 2];

let sideMenu = Array.from(
  document.querySelectorAll(".main-menu .nav-item .navLinks")
);
sideMenu.forEach((e) => {
  sideMenuLink = e.href;
  sideMenuLink = sideMenuLink.split("/");
  let sideMenuActive = sideMenuLink[sideMenuLink.length - 2];

  if (sideMenuActive == activePath) {
    e.closest(".nav-item").classList.add("active");
  }
});

/*----- Open SubMenu -----*/
let subMenu = document.querySelectorAll(".subMenu");

if (subMenu) {
  subMenu.forEach((e) => {
    let subActivePath = path[path.length - 1];
    let subLinks = Array.from(e.querySelectorAll(".subLinks"));
    subLinks.forEach((subLink) => {
      let subLinkHref = subLink.href;
      subLinkHref = subLinkHref.split("/");

      subLinkHref = subLinkHref[subLinkHref.length - 1];
      if (subLinkHref == subActivePath) {
        subLink.closest(".subItem").classList.add("active");
        subLink.closest(".hasSub").classList.add("open");
        subLink.closest(".nav-item").classList.add("active");
      }
    });
  });
}

/*----- Sub Menu Open On Click -----*/
let hasSubButton = document.querySelectorAll(".hasSubButton");
hasSubButton.forEach((e) => {
  e.addEventListener("click", () => {
    e.closest(".hasSub").classList.toggle("open");
  });
});

/*----- Go Back To page -----*/
let backLink = Array.from(document.querySelectorAll(".backLink"));
if (backLink) {
  backLink.forEach((e) => {
    e.addEventListener("click", () => {
      window.history.go(-1);
    });
  });
}

/*----- Video Play Button -----*/
let postMedia = Array.from(document.querySelectorAll(".postMedia"));
postMedia.forEach((thisMedia) => {
  let playButton = thisMedia.querySelector(".playButton");
  let myVideo = thisMedia.querySelector(".video");
  playButton.addEventListener("click", function () {
    playButton.classList.add("d-none");
    myVideo.setAttribute("controls", "true");
    myVideo.play();
  });
});

/*----- Notification Status -----*/
let mainNotificationCard = document.querySelectorAll(".mainNotificationCard");

if (mainNotificationCard) {
  function displayNotifications() {
    mainNotificationCard.forEach((e) => {
      let readButton = e.querySelector(".readButton");
      if (e.classList.contains("newNotification")) {
        readButton.addEventListener("click", () => {
          markRead(e, readButton);
        });
      } else {
        readButton.addEventListener("click", () => {
          markUnread(e, readButton);
        });
      }
    });
  }
}
displayNotifications();
function markRead(mainClass, actionButton) {
  mainClass.classList.remove("newNotification");
  actionButton.innerText = "Mark as Unread";
  displayNotifications();
}

function markUnread(mainClass, actionButton) {
  mainClass.classList.add("newNotification");
  actionButton.innerText = "Mark as Read";
  displayNotifications();
}

/*----- Upload File Button -----*/

let uploadFileWrappers = Array.from(
  document.querySelectorAll(".uploadFileWrapper")
);
uploadFileWrappers.forEach((uploadFileWrapper) => {
  let uploadButton = uploadFileWrapper.querySelector(".uploadButton");
  let uploadFeed = uploadFileWrapper.querySelector("#uploadFeed");
  uploadButton.addEventListener("click", () => {
    uploadFeed.click();
  });
});

/*----- Wishlist Button -----*/
let wishButton = document.querySelectorAll(".wishlist");
if (wishButton) {
  wishButton.forEach((e) => {
    let wishButtonIcon = e.querySelector(".wishlist i");
    e.addEventListener("click", () => {
      wishButtonIcon.classList.toggle("fas");
      wishButtonIcon.classList.toggle("far");
    });
  });
}

// // show path of input type file
// let myPath = document.getElementById('uploadContent');
// if (myPath) {
//     myPath.onchange = function () {
//         var fileName = this.value;
//         document.querySelector('.image-url').innerHTML = fileName;
//     };
// }

// // Preview Image of Profile :

// function showPreview(event) {
//     if (event.target.files.length > 0) {
//         var src = URL.createObjectURL(event.target.files[0]);
//         var preview = document.getElementById("profile-preview");
//         preview.src = src;
//         preview.style.display = "block";
//     }
// }

// // Toggler function of sidebar
// $(document).ready(function (jQuery) {
//     $(".toggleNavBtn").click(function () {
//         $(".siteWrapper").toggleClass("removeSideBar");
//     });
//     $(".toggleMobNav").click(function () {
//         $(".mobileMenu").toggleClass("show_nav");
//     });
// });

// /*product-detail-slider start here*/

jQuery(".product-detail-slider").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  items: 1,
  nav: true,
  dots: true,
});

// /*product-detail-slider end here*/

try {
  $(".tel").intlTelInput({
    separateDialCode: true,
    utilsScript: "../vendors/intel/utils.js",
  });
} catch (e) {
  console.log(e);
}

// lottie start
$(document).ready(function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("question_markA"),
    path: "../../assets/images/question_mark.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  });
});
// lottie start
$(document).ready(function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("check_iconA"),
    path: "../../assets/images/check_icon.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  });
});

// lottie start
$(document).ready(function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("question_mark"),
    path: "../../assets/images/question_mark.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  });
});
// lottie start
$(document).ready(function () {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("check_icon"),
    path: "../../assets/images/check_icon.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  });
});

$(".extra-fields-customer").click(function () {
  $(".customer_records").clone().appendTo(".customer_records_dynamic");
  $(".customer_records_dynamic .customer_records").addClass("single remove");
  $(".single .extra-fields-customer").remove();
  $(".single").append(
    '<a href="#" class="d-block mt-3 text-lg-end text-primary remove-field">Remove <i class="fas fa-minus-circle"></i></a>'
  );
  $(".customer_records_dynamic > .single").attr("class", "remove");

  $(".customer_records_dynamic input").each(function () {
    var count = 0;
    var fieldname = $(this).attr("name");
    $(this).attr("name", fieldname + count);
    count++;
  });
});

$(document).on("click", ".remove-field", function (e) {
  $(this).parent(".remove").remove();
  e.preventDefault();
});

$(".efc1").click(function () {
  $(".crs1").clone().appendTo(".crd1");
  $(".crd1 .crs1").addClass("single1 remove");
  $(".single1 .efc1").remove();
  $(".single1").append(
    '<a href="#" class="d-block mt-3 text-lg-end text-primary rf1">Remove <i class="fas fa-minus-circle"></i></a>'
  );
  $(".crd1 > .single1").attr("class", "remove");

  $(".crd1 input").each(function () {
    var count = 0;
    var fieldname = $(this).attr("name");
    $(this).attr("name", fieldname + count);
    count++;
  });
});

$(document).on("click", ".rf1", function (e) {
  $(this).parent(".remove").remove();
  e.preventDefault();
});
