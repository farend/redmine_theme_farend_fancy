$(document).ajaxSuccess(function() {
  // Put the title in the before content without breaking the tooltip (For issues/show time_entries and changesets tabs)
  $('body.controller-issues.action-show a[href*="activity"][title*=":"]:not([data-absolute-date*=":"])').each(function(_index, element){
    $(element).attr('data-absolute-date', element.title);
  });
});

$(function(){
  /* Change to open external link in another tab */
  $("a.external").attr("target","_blank");
  $("a.help").attr("target","_blank");
  $("div#footer a[href^='https://www.redmine.org/']").attr("target","_blank");

  if (($("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang")) == "ja") {
    /* When the language is Japanese, the link destination of help is Redmine.jp */
    $("a.help").attr("href", "https://redmine.jp/guide/");

    /* Show scope in search in search box placeholder */
    $("body").attr("class").match(/controller-[\S]+/);
    var controllerName = RegExp.lastMatch;
    var placeholderText = "Redmine内を検索"
    var placeholderStrings = [
      {controller: "controller-issues", text: "チケットを検索"},
      {controller: "controller-news", text: "ニュースを検索"},
      {controller: "controller-documents", text: "文書を検索"},
      {controller: "controller-changesets", text: "更新履歴を検索"},
      {controller: "controller-wiki_pages", text: "Wikiページを検索"},
      {controller: "controller-messages", text: "メッセージを検索"}
    ];
    jQuery.each(placeholderStrings, function() {
      if (controllerName === this.controller) {
        placeholderText = this.text;
        return false;
      }
    });
    $("#quick-search input#q").attr("placeholder", placeholderText);
  }

  // Put the title in the before content without breaking the tooltip
  $('a[href*="activity"][title*=":"]').each(function(_index, element){
    $(element).attr("data-absolute-date", element.title);
  });
});
