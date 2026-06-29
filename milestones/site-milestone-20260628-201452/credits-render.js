(function () {
  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function listToText(items) {
    return items.map(escapeHtml).join(", ");
  }

  function renderOlpCredits(targetId, options) {
    var opts = options || {};
    var root = document.getElementById(targetId);
    var data = window.OLP_CREDITS;

    if (!root || !data) {
      return;
    }

    var title = opts.title || "Selected Credits";
    var lead = opts.lead || "";

    root.innerHTML = ""
      + "<h2>" + escapeHtml(title) + "</h2>"
      + (lead ? "<p class=\"credits-lead\">" + escapeHtml(lead) + "</p>" : "")
      + "<div class=\"credits-grid\">"
      + "<article class=\"credit-card\"><h3>Writing (IMDb: " + data.roleCounts.writer + ")</h3><p>" + listToText(data.selectedCredits.writing) + "</p></article>"
      + "<article class=\"credit-card\"><h3>Directing (IMDb: " + data.roleCounts.director + ")</h3><p>" + listToText(data.selectedCredits.directing) + "</p></article>"
      + "<article class=\"credit-card\"><h3>Production (IMDb: " + data.roleCounts.producer + ")</h3><p>" + listToText(data.selectedCredits.production) + "</p></article>"
      + "<article class=\"credit-card\"><h3>Music and Composer (IMDb: " + data.roleCounts.composer + ")</h3><p>" + listToText(data.selectedCredits.music) + "</p></article>"
      + "</div>"
      + "<p class=\"credit-note\">Reference: <a href=\"" + escapeHtml(data.imdbUrl) + "\" target=\"_blank\" rel=\"noopener noreferrer\">IMDb profile</a></p>";
  }

  window.renderOlpCredits = renderOlpCredits;
})();
