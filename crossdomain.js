var redirect = function() {
  if (!GLANCE.Cobrowse.Visitor.inSession()) {
    window.location = "https://glancepro.online";
  }
  if (GLANCE.Cobrowse.Visitor.inSession()) {
    GLANCE.Cobrowse.Visitor.continueSessionAt({
      destination: "glancepro.online",
      oncomplete: function() {
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
