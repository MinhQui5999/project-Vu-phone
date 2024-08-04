$(function () {
    //carousel
    $(".owl-slides").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            10000: {
                item: 1,
            },
        },
    });

    $('.article-carousel').owlCarousel({
        center: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            10000: {
                items: 2
            }
        }
    });

    $('.article-carousel-product').owlCarousel({
        center: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 2
            },
            1000: {
                items: 6
            },
            10000: {
                items: 12
            }
        }
    });
    $('.carousel-sub-product').owlCarousel({
        center: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            10000: {
                items: 6
            }
        }
    });


    //animmation
    AOS.init(
        {
            once: true,
        }
    );
    //button-croll to top
    $.backToTop({
        // background color
        backgroundColor: '#BE1E2D',

        // text color
        color: '#FFFFFF',
    });

    //stick menu
    $('.snazzymenu').snazzyMenu({
        theme: "",
    });

    //button-see-more
    $('#btn-seemore').on("click", function () {
        $(this).hide();
        $('.description-item-bottom').removeClass('d-none');
    })
    //galley-box
    $('.avatar-item').on("click", function () {
        let takeLink = $(this).attr('src');
        $('.main-avatar img').attr('src', takeLink)

    })
    //chose color products
    $('.item-color ul>li').on("click", function () {
        $('.item-color ul>li').removeClass("active-color-item");
        $(this).addClass("active-color-item");

        let takeLink = $(this).children('img').attr('src');
        $('.main-avatar img').attr('src', takeLink)


    })
    //chose  prices
    $('.price-option>li').on('click', function () {
        $('.price-option>li').removeClass("active-color-item");
        $(this).addClass("active-color-item");
        let takePrice = $(this).find(".price-item").text();
        // update price item
        $('.price-sub-product').text(takePrice);
    })
    //check info warrany
    $('.btn-info-item').on('click', function () {
        $('.result-waranty').addClass('d-none').html(`
         <h4>Thông Tin Bảo hành</h4>
                    <table>
                        <tr>
                            <td>Tên Khách:</td>
                            <td id="customer-name">Nguyễn Văn A</td>
                        </tr>
                        <tr>
                            <td>Tên Sản Phẩm:</td>
                            <td id="product-name">iPhone 15promax-512GB</td>
                        </tr>
                        <tr>
                            <td>Serial No/ IMEI:</td>
                            <td id="item-imei">12345678</td>
                        </tr>

                        <tr>
                            <td>Ngày mua/ Ngày sửa:</td>
                            <td id="date-buy">1/1/2024</td>
                        </tr>

                        <tr>
                            <td>Thời Gian Bảo Hành:</td>
                            <td id="Waranty"><span>12</span> Tháng</td>
                        </tr>
                        <tr>
                            <td>Thời Gian Bảo Hành Còn Lại:</td>
                            <td id="remaining-warranty "><span>8</span> Tháng</td>
                        </tr>
                    </table>
        `);
        $('.result-waranty-wrong').addClass('d-none').html(`<h4>Thông Tin Không Chính Xác </h4>`)
        let iMEIInput = $('.input-info-item').val();
        let iMEIExactly = $('#item-imei').text();
        if (iMEIInput !== iMEIExactly) {
            $('.result-waranty-wrong').removeClass('d-none');
            $('.result-waranty').addClass('d-none')
        } else {
            $('.result-waranty').removeClass('d-none');
            $('.result-waranty-wrong').addClass('d-none');
            
        }
       


    })

});