var contSession = function() {
  GLANCE.Cobrowse.Visitor.continueSessionAt({
    destination: "glancepro.online",
    oncomplete: function() {
      console.log("session continued on glancepro.online");
    },
    iewarningsuppressed: true
  });
};

window.addEventListener("load", event => {
  document
    .getElementById("redirect-button")
    .addEventListener("click", contSession);
});

window.onload = event => {
  document
    .getElementById("redirect-button")
    .addEventListener("click", contSession);
};
