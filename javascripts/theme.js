$(function(){
  /* 外部リンクは新規ウィンドウで開く */
  $("a.external").attr("target","_blank");
  $("a.help").attr("target","_blank");
  $("div#footer a[href^='http://www.redmine.org/']").attr("target","_blank");

  var lang = $("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang");
  if (lang == "ja") {
    /* 言語が日本語のときはヘルプのリンク先をRedmine.JPの日本語訳にする */
    $("a.help").attr("href", "http://redmine.jp/guide/");

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

    /* 言語が日本語のときは年月のドロップダウンの表示順を入れ替える */
    /* 対象はカレンダー、ガントチャート */
    if (controllerName == "controller-calendars" ||
        controllerName == "controller-gantts") {
      var $buttons = $("form#query_form p.buttons");
      var $year_select = $buttons.find("select#year");

      /* 月 の ドロップダウンを 年 の後ろに変更 */
      $year_select.after($buttons.find("select#month"));
      $year_select.after("\n");

      /* 月 の label は不要なので削除 */
      $buttons.find("label[for='month']").remove();

      /* 年 の label の位置をドロップダウンの後ろに変更 */
      if ($year_select.siblings("label[for='year']").length) {
        $year_select.after($year_select.siblings("label[for='year']"));
      }
      else {
        /* 年 の label がない場合は追加 */
        $year_select.after(
          $("<label>").attr("for", "year").text("年")
        );
      }
      $year_select.after("\n");
    }
  }
});
