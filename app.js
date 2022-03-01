$(document).ready(function (jq) {
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
            forms[index].fadeOut();
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
});
