var redirect = function() {
  console.log("redirecting");
  window.location = "https://glancepro.online";
};

window.addEventListener("load", event => {
  document.getElementById("redirect").addEventListener("click", redirect);
});

GLANCE.Cobrowse.Visitor.addEventListener("sessionstart", () => {
  GLANCE.Cobrowse.Visitor.continueSessionAt({
    destination: "glancepro.online",
    oncomplete: function() {
      console.log("session continued on glancepro.online");
    },
    iewarningsuppressed: true
  });
});
