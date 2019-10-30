GLANCE.Cobrowse.Visitor.addEventListener("sessionstart");

var contSession = function() {
  GLANCE.Cobrowse.Visitor.continueSessionAt({
    destination: "glancepro.online",
    oncomplete: function() {
      console.log("session continued on glancepro.online");
    },
    iewarningsuppressed: true
  });
};

GLANCE.Cobrowse.Visitor.addEventListener("sessionstart", starting);
