
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

    $(document).ready(function () {
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
        function handleDropdownClick(buttonId, dropdownId) {
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

        // Toggle dropdown 1
        $('#dropdownButton1').on('click', function () {
            handleDropdownClick('#dropdownButton1', '#servicesDropdown1');
        });

        // Toggle dropdown 2
        $('#dropdownButton2').on('click', function () {
            handleDropdownClick('#dropdownButton2', '#servicesDropdown2');
        });

        // Toggle dropdown 3
        $('#dropdownButton3').on('click', function () {
            handleDropdownClick('#dropdownButton3', '#servicesDropdown3');
        });

        // Handle submenu toggles
        $('.dropdown-submenu > a.dropdown-toggle').on('click', function (e) {
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

    });


    $(document).ready(function () {
        // Initially set the active class on the first item or any desired default item
        $('.navbar-nav .nav-item').first().addClass('active');
    
        // Event listener for nav items
        $('.navbar-nav .nav-item').on('click', function () {
            // Remove 'active' class from all items
            $('.navbar-nav .nav-item').removeClass('active');
            // Add 'active' class to the clicked item
            $(this).addClass('active');
        });
    });


    $(document).ready(function () {
        // Scroll to top when the scrollUp button is clicked
        $('.scrollUp-btn a').on('click', function (e) {
            e.preventDefault(); // Prevent the default action of the link
    
            // Animate the scroll to top
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // Show the button after scrolling 100px
            $('.scrollUp-btn').fadeIn();
        } else {
            $('.scrollUp-btn').fadeOut();
        }
    });