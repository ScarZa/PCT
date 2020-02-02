$("#navbar").empty().append($('<div class="navbar-container ace-save-state" id="navbar-container"></div>'));
$("#navbar-container").empty().append($('<div id="pull-left" class="navbar-header pull-left"></div><div id="pull-right" class="navbar-buttons navbar-header pull-right collapse navbar-collapse" role="navigation"></div>'
                                        +'<nav id="menu-pull-left" role="navigation" class="navbar-menu pull-left collapse navbar-collapse"></nav>'));
            $("#pull-left").empty().append($('<a href="index.html" class="navbar-brand"><small><i class="fa fa-leaf"></i> Ace Admin</small></a>')
                                            ,$('<button class="pull-right navbar-toggle navbar-toggle-img collapsed" type="button" data-toggle="collapse" data-target=".navbar-buttons,.navbar-menu">'
						+'<span class="sr-only">Toggle user menu</span> <img src="assets/images/avatars/user.jpg" alt="Jason\'s Photo" /></button>')
                                            ,$('<button class="pull-right navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#sidebar">'
						+'<span class="sr-only">Toggle sidebar</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>'));
            $("#pull-right").empty().append($('<ul id="ul-pull-right" class="nav ace-nav"></ul>')); 
                    $("#ul-pull-right").empty().append($('<li id="transparent" class="transparent dropdown-modal"></li><li id="transparent-min" class="light-blue dropdown-modal user-min"></li>'));
                            $("li#transparent").empty().append($('<a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="ace-icon fa fa-bell icon-animated-bell"></i></a>')
                                                                ,$('<div id="menu-right" class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close"><div class="tabbable"></div></div>'));
                                    $("div.tabbable").empty().append($('<ul id="bell" class="nav nav-tabs"></ul>')
                                                                    ,$('<div class="tab-content"></div>'));
                                            $("#bell").empty().append($('<li class="active"><a data-toggle="tab" href="#navbar-tasks">Tasks <span class="badge badge-danger">4</span></a></li>')
                                                                        ,$('<li><a data-toggle="tab" href="#navbar-messages"> Messages <span class="badge badge-danger">5</span></a></li>')); 
                                            $("div.tab-content").empty().append($('<div id="navbar-tasks" class="tab-pane in active"></div><div id="navbar-messages" class="tab-pane"></div>')); 
                                                    $("div#navbar-tasks").empty().append($('<ul class="dropdown-menu-right dropdown-navbar dropdown-menu"><li id="tasks-menu-right" class="dropdown-content"><li><li id="tasks-footer" class="dropdown-footer"></li></ul>'));
                                                                $("li#tasks-menu-right").empty().append($('<ul id="tasks-detail" class="dropdown-menu dropdown-navbar"></ul>'));
                                                                            $("#tasks-detail").empty().append($('<li><a href="#">'
														+'<div class="clearfix"><span class="pull-left">Software Update</span><span class="pull-right">65%</span></div>'
                                                                                                                +'<div class="progress progress-mini"><div style="width:65%" class="progress-bar"></div>'
														+'</div></a></li>')
                                                                                                            ,$('<li><a href="#">'
														+'<div class="clearfix"><span class="pull-left">Hardware Upgrade</span><span class="pull-right">35%</span></div>'
                                                                                                                +'<div class="progress progress-mini"><div style="width:35%" class="progress-bar progress-bar-danger"></div>'
														+'</div></a></li>')
                                                                                                            ,$('<li><a href="#">'
														+'<div class="clearfix"><span class="pull-left">Unit Testing</span><span class="pull-right">15%</span></div>'
                                                                                                                +'<div class="progress progress-mini"><div style="width:15%" class="progress-bar progress-bar-warning"></div>'
														+'</div></a></li>')
                                                                                                            ,$('<li><a href="#">'
														+'<div class="clearfix"><span class="pull-left">Bug Fixes</span><span class="pull-right">90%</span></div>'
                                                                                                                +'<div class="progress progress-mini progress-striped active"><div style="width:90%" class="progress-bar progress-bar-success"></div>'
														+'</div></a></li>'));
                                                                $("li#tasks-footer").empty().append($('<a href="#"> See tasks with details <i class="ace-icon fa fa-arrow-right"></i></a>'));
                                                    $("div#navbar-messages").empty().append($('<ul class="dropdown-menu-right dropdown-navbar dropdown-menu"><li id="messages-menu-right" class="dropdown-content"><li><li id="messages-footer" class="dropdown-footer"></li></ul>'));
                                                                $("li#messages-menu-right").empty().append($('<ul id="messages-detail" class="dropdown-menu dropdown-navbar"></ul>'));
                                                                            $("#messages-detail").empty().append($('<li><a href="#"><img src="assets/images/avatars/avatar.png" class="msg-photo" alt="Alex\'s Avatar" />'
														+'<span class="msg-body"> <span class="msg-title"> <span class="blue">Alex:</span> Ciao sociis natoque penatibus et auctor ...</span>'
                                                                                                                +'<span class="msg-time"> <i class="ace-icon fa fa-clock-o"></i> <span>a moment ago</span> </span></span></a></li>')
                                                                                                            ,$('<li><a href="#"><img src="assets/images/avatars/avatar3.png" class="msg-photo" alt="Susan\'s Avatar" />'
														+'<span class="msg-body"> <span class="msg-title"> <span class="blue">Susan:</span> Vestibulum id ligula porta felis euismod ...</span>'
                                                                                                                +'<span class="msg-time"> <i class="ace-icon fa fa-clock-o"></i> <span>20 minutes ago</span></span></span></a></li>')
                                                                                                            ,$('<li><a href="#"><img src="assets/images/avatars/avatar4.png" class="msg-photo" alt="Bob\'s Avatar" />'
														+'<span class="msg-body"><span class="msg-title"> <span class="blue">Bob:</span> Nullam quis risus eget urna mollis ornare ...</span>'
                                                                                                                +'<span class="msg-time"> <i class="ace-icon fa fa-clock-o"></i> <span>3:15 pm</span></span></span></a></li>')
                                                                                                            ,$('<li><a href="#"><img src="assets/images/avatars/avatar2.png" class="msg-photo" alt="Kate\'s Avatar" />'
														+'<span class="msg-body"><span class="msg-title"> <span class="blue">Kate:</span> Ciao sociis natoque eget urna mollis ornare ...</span>'
                                                                                                                +'<span class="msg-time"> <i class="ace-icon fa fa-clock-o"></i> <span>1:33 pm</span></span></span></a></li>')
                                                                                                            ,$('<li><a href="#"><img src="assets/images/avatars/avatar5.png" class="msg-photo" alt="Fred\'s Avatar" />'
														+'<span class="msg-body"><span class="msg-title"> <span class="blue">Fred:</span> Vestibulum id penatibus et auctor  ...</span>'
                                                                                                                +'<span class="msg-time"> <i class="ace-icon fa fa-clock-o"></i> <span>10:09 am</span></span></span></a></li>'));
                                                                $("li#messages-footer").empty().append($('<a href="inbox.html"> See all messages <i class="ace-icon fa fa-arrow-right"></i></a>'));
                            $("#transparent-min").empty().append($('<a data-toggle="dropdown" href="#" class="dropdown-toggle"><img class="nav-user-photo" src="assets/images/avatars/user.jpg" alt="Jason\'s Photo" />'
                                                                    +'<span class="user-info"><small>Welcome,</small> Jason</span> <i class="ace-icon fa fa-caret-down"></i></a>')
                                                                ,$('<ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close"></ul>'));
                                    $("ul.user-menu").empty().append($('<li><a href="#"> <i class="ace-icon fa fa-cog"></i> Settings</a></li>')
                                                                    ,$('<li><a href="profile.html"> <i class="ace-icon fa fa-user"></i> Profile</a></li>')
                                                                    ,$('<li class="divider"></li>')
                                                                    ,$('<li><a href="#"> <i class="ace-icon fa fa-power-off"></i> Logout</a></li>'));  
            $("#menu-pull-left").empty().append($('<ul class="nav navbar-nav"><li id="left-top-menu1"></li><li id="left-top-menu2"></li></ul><form id="navbar-search" class="navbar-form navbar-left form-search" role="search"></form>'));   
                    $("li#left-top-menu1").empty().append($('<a href="#" class="dropdown-toggle" data-toggle="dropdown"> Overview &nbsp; <i class="ace-icon fa fa-angle-down bigger-110"></i></a>')
                                                        ,$('<ul class="dropdown-menu dropdown-light-blue dropdown-caret">'
                                                            +'<li><a href="#"> <i class="ace-icon fa fa-eye bigger-110 blue"></i> Monthly Visitors</a></li>'
                                                            +'<li><a href="#"> <i class="ace-icon fa fa-user bigger-110 blue"></i> Active Users</a></li>'
                                                            +'<li><a href="#"> <i class="ace-icon fa fa-cog bigger-110 blue"></i> Settings</a></li></ul>'));
                    $("li#left-top-menu2").empty().append($('<a href="#"><i class="ace-icon fa fa-envelope"></i> Messages <span class="badge badge-warning">5</span></a>'));                                
                    $("#navbar-search").empty().append($('<div class="form-group"><input type="text" placeholder="search" /></div> '
                                                        +' <button type="button" class="btn btn-mini btn-info2"><i class="ace-icon fa fa-search icon-only bigger-110"></i></button>'));