$(document).ready(function () {
  const $icons = $("video");
  const $2dIcon = $icons.filter(".twod");
  const $3dIcon = $icons.filter(".threed");
  const $videoEditingIcon = $icons.filter(".video-editing");
  const $webIcon = $icons.filter(".web");
  const $logoDesigning = $icons.filter(".logo-designing");
  const $designIcon = $icons.filter(".design");
  const $rectangles = $(".rect");
  const $desks = $(".desk");
  const $closeButton = $(".closebutton");
  const $texts = $(".text");
  const $circle1 = $(".maincircle");
  const $circle2 = $(".maincircle2");
  const $form = $("form");
  const $choose = $(".entekhab");
  const forms = [$form, $form, $form, "", "", ""];
  var numinp = document.getElementById("sec");
  var nkh = document.getElementById("noekhedmat");
  var cit = document.getElementById("checkit");
  const $computeContainer = $(".compute-container")

  const icons = [
    $2dIcon,
    $3dIcon,
    $videoEditingIcon,
    $webIcon,
    $logoDesigning,
    $designIcon,
  ];
  const opacities = [
    "opacity-3",
    "opacity-1",
    "opacity-02",
    "opacity-1",
    "opacity-3",
  ];
  const iconsHover = [
    "twod-hover",
    "threed-hover",
    "video-editing-hover",
    "web-hover",
    "logo-designing-hover",
    "design-hover",
  ];
  const textHover = [
    "twotxt-hover",
    "threetxt-hover",
    "videotxt-hover",
    "webtxt-hover",
    "logotxt-hover",
    "designtxt-hover",
  ];

  icons.forEach(function (icon, i) {
    icon.hover(function () {
      let opacityIndex = 0;
      for (let j = i + 1; j !== i; ) {
        if (j > icons.length - 1) {
          j = 0;
        }
        icons[j].toggleClass(opacities[opacityIndex]);
        opacityIndex++;
        if (j >= icons.length - 1) {
          j = 0;
        } else {
          j++;
        }
      }
    });
  });

  for (let index = 0; index < icons.length; index++) {
    const icon = icons[index];

    icon.on("click", function () {
      const $self = $(this);
      $choose.fadeOut();
      $circle2.fadeIn(function () {
        $circle1.fadeOut();
        if (forms[index]) {
          forms[index].fadeIn();
        }
      });
      $icons
        .filter(i => i !== index)
        .removeClass("transition04")
        .fadeOut(400, "linear");
      $(this).addClass(`${iconsHover[index]} scale`);
      $rectangles.eq(index).addClass(`rect${index + 1}-hover`);
      $desks.eq(index).addClass(`desk${index + 1}-hover`);
      $texts.eq(index).addClass(textHover[index]);
      $rectangles.each(function (i) {
        if (i !== index) {
          $(this).addClass(`rect${i + 1}-close transition12`);
        }
      });
      $closeButton.fadeIn();
      $closeButton.on("click", function () {
        $circle1.fadeIn(function () {
          $choose.fadeIn();
          $circle2.fadeOut();
          if (forms[index]) {
            forms[index].fadeOut(() => {
              $computeContainer.hide();
              nkh.value = "";  
            });
          }
        });

        $icons
          .filter(i => i !== index)
          .fadeIn(1200, "linear", function (e) {
            $(this).addClass("transition04");
          });
        $self.removeClass(`${iconsHover[index]} scale`);
        $rectangles.eq(index).removeClass(`rect${index + 1}-hover`);
        $desks.eq(index).removeClass(`desk${index + 1}-hover`);
        $texts.eq(index).removeClass(textHover[index]);
        $rectangles.each(function (i) {
          if (i !== index) {
            $(this).removeClass(`rect${i + 1}-close transition12`);
          }
        });
        $closeButton.fadeOut();
      });
    });
  }

  function mohasebeGheymat() {
    var sanie = numinp.value;
    var noeKhedmat = nkh.value;
    var gheymat = "";
    if (noeKhedmat == "Motiongraphic2d") {
      if (sanie > 0 && sanie <= 6) {
        gheymat = 500000;
      } else if (sanie >= 7 && sanie <= 30) {
        gheymat = sanie * 79000;
      } else if (sanie >= 31 && sanie <= 60) {
        gheymat = sanie * 74000;
      } else if (sanie >= 61) {
        gheymat = sanie * 70000;
      }
    } else if (noeKhedmat == "Logoanimation2d") {
      if (sanie > 0 && sanie <= 6) {
        gheymat = 500000;
      } else if (sanie >= 3 && sanie <= 10) {
        gheymat = sanie * 85000;
      } else if (sanie >= 10 && sanie <= 15) {
        gheymat = sanie * 80000;
      }
    } else if (noeKhedmat == "postermotion") {
      if (sanie > 0 && sanie <= 6) {
        gheymat = 350000;
      } else if (sanie >= 7 && sanie <= 30) {
        gheymat = sanie * 62000;
      } else if (sanie >= 31 && sanie <= 60) {
        gheymat = sanie * 58000;
      } else if (sanie >= 61) {
        gheymat = sanie * 53000;
      }
   }  else if (noeKhedmat == "Analys") {
      if (sanie > 0 && sanie <= 6) {
        gheymat = 700000;
      } else if (sanie >= 7 && sanie <= 30) {
        gheymat = sanie * 90000;
      } else if (sanie >= 31 && sanie <= 60) {
        gheymat = sanie * 87000;
      } else if (sanie >= 61) {
        gheymat = sanie * 80000;
      }
    }
    
    else {
      gheymat = "زمان نادرست وارد شده است.";
    }
    if (cit.checked == true) {
      gheymat += 1200000;
    }
    document.getElementById("gheymatt").innerHTML =
      parseInt(gheymat).toLocaleString();
  }

  function showDetails() {
    var i, classes;
    i = 2;
    classes = document.getElementsByClassName("showit");

    classes[0].style.display = "block";
    classes[1].style.display = "grid";
    classes[2].style.display = "inline";
    classes[3].style.display = "grid";
    classes[4].style.display = "inline";
    classes[5].style.display = "inline";
  }

  nkh.addEventListener("change", () => $computeContainer.show());
  numinp.addEventListener("input", mohasebeGheymat);
  cit.addEventListener("change", mohasebeGheymat);
  nkh.addEventListener("change", mohasebeGheymat);

  const allRanges = document.querySelectorAll(".range-wrap");
  allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
      setBubble(range, bubble);
    });

    // setting bubble on DOM load
    setBubble(range, bubble);
  });

  function setBubble(range, bubble) {
    const val = range.value;

    const min = range.min || 0;
    const max = range.max || 100;

    const offset = Number(((val - min) * 100) / (max - min));

    bubble.textContent = val;

    // yes, 14px is a magic number
    bubble.style.left = `calc(${offset}% - 14px)`;
  }


});
