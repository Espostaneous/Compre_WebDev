$(document).ready(function() {
    const contentDiv = $('#content');
    
    // Initial content to display when the SPA loads
    contentDiv.load('views/home.html');
    
    // Handle navigation links
    $('nav a').on('click', function(event) {
        event.preventDefault();
        
        const target = $(this).attr('href').substr(1); // Remove the '#' symbol
        loadContent(target);
    });
    
    // Function to load content into the main container
    function loadContent(viewName) {
        contentDiv.fadeOut(200, function() {
            contentDiv.load(`views/${viewName}.html`, function() {
                contentDiv.fadeIn(200);
            });
        });
    }
});


 // Function to update the URL and content
 function navigateTo(path) {
    // Use pushState to update the URL without triggering a page reload
    history.pushState(null, null, path);

    // Load content based on the path (you would replace this with your own logic)
    loadContent(path);
  }

  // Function to load content based on the path
  function loadContent(path) {
    // Replace this with your own logic to load content dynamically
    $('#content').html('Content for path: ' + path);
  }

  // Example: handle clicks on links
  $(document).on('click', 'a', function (event) {
    // Get the href attribute of the clicked link
    var path = $(this).attr('href');
    if (!path) return;

    // Allow external links (absolute URLs, protocol-relative, mailto:, tel:) to behave normally
    if (path.indexOf('://') !== -1 || path.indexOf('mailto:') === 0 || path.indexOf('tel:') === 0) {
      return; // don't intercept external links
    }

    // Prevent the default link behavior for internal navigation and use SPA navigation
    event.preventDefault();

    // Update the URL and content
    navigateTo(path);
  });

  // Example: handle back/forward buttons
  $(window).on('popstate', function () {
    // Load content based on the current URL
    loadContent(location.pathname);
  });

  // Load initial content based on the current URL
  loadContent(location.pathname);
  
$('nav a').on('click', function(event) {
    $('nav a').removeClass('app-nav-btn-active');
    $(this).addClass('app-nav-btn-active');
});