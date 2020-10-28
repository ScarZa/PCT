$("#navbar").empty().append($('<div class="navbar-container ace-save-state" id="navbar-container"></div>'));
$("#navbar-container").empty().append($('<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">'
					+'<span class="sr-only">Toggle sidebar</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>')
                                        ,$('<div class="navbar-header pull-left"><a href="index.html" class="navbar-brand"><small><i class="fa fa-plus-circle"></i> Psychiatry-Clinic </small></a></div>')
                                        ,$('<div class="navbar-buttons navbar-header pull-right" role="navigation"><ul class="nav ace-nav" id="top-menu"></ul></div>'));

//////////////// Top Menu    
          
                $("head").prepend($("<title></title>").text("ระบบคลินิคทางจิตเวช"));
                $("ul#top-menu").empty().append($('<li class="grey dropdown-modal" id="Tasks"></li>')
                                                ,$('<li class="purple dropdown-modal" id="Notify"></li>')
                                                ,$('<li class="green dropdown-modal" id="Messages"></li>')
                                                ,$('<li class="light-blue dropdown-modal" id="profile"></li>')
                                                ,$('<li class="light-blue" id="login-tab"></li>'));
                        $("#login-tab").append($("<a href='#' id='login-button' title='เข้าสู่ระบบคลินิก'> <img src='images/Key.ico' width='18'>  เข้าสู่ระบบ </a>"));
                                        $("#login-button").attr("onClick","return popup('login.html', popup, 380, 420);");
                        $("#Tasks").hide();
                        $("#Notify").hide();
                        $("#Messages").hide();
                        $("#profile").hide();
                                      
                $.getJSON('../back/API/up_header.php',function (data) { console.log(data);
                        if(data.conn=='Connect_DB_false'){
                            $(".content-wrapper").append("<section class='content' id='sec_content'></section>");   
                                                    $("#sec_content").append("<div id='index_content'></div>");
                                                    $("#index_content").html("<center><h4><a href='#'>Please connect Database!!!!</a></h4></center>");
                                                        $("a").attr("onclick","return popup('content/set_conn_db.php?method="+data.check+"&host=main', popup, 400, 600);");
                        }else{   
                            if (data.status_user != '') {
                                $.cookie("username", data.username);
                                $.cookie("user", data.user);
                                $.cookie("depcode", data.depcode);
                                $.cookie("ward", data.ward);
                            $("#login-tab").hide(); 
                            $("#Tasks").show();
                            $("#Notify").show();
                            $("#Messages").show();
                            $("#profile").show();
                            $("li#Tasks").empty().append($('<a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="ace-icon fa fa-tasks"></i><span class="badge badge-grey">4</span></a>')
                                                                ,$('<ul id="top-list1" class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close"></ul>'));
                                        $("ul#top-list1").empty().append($('<li class="dropdown-header"><i class="ace-icon fa fa-check"></i>4 Tasks to complete</li>'
                                                                +'<li class="dropdown-content"><ul class="dropdown-menu dropdown-navbar">'
                                                                +'<li><a href="#"><div class="clearfix">'
                                                                +'<span class="pull-left">Software Update</span><span class="pull-right">65%</span>'
                                                                +'</div><div class="progress progress-mini">'
                                                                +'<div style="width:65%" class="progress-bar"></div></div></a></li></ul></li>'));
                            $("li#Notify").empty().append($('<a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="ace-icon fa fa-bell icon-animated-bell"></i><span class="badge badge-important">8</span></a>')
                                                                ,$('<ul id="top-list2" class="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close"></ul>')); 
                                        $("ul#top-list2").empty().append($('<li class="dropdown-header"><i class="ace-icon fa fa-exclamation-triangle"></i>8 Notifications</li>'
                                                                +'<li class="dropdown-content"><ul class="dropdown-menu dropdown-navbar navbar-pink">'
								+'<li><a href="#"><div class="clearfix">'
								+'<span class="pull-left"><i class="btn btn-xs no-hover btn-pink fa fa-comment"></i> New Comments</span>'
								+'<span class="pull-right badge badge-info">+12</span></div></a></li></ul></li>'));   
                            $("li#Messages").empty().append($('<a data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="ace-icon fa fa-envelope icon-animated-vertical"></i><span class="badge badge-success">5</span></a>')
                                                                ,$('<ul id="top-list3" class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close"></ul>'));
					$("ul#top-list3").empty().append($('<li class="dropdown-header"><i class="ace-icon fa fa-envelope-o"></i> 5 Messages</li>'
                                                                +'<li class="dropdown-content"><ul class="dropdown-menu dropdown-navbar">'
								+'<li><a href="#" class="clearfix"><img src="assets/images/avatars/avatar.png" class="msg-photo" alt="Alex\'s Avatar">'
								+'<span class="msg-body"><span class="msg-title"><span class="blue">Alex:</span>Ciao sociis natoque penatibus et auctor ...</span>'
                                                                +'<span class="msg-time"><i class="ace-icon fa fa-clock-o"></i> <span>a moment ago</span></span></span></a></li></ul></li>')); 
                            $("li#profile").empty().append($('<a data-toggle="dropdown" href="#" class="dropdown-toggle"><img class="nav-user-photo" src="images/person.png" alt="Jason\'s Photo" />'
								+'<span class="user-info"><small>ยินดีต้อนรับ,</small> '+data.name_user+'</span><i class="ace-icon fa fa-caret-down"></i></a>'
                                                                +'<ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close"></ul>'));  
                                        $("ul.user-menu").empty().append($('<li id="settihg-01"><a href="#" id="add-mapping"><i class="ace-icon fa fa-cog"></i> Mapping Settings</a></li>')
                                                                        ,$('<li id="settihg-02"><a href="#" id="add-user"><i class="ace-icon fa fa-cog"></i> User Settings</a></li>')
                                                                        ,$('<li><a href="profile.html"><i class="ace-icon fa fa-user"></i> Profile</a></li>')
                                                                        ,$('<li class="divider"></li>')
                                                                        ,$('<li><a id="logout" href="#"><i class="ace-icon fa fa-power-off"></i> Logout</a></li>'));  
                                    $("#logout").attr("onclick","loadAjax('#index_content','../back/API/logout.php',null,'logout','html');$.removeCookie('username');$.removeCookie('user');$.removeCookie('depcode');");                                    
                                    $("a#add-mapping").attr("onclick","AddMapping('#page-content')");
                                    $("a#add-user").attr("onclick","AddUser('#page-content')");
////////////// Left Menu
						
                                                                    $("#sidebar-shortcuts").empty().append($('<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large"></div><div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini"></div>'));
                                                                    $("#sidebar-shortcuts-large").empty().append($('<button class="btn btn-success"><i class="ace-icon fa fa-signal"></i></button>')
                                                                                                                ,$('<button class="btn btn-info"><i class="ace-icon fa fa-pencil"></i></button>')
                                                                                                                ,$('<button class="btn btn-warning"><i class="ace-icon fa fa-users"></i></button>')
                                                                                                                ,$('<button class="btn btn-danger"><i class="ace-icon fa fa-cogs"></i></button>'));
                                                                    $("#sidebar-shortcuts-mini").empty().append($('<span class="btn btn-success"></span><span class="btn btn-info"></span><span class="btn btn-warning"></span><span class="btn btn-danger"></span>'));	
                                                                    
                                                        $("#left-menu").empty().append($('<li class="active"><a href="index.html"><i class="menu-icon fa fa-tachometer"></i> <span class="menu-text"> Dashboard </span></a> <b class="arrow"></b></li>')
                                                                                        ,$('<li class="" id="menu1">')
                                                                                        ,$('<li class="" id="menu2">')
                                                                                        ,$('<li class="" id="menu3">')
                                                                                        ,$('<li class="" id="menu4">')
                                                                                        ,$('<li class="" id="menu5">')
                                                                                        ,$('<li class="" id="menu6">')
                                                                                        ,$('<li class="" id="menu7">')
                                                                                        ,$('<li class="" id="menu8">')
                                                                                        ,$('<li class="" id="menu9">')
                                                                                        );   
                                                                    $("#menu1").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-bed"></i> <span class="menu-text">ผู้ป่วยใน </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                                ,$('<b class="arrow"></b>')
                                                                                                ,$('<ul class="submenu" id="submenu1-1"></ul>'));   
                                                                                $("#submenu1-1").empty().append($('<li class=""><a href="#" id="interview"><i class="menu-icon fa fa-caret-right"></i> แบบแรกรับ</a><b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                                    +'<i class="menu-icon fa fa-caret-right"></i> IPD <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                    +'<b class="arrow"></b><ul id="Ssubmenu1-2" class="submenu"></ul></li>')
                                                                                                                , $('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                                    +'<i class="menu-icon fa fa-caret-right"></i> รายการส่งเคส <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                    + '<b class="arrow"></b><ul id="Ssubmenu1" class="submenu"></ul></li>'));
                                                                                $("#Ssubmenu1-2").empty().append($('<li class=""><a href="#"  id="SSsubmenu1-2"><i class="menu-icon fa fa-send green"></i> ผู้ป่วยใน</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#"  id="SSsubmenu1-3"><i class="menu-icon fa fa-send green"></i> SMI-V</a> <b class="arrow"></b></li>')
                                                                                                                    );
                                                                                            $("#Ssubmenu1").empty().append($('<li class=""><a href="#"  id="SSsubmenu1-1"><i class="menu-icon fa fa-send green"></i> เคสส่ง Consult</a> <b class="arrow"></b></li>')
                                                                                                                            ,$('<li class=""><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                                +'<b class="arrow"></b><ul id="SSsubmenu1" class="submenu"></ul></li>'));  
                                                                                                        $("#SSsubmenu1").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                                                                        ,$('<li class=""><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));          
                                                                                                                                        
                                                                                $("a#interview").attr("onclick", "TBInterviewIPD('#page-content')");
                                                                                $("a#SSsubmenu1-2").attr("onclick","TBRegisIPD('#page-content')");
                                                                                $("a#SSsubmenu1-1").attr("onclick", "TBConsultIPD('#page-content')");
                                                                                $("a#SSsubmenu1-3").attr("onclick", "TBSmivList('#page-content')");
                                                                    $("#menu2").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-beer"></i> <span class="menu-text">สุราและสารเสพติด </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                                ,$('<b class="arrow"></b>')
                                                                                                ,$('<ul class="submenu" id="submenu2"></ul>'));   
                                                                                $("#submenu2").empty().append($('<li class=""><a href="#" id="matrix_regis"><i class="menu-icon fa fa-caret-right"></i> รอลงทะเบียน</a><b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="matrix_list"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยในคลินิก</a><b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> Three Level Menu <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu2" class="submenu"></ul></li>'));
                                                                                                $("#Ssubmenu2").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-leaf green"></i> Item #1</a> <b class="arrow"></b></li>')
                                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                                +'<b class="arrow"></b><ul id="SSsubmenu2" class="submenu"></ul></li>'));  
                                                                                                        $("#SSsubmenu2").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                                                                        ,$('<li class=""><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));          
                                                                                                                                        
                                                                                $("a#matrix_regis").attr("onclick","TBMtrixRegis('#page-content')");
                                                                                $("a#matrix_list").attr("onclick","TBMtrixList('#page-content')");

                                                                $("#menu3").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-comments"></i> <span class="menu-text">สังคมสงเคราะห์ </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                ,$('<b class="arrow"></b>')
                                                                                ,$('<ul class="submenu" id="submenu3"></ul>'));   
                                                                $("#submenu3").empty().append($('<li class=""><a href="#" id="social_new"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยใหม่</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" id="social_regis"><i class="menu-icon fa fa-caret-right"></i> รอลงทะเบียน</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" id="social_list"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยในคลินิก</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> Three Level Menu <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu3" class="submenu"></ul></li>'));
                                                                                $("#Ssubmenu3").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-leaf green"></i> Item #1</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                +'<b class="arrow"></b><ul id="SSsubmenu3" class="submenu"></ul></li>'));  
                                                                                        $("#SSsubmenu3").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                                                        ,$('<li class=""><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));          
                                                                                                                        
                                                                                $("a#social_new").attr("onclick","TBnewSocial('#page-content')"); 
                                                                                $("a#social_regis").attr("onclick","TBSocialRegis('#page-content')");
                                                                                $("a#social_list").attr("onclick","TBSocialList('#page-content')");

                                                                $("#menu4").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-group"></i> <span class="menu-text">จิตเวชชุมชน </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                ,$('<b class="arrow"></b>')
                                                                                ,$('<ul class="submenu" id="submenu4"></ul>'));   
                                                                $("#submenu4").empty().append($('<li class=""><a href="#" id="community_new"><i class="menu-icon fa fa-caret-right"></i> รอลงทะเบียน</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" id="community_list"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยในคลินิก</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> Three Level Menu <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu4" class="submenu"></ul></li>'));
                                                                                $("#Ssubmenu4").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-leaf green"></i> Item #1</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                +'<b class="arrow"></b><ul id="SSsubmenu4" class="submenu"></ul></li>'));  
                                                                                        $("#SSsubmenu4").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                                                        ,$('<li class=""><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));          
                                                                                                                        
                                                                $("a#community_new").attr("onclick","TBCommuRegis('#page-content')"); 
                                                                $("a#community_list").attr("onclick","TBCommuList('#page-content')");

                                                                $("#menu5").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-medkit"></i> <span class="menu-text">เภสัช </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                ,$('<b class="arrow"></b>')
                                                                                ,$('<ul class="submenu" id="submenu5"></ul>'));   
                                                                $("#submenu5").empty().append($('<li class=""><a href="#" id="pharmacy_new"><i class="menu-icon fa fa-caret-right"></i> รอลงทะเบียน</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" id="pharmacy_list"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยในคลินิก</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> ประเมินยา HAD <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu5-1" class="submenu"></ul></li>'));
                                                                                $("#Ssubmenu5-1").empty().append($('<li class=""><a href="#" id="clozapine"><i class="menu-icon fa fa-leaf green"></i> Clozapine </a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="lithium"><i class="menu-icon fa fa-leaf green"></i> Lithium Carbonate </a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="carba"><i class="menu-icon fa fa-leaf green"></i> Carbamazepine </a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="sodium"><i class="menu-icon fa fa-leaf green"></i> Sodium Valproate </a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                +'<b class="arrow"></b><ul id="SSsubmenu5" class="submenu"></ul></li>'));  
                                                                                        $("#SSsubmenu5").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                                                        ,$('<li class=""><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));          
                                                                                                                        
                                                                $("a#pharmacy_new").attr("onclick","TBPharRegis('#page-content')"); 
                                                                $("a#pharmacy_list").attr("onclick", "TBPharList('#page-content')");
                                                                $("a#clozapine").attr("onclick", "TBClozapine('#page-content')");
                                                                $("a#lithium").attr("onclick", "TBLithium('#page-content')");
                                                                $("a#carba").attr("onclick", "TBCarba('#page-content')");
                                                                $("a#sodium").attr("onclick", "TBSodium('#page-content')");

                                                                $("#menu6").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-bullseye"></i> <span class="menu-text">นักจิตวิทยา </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                ,$('<b class="arrow"></b>')
                                                                                ,$('<ul class="submenu" id="submenu6"></ul>'));   
                                                                $("#submenu6").empty().append($('<li class=""><a href="#" id="psychology_new"><i class="menu-icon fa fa-caret-right"></i> รอลงทะเบียน</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" id="psychology_list"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยในคลินิก</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> Three Level Menu <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu6" class="submenu"></ul></li>'));
                                                                                $("#Ssubmenu6").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-leaf green"></i> Item #1</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                +'<b class="arrow"></b><ul id="SSsubmenu6" class="submenu"></ul></li>'));  
                                                                                        $("#SSsubmenu6").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                                                        ,$('<li class=""><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));          
                                                                                                                        
                                                                $("a#psychology_new").attr("onclick","TBPsychologyRegis('#page-content')"); 
                                                                $("a#psychology_list").attr("onclick","TBPsychologyList('#page-content')");


                                                                $("#menu7").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-exclamation-triangle red"></i> <span class="menu-text">ER </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                ,$('<b class="arrow"></b>')
                                                                                ,$('<ul class="submenu" id="submenu7"></ul>'));   
                                                                $("#submenu7").empty().append($('<li class=""><a href="#" id="ER_new"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยรับ Admit (ER)</a><b class="arrow"></b></li>')
                                                                                                // ,$('<li class=""><a href="#" id="social_regis"><i class="menu-icon fa fa-caret-right"></i> รอลงทะเบียน</a><b class="arrow"></b></li>')
                                                                                                // ,$('<li class=""><a href="#" id="social_list"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยในคลินิก</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> Three Level Menu <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu7" class="submenu"></ul></li>'));
                                                                                $("#Ssubmenu7").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-leaf green"></i> Item #1</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                                +'<b class="arrow"></b><ul id="SSsubmenu7" class="submenu"></ul></li>'));  
                                                                                        $("#SSsubmenu7").empty().append($('<li class=""><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                                                        ,$('<li class=""><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));          
                                                                                                                        
                                                                                $("a#ER_new").attr("onclick","TBnewER('#page-content')");

                                                                $("#menu8").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-plus-square green"></i> <span class="menu-text">OPD </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                ,$('<b class="arrow"></b>')
                                                                                ,$('<ul class="submenu" id="submenu8"></ul>'));   
                                                                $("#submenu8").empty().append($('<li class=""><a href="#" id="Depression"><i class="menu-icon fa fa-caret-right"></i> ประเมินซึมเศร้า</a><b class="arrow"></b></li>')
                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> คลินิกเด็ก <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu8-1" class="submenu"></ul></li>')
                                                                                                ,$('<li class=""><a href="#" class="dropdown-toggle">'
                                                                                                        +'<i class="menu-icon fa fa-caret-right"></i> คลินิกผู้สูงอายุ <b class="arrow fa fa-angle-down"></b></a>'
                                                                                                        +'<b class="arrow"></b><ul id="Ssubmenu8-2" class="submenu"></ul></li>')        
                                                                                                        );
                                                                                $("#Ssubmenu8-1").empty().append($('<li class=""><a href="#" id="snap4"><i class="menu-icon fa fa-leaf green"></i> SNAP-IV</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="CDI"><i class="menu-icon fa fa-leaf green"></i> CDI</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="DSI"><i class="menu-icon fa fa-leaf green"></i> DSI 300</a> <b class="arrow"></b></li>')
                                                                                                                );
                                                                                $("#Ssubmenu8-2").empty().append($('<li class=""><a href="#" id="MMSE"><i class="menu-icon fa fa-leaf green"></i> MMSE-Thai 2002</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="ADL"><i class="menu-icon fa fa-leaf green"></i> ADL</a> <b class="arrow"></b></li>')
                                                                                                                ,$('<li class=""><a href="#" id="NPIQ"><i class="menu-icon fa fa-leaf green"></i> NPI-Q thai</a> <b class="arrow"></b></li>')
                                                                                                                );        
                                                                                                                        
                                                                                $("a#Depression").attr("onclick","TBDepression('#page-content')");
                                                                                $("a#snap4").attr("onclick","TBSnap4('#page-content')");
                                                                                $("a#CDI").attr("onclick","TBCDI('#page-content')");
                                                                                $("a#DSI").attr("onclick","TBDSI('#page-content')"); 
                                                                                $("a#MMSE").attr("onclick","TBMMSE('#page-content')"); 
                                                                                $("a#ADL").attr("onclick","TBADL('#page-content')");
                                                                                $("a#NPIQ").attr("onclick", "TBNPIQ('#page-content')");
                                                                                
                                                                $("#menu9").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-fire red"></i> <span class="menu-text">งานโภชนาการ </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                                                ,$('<b class="arrow"></b>')
                                                                                ,$('<ul class="submenu" id="submenu9"></ul>'));   
                                                                $("#submenu9").empty().append($('<li class=""><a href="#" id="food_new"><i class="menu-icon fa fa-caret-right"></i> รอลงทะเบียน</a><b class="arrow"></b></li>')
                                                                                            ,$('<li class=""><a href="#" id="food_list"><i class="menu-icon fa fa-caret-right"></i> ผู้ป่วยในคลินิก</a><b class="arrow"></b></li>')               
                                                                                                );        
                                                                                                                        
                                                                                $("a#food_new").attr("onclick","TBFoodRegis('#page-content')");
                                                                                $("a#food_list").attr("onclick","TBFoodList('#page-content')");

                                                                    // $("#menu3").empty().append($('<a href="calendar.html"><i class="menu-icon fa fa-calendar"></i>'
                                                                    //                             +'<span class="menu-text">Calendar <span class="badge badge-transparent tooltip-error" title="2 Important Events"> '
                                                                    //                             +'<i class="ace-icon fa fa-exclamation-triangle red bigger-130"></i></span></span></a> <b class="arrow"></b>'));
                                                                    // $("#menu3").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-file-o"></i> <span class="menu-text">Other Pages <span class="badge badge-primary">5</span></span>'
                                                                    //                             +'<b class="arrow fa fa-angle-down"></b></a> <b class="arrow"></b>'
                                                                    //                             +'<ul id="submenu3" class="submenu"><ul>'));                    
                                                                    //             $("#submenu3").empty().append($('<li class=""><a href="faq.html"><i class="menu-icon fa fa-caret-right"></i> FAQ </a><b class="arrow"></b></li>')
                                                                    //                                             ,$('<li class=""><a href="error-404.html"><i class="menu-icon fa fa-caret-right"></i> Error 404 </a><b class="arrow"></b></li>')
                                                                    //                                             ,$('<li class=""><a href="error-500.html"><i class="menu-icon fa fa-caret-right"></i> Error 500 </a><b class="arrow"></b></li>')
                                                                    //                                             ,$('<li class=""><a href="grid.html"><i class="menu-icon fa fa-caret-right"></i> Grid </a><b class="arrow"></b></li>')
                                                                    //                                             ,$('<li class=""><a href="blank.html"><i class="menu-icon fa fa-caret-right"></i> Blank Page </a><b class="arrow"></b></li>'));        
                                                $("#settihg-01").hide();
                                                $("#settihg-02").hide();
                                                $("#menu1").hide();
                                                $("#menu2").hide();
                                                $("#menu3").hide();
                                                $("#menu4").hide();
                                                $("#menu5").hide();
                                                $("#menu6").hide();
                                                $("#menu7").hide();
                                                $("#menu8").hide();
                                                $("#menu9").hide();
                                                if (data.status_user == 'ADMIN' || data.depcode=='026') {
                                                    $("#settihg-01").show();
                                                    $("#settihg-02").show();
                                                    $("#menu1").show();
                                                    $("#menu2").show();
                                                    $("#menu3").show();
                                                    $("#menu4").show();
                                                    $("#menu5").show();
                                                    $("#menu6").show();
                                                    $("#menu7").show();
                                                    $("#menu8").show();
                                                    $("#menu9").show();
                                                }else if(data.status_user=='HOS' && data.depcode=='018'){
                                                    $("#menu5").show();
                                                }else if(data.status_user=='HOS' && (data.depcode=='009' || data.depcode=='005')){
                                                    $("#menu2").show();$("#menu4").show();
                                                }else if(data.status_user=='HOS' && data.depcode=='008'){
                                                    $("#menu3").show();
                                                // }else if(data.status_user=='HOS' && (data.depcode=='005' || data.depcode=='009')){
                                                //     $("#menu4").show();
                                                }else if(data.status_user=='HOS' && (data.depcode=='022' || data.depcode=='023' || data.depcode=='031' || data.depcode=='033' || data.depcode=='034')){
                                                    $("#menu1").show();
                                                }else if(data.status_user=='HOS' && data.depcode=='006'){
                                                    $("#menu6").show();
                                                }else if(data.status_user=='HOS' && data.depcode=='003'){
                                                    $("#menu7").show();
                                                }else if(data.status_user=='HOS' && data.depcode=='004'){
                                                    $("#menu8").show();
                                                }else if(data.status_user=='HOS' && data.depcode=='024'){
                                                    $("#menu9").show();
                                }
                                Page01("#page-content")
                                            }else if(data.status_user == ''){
                                                $("#login-tab").show(); 
                                            }
                        }
                });