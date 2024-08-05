
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
    $('.multilevel-dropdown-section').hide();

    // Toggle the multilevel dropdown section when the "Nos Services" link is clicked
    $('#services-nav').on('click', function (e) {
        e.preventDefault(); // Prevent the default action of the link
        $('.multilevel-dropdown-section').toggle(); // Show/Hide the dropdown section
    });

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
    });

    $('#dropdownButton2').on('click mouseenter', function () {
        handleDropdownToggle('#dropdownButton2', '#servicesDropdown2');
    });

    $('#dropdownButton3').on('click mouseenter', function () {
        handleDropdownToggle('#dropdownButton3', '#servicesDropdown3');
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

    // Initially set the active class on the first item or any desired default item
    $('.navbar-nav .nav-item').first().addClass('active');

    // Event listener for nav items
    $('.navbar-nav .nav-item').on('click ', function () {
        // Remove 'active' class from all items
        $('.navbar-nav .nav-item').removeClass('active');
        // Add 'active' class to the clicked item
        $(this).addClass('active');
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
