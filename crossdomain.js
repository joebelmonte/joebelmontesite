var redirect = function() {
  console.log("redirecting");
  window.location = "https://glancepro.online";
};

window.addEventListener("load", event => {
  console.log("the page loaded");
  document.getElementById("redirect").addEventListener("click", redirect);
});

var contSession = function() {
  GLANCE.Cobrowse.Visitor.continueSessionAt({
    destination: "glancepro.online",
    oncomplete: function() {
      console.log("session continued on glancepro.online");
    },
    iewarningsuppressed: true
  });
};
GLANCE.Cobrowse.Visitor.addEventListener("sessionstart", contSession);
