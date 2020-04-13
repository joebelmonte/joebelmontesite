console.log("agentside.js loaded");

function loadAgentViewer() {
  event.preventDefault();
  var sessionKey = document.getElementById("sessionKey").value;
  var site = `https://www.glance.net/agentjoin/AgentView.aspx?VisitorId=${sessionKey}&wait=1`;
  document.getElementsByName("iFrameName")[0].src = site;
}

window.addEventListener("load", event => {
  document.getElementById("Submit").addEventListener("click", loadAgentViewer);
});
