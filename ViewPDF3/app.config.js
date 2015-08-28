// NOTE object below must be a valid JSON
window.ViewPDF3 = $.extend(true, window.ViewPDF3, {
  "config": {
    "layoutSet": "navbar",
    "navigation": [
      {
        "title": "Home",
        "onExecute": "#home",
        "icon": "home"
      },
      {
        "title": "About",
        "onExecute": "#about",
        "icon": "info"
      },
      {
        "title": "pdf",
        "onExecute": "#pdf",
        "icon": "doc"
      }
    ]
  }
});