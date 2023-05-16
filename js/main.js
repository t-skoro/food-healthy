$(document).ready(function () {

    /* --- FANCYBOX --- */
    Fancybox.bind("[data-fancybox]", {
        Thumbs: false,
        // отключение миниатюры
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },
    });

    /* --- CUSTOM SELECT --- */
    customSelect('select');

    /* --- OWLCAROUSEL --- */
    $('.products__cards').owlCarousel({
        margin: 24,
        items: 1,
        loop: true,
        smartSpeed: 800,
        dotsSpeed: 1200,
        // stagePadding: 40, - отображение соседних карточек
        center: true,
        responsive: {
            768: {
                items: 2,
                center: false
            },
            992: {
                items: 3,
                center: true
            },
            1200: {
                items: 3,
                center: true
            }
        }
    });

    // обрабатываем клик по кастомным кнопкам-стрелкам
    $('.arrow-prev').on('click', function () {
        $('.products__cards').trigger('prev.owl.carousel');
    });

    $('.arrow-next').on('click', function () {
        $('.products__cards').trigger('next.owl.carousel');
    });
});