
    function showPage(pageId) {
      // Hide every page section
      document.querySelectorAll('.page').forEach(function (page) {
        page.classList.remove('active');
      });
      // Show only the requested one
      document.getElementById(pageId).classList.add('active');

      // Update the active state on the top navbar links
      document.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
          link.classList.add('active');
        }
      });

      // Scroll to top whenever the page changes
      window.scrollTo(0, 0);
    }

    // Switches between the Login and Register forms inside the login page
    function showFormTab(tabId) {
      document.querySelectorAll('#login .tab-content').forEach(function (tab) {
        tab.classList.remove('active');
      });
      document.querySelectorAll('#login .tab-buttons button').forEach(function (btn) {
        btn.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
      event.target.classList.add('active');
    }
  