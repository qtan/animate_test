$(document).ready(function () {
    //举个🌰
    animationHover("#hover", "tada");
    animationClick(".item2", "lightSpeedIn");
    //封装个hover              
    function animationHover(element, animation) {
        element = $(element);
        element.hover(
            function () {
                element.addClass('animated ' + animation);
            },
            function () {
                //wait for animation to finish before removing classes
                window.setTimeout(function () {
                    element.removeClass('animated ' + animation);
                }, 2000);
            }
        );
    };

    //click的
    function animationClick(element, animation) {
        element = $(element);
        element.click(
            function () {
                element.addClass('animated ' + animation);
                //wait for animation to finish before removing classes
                window.setTimeout(function () {
                    element.removeClass('animated ' + animation);
                }, 2000);
            }
        );
    };
});