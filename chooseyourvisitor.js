// START CROSSDOMAIN

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

// START ADDING SCRIPT TAG

// function prefixScript(url, onloadFunction) {
//   var newScript = document.createElement("script");
//   newScript.onerror = loadError;
//   if (onloadFunction) {
//     newScript.onload = onloadFunction;
//   }
//   document.currentScript.parentNode.insertBefore(
//     newScript,
//     document.currentScript
//   );
//   newScript.src = url;
// }

function addCobrowseScript() {
  var theCobrowseScript = document.createElement("script");
  var visitorId = document.getElementById("visitorId").value;
  var groupId = document.getElementById("groupId").value;
  theCobrowseScript.setAttribute("id", "glance-cobrowse");
  theCobrowseScript.setAttribute("type", "text/javascript");
  theCobrowseScript.setAttribute("data-groupid", groupId);
  theCobrowseScript.setAttribute("data-site", "staging");
  theCobrowseScript.setAttribute("charset", "UTF-8");
  theCobrowseScript.setAttribute("data-visitorid", visitorId);
  theCobrowseScript.setAttribute("data-presence", "on");
  theCobrowseScript.setAttribute(
    "src",
    `https://www.glancecdn.net/cobrowse/CobrowseJS.ashx?group=${groupId}&site=staging`
  );
  document.head.append(theCobrowseScript);
}

window.onload = event => {
  document
    .getElementById("visitor-id-button")
    .addEventListener("click", addCobrowseScript);
};
