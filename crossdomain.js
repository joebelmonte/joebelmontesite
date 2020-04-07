// var redirect = function() {
//   console.log("redirecting");
//   window.location = "https://glancepro.online";
// };
//
// window.addEventListener("load", event => {
//   document.getElementById("redirect").addEventListener("click", redirect);
// });
//
// GLANCE.Cobrowse.Visitor.addEventListener("sessionstart", () => {
//   GLANCE.Cobrowse.Visitor.continueSessionAt({
//     destination: "glancepro.online",
//     oncomplete: function() {
//       console.log("session continued on glancepro.online");
//     },
//     iewarningsuppressed: true
//   });
// });

function redirectCrossDomain() {
  console.log("in redirectCrossDomain");
  var params = { url: "https://glancepro.online/", target: "_self" };
  GLANCE.Cobrowse.Visitor.crossDomain(params);
}

function redirectPromptCrossDomain() {
  console.log("in redirectPromptCrossDomain");
  var params = { url: "https://glancepro.online/", target: "_self" };
  GLANCE.Cobrowse.VisitorUI.promptCrossDomain(params);
}

window.addEventListener("load", event => {
  document
    .getElementById("redirectCrossDomain")
    .addEventListener("click", redirectCrossDomain);
});

window.addEventListener("load", event => {
  document
    .getElementById("redirectPromptCrossDomain")
    .addEventListener("click", redirectPromptCrossDomain);
});
