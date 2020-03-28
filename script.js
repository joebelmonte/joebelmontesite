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

function hideUserInput() {
  document.getElementById("user-input").style.display = "none";
}

function showLoader() {
  document.getElementById("user-feedback").style.display = "block";
  document.getElementById("visitor-id").innerHTML = document.getElementById(
    "visitorId"
  ).value;
  document.getElementById("group-id").innerHTML = document.getElementById(
    "groupId"
  ).value;
}

function sessionStarted() {
  console.log("the session has started");
  document.getElementById("loader").style.display = "none";
  document.getElementById("status-message").innerHTML = "";
}

function addSessionStartListener() {
  GLANCE.Cobrowse.Visitor.addEventListener("sessionstart", sessionStarted);
}

function submitClicked() {
  addCobrowseScript();
  hideUserInput();
  showLoader();
  setTimeout(addSessionStartListener, 2000);
}

window.onload = event => {
  document
    .getElementById("visitor-id-button")
    .addEventListener("click", submitClicked);
};
