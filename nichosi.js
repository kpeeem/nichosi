
(function($){
    jQuery.fn.nichosi = function(){
        var make = function(){
            // реализация работы метода с отдельным элементом страницы
            $("body").append('<div class="nichosi"></div>');

            $(this).click(
                function(evt){
                    if (evt.altKey)
                        $(".nichosi").toggleClass("active");

                }
            )
        };

        return this.each(make);

    };
})(jQuery);