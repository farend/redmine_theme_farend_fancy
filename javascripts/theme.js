$(function(){
  /* 外部リンクは新規ウィンドウで開く */
  $("a.external").attr("target","_blank");
  $("a.help").attr("target","_blank");
  $("div#footer a[href^='http://www.redmine.org/']").attr("target","_blank");

  var lang = $("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang");
  if (lang == "ja") {
    /* 言語が日本語のときはヘルプのリンク先をRedmine.JPの日本語訳にする */
    $("a.help").attr("href", "http://guide.redmine.jp/");

    /* 検索におけるスコープを検索ボックスのプレースホルダーに表示 */
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
});
