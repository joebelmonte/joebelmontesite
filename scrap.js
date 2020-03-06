function prefixScript(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.currentScript.parentNode.insertBefore(
    newScript,
    document.currentScript
  );
  newScript.src = url;
}

function addCobrowseScript() {
  var theCobrowseScript = document.createElement("script");
  var visitorId = "example";
  var groupId = "20541";
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
