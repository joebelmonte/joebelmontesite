var redirect = function() {
  // First check to see if a cobrowse session is active
  // If not, proceed with the redirect as normal
  if (!GLANCE.Cobrowse.Visitor.inSession()) {
    window.location = "https://glancepro.online";
  }
  // If a session is active, then call continueSessionAt
  if (GLANCE.Cobrowse.Visitor.inSession()) {
    GLANCE.Cobrowse.Visitor.continueSessionAt({
      destination: "glancepro.online",
      oncomplete: function() {
        // Use the oncomplete method to perform the redirect
        // once the cookie has been written
        window.location = "https://glancepro.online";
      },
      iewarningsuppressed: true
    });
  }
};

window.addEventListener("load", event => {
  document
    .getElementById("redirect-button")
    .addEventListener("click", redirect);
});
