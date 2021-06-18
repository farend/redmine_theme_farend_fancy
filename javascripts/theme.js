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
    $("a.help").attr("href", "http://guide.redmine.jp/");

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

// Function based on https://www.redmine.org/issues/21808#note-27 patch.
// collapsible sidebar jQuery plugin
(function($) {
  // main container this is applied to
  var main;
  // triggers show/hide
  var button;
  // the key to use in local storage
  // this will later be expanded using the current controller and action to
  // allow for different sidebar states for different pages
  var localStorageKey = 'redmine-sidebar-state';
  // true if local storage is available
  var canUseLocalStorage = function(){
    try {
      if('localStorage' in window){
        localStorage.setItem('redmine.test.storage', 'ok');
        var item = localStorage.getItem('redmine.test.storage');
        localStorage.removeItem('redmine.test.storage');
        if(item === 'ok') return true;
      }
    } catch (err) {}
    return false;
  }();
  // function to set current sidebar state
  var setState = function(state){
    if(canUseLocalStorage){
      localStorage.setItem(localStorageKey, state);
    }
  };
  var applyState = function(){
    if(main.hasClass('visible-sidebar')){
      setState('visible');
    } else {
      setState('hidden');
    }
  };
  var setupToggleButton = function(){
    button = $('#sidebar-switch-button');
    button.click(function(e){
      main.addClass("animate");
      main.toggleClass('visible-sidebar');
      applyState();
      e.preventDefault();
      return false;
    });
    applyState();
  };
  $.fn.collapsibleSidebar = function() {
    main = this;
    // determine previously stored sidebar state for this page
    if(canUseLocalStorage) {
      // determine current controller/action pair and use them as storage key
      var bodyClass = $('body').attr('class');
      if(bodyClass){
        try {
          localStorageKey += '-' + bodyClass.split(/\s+/).filter(function(s){
            return s.match(/(action|controller)-.*/);
          }).sort().join('-');
        } catch(e) {
          // in case of error (probably IE8), continue with the unmodified key
        }
      }
      var storedState = localStorage.getItem(localStorageKey);
      main.toggleClass('visible-sidebar', (storedState === 'visible' || !storedState));
    } else {
      main.toggleClass('visible-sidebar', true);
    }
    // draw the toggle button once the DOM is complete
    $(document).ready(setupToggleButton);
  };
}(jQuery));

window.addEventListener('DOMContentLoaded', function () {
  if (!$('#main').hasClass('nosidebar')) {
    if ($('#sidebar-switch-panel').length == 0) {
      $('#content').prepend('<div id="sidebar-switch-panel"><a id="sidebar-switch-button" href="#"><span class="arrow"></span></a></div>');
    }
    $('#main').collapsibleSidebar();
  }
});