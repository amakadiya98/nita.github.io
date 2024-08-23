$(document).ready(function () {
    var content = [
        { id: 1, text: "Niger", img: "./assets/images/input-flag1.svg" }, // Placeholder option
        { id: 2, text: "Côte d’Ivoire", img: "./assets/images/input-flag2.svg" },
        { id: 3, text: "Athens, OH, USA", img: "./assets/images/input-flag1.svg" },
        { id: 4, text: "Athens, TX, USA", img: "./assets/images/input-flag1.svg" },
        { id: 5, text: "Athens, AL, USA", img: "./assets/images/input-flag1.svg" }
    ];
    var content2 = [
        { id: 1, text: "Côte d’Ivoire", img: "./assets/images/input-flag2.svg" }, // Placeholder option
        { id: 2, text: "Athens", img: "./assets/images/input-flag2.svg" },
        { id: 3, text: "Athens, OH, USA", img: "./assets/images/input-flag2.svg" },
        { id: 4, text: "Athens, TX, USA", img: "./assets/images/input-flag2.svg" },
        { id: 5, text: "Athens, AL, USA", img: "./assets/images/input-flag2.svg" }
    ];
    var content3 = [
        { id: 1, text: "Vous recherchez une agence ?"}, // Placeholder option
        { id: 2, text: "Dapoya dans la gare de Rimbo"},
        { id: 3, text: "Dapoya dans la gare de STM" },
        { id: 4, text: "Kalgodin à côté de la gare de Rahimo"},
        { id: 5, text: "Cinkassi sur la voie nationale en face de BSIC dans la gare de STM "},
        {id:6 , text:"Kalgondi fase station OLA"}
    ];

    $(".js-single-select").select2({
        data: content,
        placeholder: 'Select a location',
        allowClear: true, 
        minimumInputLength: 0,
        width: "100%",
        templateResult: function (data) {
            if (!data.id) { return data.text; }
            var $result = $(
                '<span><img src="' + data.img + '" style="width:16px; height:16px; margin-right:10px; border-radius:50%" />' + data.text + '</span>'
            );
            return $result;
        },
        templateSelection: function (data) {
            if (!data.id) { return data.text; }
            var $selection = $(
                '<span><img src="' + data.img + '" style="width:16px; height:16px; margin-right:4px; border-radius:50%" />' + data.text + '</span>'
            );
            return $selection;
        }
    });
    $(".js-single-select2").select2({
        data: content2,
        placeholder: 'Select a location',
        allowClear: true, 
        minimumInputLength: 0,
        width: "100%",
        templateResult: function (data) {
            if (!data.id) { return data.text; }
            var $result = $('<span><img src="' + data.img + '" style="width:16px; height:16px; margin-right:10px; border-radius:50%" />' + data.text + '</span>');
            return $result;
        },
        templateSelection: function (data) {
            if (!data.id) { return data.text; }
            var $selection = $(
                '<span><img src="' + data.img + '" style="width:16px; height:16px; margin-right:4px; border-radius:50%" />' + data.text + '</span>'
            );
            return $selection;
        }
    });


    $(".js-single-select3").select2({
        data: content3,
        placeholder: 'Vous recherchez une agence ?',
        allowClear: true, 
        minimumInputLength: 0,
        width: "100%",
        templateResult: function (data) {
            if (!data.id) { return data.text; }
            var $result = $('<span>' + data.text + '</span>');
            return $result;
        },
        templateSelection: function (data) {
            if (!data.id) { return data.text; }
            var $selection = $(
                '<span>' + data.text + '</span>'
            );
            return $selection;
        }
    });
});











$(document).ready(function () {
    // Owl Carousel initialization
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Initially hide the multilevel dropdown section
    // $('.multilevel-dropdown-section').hide();

    // Toggle the multilevel dropdown section when the "Nos Services" link is clicked
    // $('#services').on('click', function (e) {
    //     e.preventDefault(); // Prevent the default action of the link
    //     $('.multilevel-dropdown-section').toggle(); // Show/Hide the dropdown section
    // });

    // Hide all dropdowns initially
    $('.services-dropdown').hide();
    $('.submenu-container').hide();

    // Function to handle the active class and toggle content
    function handleDropdownToggle(buttonId, dropdownId) {
        // Remove active class from all buttons
        $('.dropdown-btn').removeClass('active');
        // Hide all dropdowns and submenu containers
        $('.services-dropdown').hide();
        $('.submenu-container').hide();

        // Add active class to the clicked button
        $(buttonId).addClass('active');

        // Show the relevant dropdown content
        $(dropdownId).toggle();
    }

    // Add event listeners for click and hover
    $('#dropdownButton1').on('click mouseenter', function () {
        handleDropdownToggle('#dropdownButton1', '#servicesDropdown1');
        handleBorderClass();
    });

    $('#dropdownButton2').on('click mouseenter', function () {
        handleDropdownToggle('#dropdownButton2', '#servicesDropdown2');
        handleBorderClass();
    });

    $('#dropdownButton3').on('click mouseenter', function () {
        handleDropdownToggle('#dropdownButton3', '#servicesDropdown3');
        handleBorderClass();
    });

    // Handle submenu toggles
    $('.dropdown-submenu > a.dropdown-toggle').on('click mouseenter', function (e) {
        e.preventDefault();
        var $submenu = $(this).next('.dropdown-menu');
        var submenuHtml = $submenu.html();
        var $submenuParent = $(this).parent();
        var $siblings = $(this).parent().siblings().find('.dropdown-menu');

        // Display the submenu in the submenu-container
        $('.submenu-content').html(submenuHtml);
        $('.submenu-container').show();

        // Toggle the open class on the submenu parent
        $submenuParent.toggleClass('open');

        // Hide any open sibling submenus
        $siblings.hide();

        // Prevent the event from bubbling up
        e.stopPropagation();
    });

    $('#close-btn').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
        $('.multilevel-dropdown-section').hide(); // Hide the section
    });

    // Scroll to top when the scrollUp button is clicked
    $('.scrollUp-btn a').on('click', function (e) {
        e.preventDefault(); // Prevent the default action of the link

        // Animate the scroll to top
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // Show the button after scrolling 100px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollUp-btn').fadeIn();
        } else {
            $('.scrollUp-btn').fadeOut();
        }
    });
});






// ACTIVE LINK PART 

document.addEventListener("DOMContentLoaded", function () {

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var pageToNavId = {
        "index.html": "accueil",
        "servicesPage.html": "services",
        "mynitaPage.html": "mynita",
        "agencesPage.html": "agences",
        "articlesPage.html": "articles",
        "proposPage.html": "propos"
    };

    var activeNavId = pageToNavId[page];


    document.querySelectorAll('.nav-link').forEach(function (navLink) {
        navLink.classList.remove('active');
    });


    if (activeNavId) {
        document.getElementById(activeNavId).classList.add('active');
    } else if (path.includes('/portfolioDetails/')) {

        document.getElementById('work-nav').classList.add('active');
    } else {

        document.getElementById('welcome-nav').classList.add('active');
    }
});



// border adding

const dropdownButtons = document.querySelectorAll('.dropdown-btn');

const handleBorderClass = () => {
    const allButtons = document.querySelectorAll('.all-btn');
    const isActive = document.querySelector('.dropdown-btn.active');
    if (isActive) {
        allButtons.forEach(item => {
            item.classList.add('border-btn');
        });
    } else {
        allButtons.forEach(button => {
            button.classList.remove('border-btn');
        });
    }
};
dropdownButtons.forEach(button => {
    button.addEventListener('click', function () {
        handleBorderClass();
    });
});