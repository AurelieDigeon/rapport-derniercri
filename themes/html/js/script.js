document.addEventListener("DOMContentLoaded", function(event) {
  // toc and burger
  var burger = document.getElementById('hamburger')
  var nav = document.getElementsByTagName('nav')[0]
  var body = document.getElementsByTagName('body')[0]

  burger.onclick = function() {
    if (burger.getAttribute('class') == null) {
      burger.className = 'opened_burger'
      nav.className = 'toc_mobile_on scroll'
      body.className = 'noscroll'
    }
    else {
      burger.removeAttribute('class')
      nav.removeAttribute('class')
      body.removeAttribute('class')
    }
  }

  function recTocMaker(contener) {
    var content = []
    for (var i=0; i < contener.length; ++i) {
      var name = contener[i].getElementsByTagName('a')[0]
      var under = contener[i].getElementsByTagName('ul')
      content.push({
        name: name,
        offset: $(name.getAttribute('href')).offset().top - $(name.getAttribute('href')).height(), // JQuery
        under: under.length > 0 ? recTocMaker(under[0].children) : undefined,
        current: under.length > 0 ? 0 : undefined
      })}
      return content
    }

    var toc = document.getElementById('toc').getElementsByTagName('ul')[0]
    content_toc = recTocMaker(toc.children)
    select_toc = undefined
    window.onscroll = function(scroll) {
      for (var i=content_toc.length - 1; i >= 0; --i) {
        if (content_toc[i].offset <= (scroll.pageY)) {
          if (content_toc[select_toc] != undefined) {
            content_toc[select_toc].name.removeAttribute('class')
          }
          select_toc = i
          content_toc[i].name.className = 'toc_selected'
          break
        }
      }
  };

  });
