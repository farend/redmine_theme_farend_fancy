$(function(){
  /* 外部リンクは新規ウィンドウで開く */
  $("a.external").attr("target","_blank");
  $("a.help").attr("target","_blank");
  $("div#footer a[href^='http://www.redmine.org/']").attr("target","_blank");

  /* 言語が日本語のときはヘルプのリンク先をRedmine.JPの日本語訳にする */
  $("html[lang='ja'] a.help").attr("href", "http://redmine.jp/guide/");
});
