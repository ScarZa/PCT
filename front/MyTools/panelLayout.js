var PanelLayout = function (content, numTab = 1) {
  this.content = content;
  this.numTab = numTab;
  this.GetPnL = function () {
    var layout = '';
    for (var i = 0; i < this.numTab; i++) {
      layout += "<div class='col-sm-3 col-lg-3 widget-container-col' id='widget-container-col-11'>"
        + "<div class='widget-box collapsed' id='widget_box_" + i + "'>"
        + "<div class='widget-header widget-header-small'>"
        + "<div class='row'><div class='col-sm-8'><div class=''>"
        + "<span><img class='nav-user-photo col-sm-4' style='width:70px;height:50px;' id='pics-panel" + i + "'></span>"
        + "<b class='col-sm-8' id='patient-name" + i + "'></b></div></div>"
        + "<div class='widget-toolbar'>"
        +"<li class='widget-menu dropdown-content'>"
        +"<a data-toggle='dropdown' class='dropdown-toggle' href='#'><i class='ace-icon fa fa-bars'></i></a>"
        // +"<ul class='dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close'>"
        //   +"<li class='dropdown-content'>"
            +"<ul class='dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close'>"
        + "<li class='dropdown-content' id='menu-panel" + i + "'></li></ul>"
        //+ "</li></ul>"
              +"</li> "
        + "<a href='#' data-action='reload'><i class='ace-icon fa fa-refresh'></i></a> "
        + "<a href='#' data-action='collapse'><i class='ace-icon fa fa-chevron-up'></i></a> "
        + "<a href='#' data-action='fullscreen' class=''><i class='ace-icon fa fa-expand'></i></a>&nbsp;&nbsp;</div>"
        + "<div class='col-sm-12' id='head-panel" + i + "'></div></div></div>"
        + "<div class='widget-body'><div class='widget-main padding-4 scrollable' data-size='125'>"
        + "<div class='content' id='body-panel" + i + "'></div>"
        + "</div></div></div></div>";
    }
    $(this.content).empty().append(layout);
    // scrollables
    $('.scrollable').each(function () {
      var $this = $(this);
      $(this).ace_scroll({
        size: $this.attr('data-size') || 100,
        //styleClass: 'scroll-left scroll-margin scroll-thin scroll-dark scroll-light no-track scroll-visible'
      });
    });
    $('.scrollable-horizontal').each(function () {
      var $this = $(this);
      $(this).ace_scroll(
        {
          horizontal: true,
          styleClass: 'scroll-top',//show the scrollbars on top(default is bottom)
          size: $this.attr('data-size') || 500,
          mouseWheelLock: true
        }
      ).css({ 'padding-top': 12 });
    });

    $(window).on('resize.scroll_reset', function () {
      $('.scrollable-horizontal').ace_scroll('reset');
    });
  }

}