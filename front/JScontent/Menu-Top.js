            $("#sidebar-shortcuts").empty().append($('<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large"></div><div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini"></div>'));
                        $("#sidebar-shortcuts-large").empty().append($('<button class="btn btn-success"><i class="ace-icon fa fa-signal"></i></button>')
                                                                    ,$('<button class="btn btn-info"><i class="ace-icon fa fa-pencil"></i></button>')
                                                                    ,$('<button class="btn btn-warning"><i class="ace-icon fa fa-users"></i></button>')
                                                                    ,$('<button class="btn btn-danger"><i class="ace-icon fa fa-cogs"></i></button>'));
			$("#sidebar-shortcuts-mini").empty().append($('<span class="btn btn-success"></span><span class="btn btn-info"></span><span class="btn btn-warning"></span><span class="btn btn-danger"></span>'));	
                        
            $("#top-menu").empty().append($('<li class="active open hover"><a href="index2.html"><i class="menu-icon fa fa-tachometer"></i> <span class="menu-text"> Dashboard </span></a> <b class="arrow"></b></li>')
                                            ,$('<li class="hover" id="menu1">')
                                            ,$('<li class="hover" id="menu2">')
                                            ,$('<li class="hover" id="menu3">')
                                            ,$('<li class="hover" id="menu4">'));   
                        $("#menu1").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-desktop"></i> <span class="menu-text">UI &amp; Elements </span> <b class="arrow fa fa-angle-down"></b></a>')
                                                    ,$('<b class="arrow"></b>')
                                                    ,$('<ul class="submenu" id="submenu1"></ul>'));   
                                    $("#submenu1").empty().append($('<li class="hover"><a href="typography.html"><i class="menu-icon fa fa-caret-right"></i> Typography</a><b class="arrow"></b></li>')
                                                                    ,$('<li class="hover"><a href="#" class="dropdown-toggle">'
                                                                        +'<i class="menu-icon fa fa-caret-right"></i> Three Level Menu <b class="arrow fa fa-angle-down"></b></a>'
                                                                        +'<b class="arrow"></b><ul id="Ssubmenu1" class="submenu"></ul></li>'));
                                                $("#Ssubmenu1").empty().append($('<li class="hover"><a href="#"><i class="menu-icon fa fa-leaf green"></i> Item #1</a> <b class="arrow"></b></li>')
                                                                                ,$('<li class="hover"><a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-pencil orange"></i> 4th level <b class="arrow fa fa-angle-down"></b></a>'
                                                                                    +'<b class="arrow"></b><ul id="SSsubmenu1" class="submenu"></ul></li>'));  
                                                            $("#SSsubmenu1").empty().append($('<li class="hover"><a href="#"><i class="menu-icon fa fa-plus purple"></i> Add Product</a> <b class="arrow"></b></li>')
                                                                                            ,$('<li class="hover"><a href="#"><i class="menu-icon fa fa-eye pink"></i> View Products</a> <b class="arrow"></b></li>'));                
			$("#menu2").empty().append($('<a href="widgets.html"><i class="menu-icon fa fa-list-alt"></i> <span class="menu-text"> Widgets </span></a> <b class="arrow"></b>'));
                        $("#menu3").empty().append($('<a href="calendar.html"><i class="menu-icon fa fa-calendar"></i>'
                                                    +'<span class="menu-text">Calendar <span class="badge badge-transparent tooltip-error" title="2 Important Events"> '
                                                    +'<i class="ace-icon fa fa-exclamation-triangle red bigger-130"></i></span></span></a> <b class="arrow"></b>'));
                        $("#menu3").empty().append($('<a href="#" class="dropdown-toggle"><i class="menu-icon fa fa-file-o"></i> <span class="menu-text">Other Pages <span class="badge badge-primary">5</span></span>'
                                                    +'<b class="arrow fa fa-angle-down"></b></a> <b class="arrow"></b>'
                                                    +'<ul id="submenu3" class="submenu"><ul>'));                    
                                    $("#submenu3").empty().append($('<li class="hover"><a href="faq.html"><i class="menu-icon fa fa-caret-right"></i> FAQ </a><b class="arrow"></b></li>')
                                                                    ,$('<li class="hover"><a href="error-404.html"><i class="menu-icon fa fa-caret-right"></i> Error 404 </a><b class="arrow"></b></li>')
                                                                    ,$('<li class="hover"><a href="error-500.html"><i class="menu-icon fa fa-caret-right"></i> Error 500 </a><b class="arrow"></b></li>')
                                                                    ,$('<li class="hover"><a href="grid.html"><i class="menu-icon fa fa-caret-right"></i> Grid </a><b class="arrow"></b></li>')
                                                                    ,$('<li class="hover"><a href="blank.html"><i class="menu-icon fa fa-caret-right"></i> Blank Page </a><b class="arrow"></b></li>'));        

						
							
						

						
							
						

						
							
						
					

					
						

						

						

						
					