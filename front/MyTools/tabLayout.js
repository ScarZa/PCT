var TabLayout = function(content,numTab=1){
    this.content = content;
		this.numTab = numTab;
		var tab_name = content.split("#");console.log(tab_name)
    this.GetTL= function (){
            var layout = "<div class='row'>"+
							"<div id='sel_year' class='col-md-3 col-md-offset-9 form-group'></div>" +
							"<div class='row'>"+
            "<div class='col-xs-12 col-sm-12 widget-container-col'>"+

											'<div class="widget-box widget-color-blue" id="widget-box-1">'+
												'<div class="widget-header">'+
													'<h5 class="widget-title bigger lighter">'+
														'<i class="ace-icon fa fa-table"></i>'+
														'ตาราง'+
													'</h5>'+

													// '<div class="widget-toolbar widget-toolbar-light no-border">'+
													// 	'<select id="simple-colorpicker-1" class="hide">'+
													// 		'<option selected="" data-class="blue" value="#307ECC">#307ECC</option>'+
													// 		'<option data-class="blue2" value="#5090C1">#5090C1</option>'+
													// 		'<option data-class="blue3" value="#6379AA">#6379AA</option>'+
													// 		'<option data-class="green" value="#82AF6F">#82AF6F</option>'+
													// 		'<option data-class="green2" value="#2E8965">#2E8965</option>'+
													// 		'<option data-class="green3" value="#5FBC47">#5FBC47</option>'+
													// 		'<option data-class="red" value="#E2755F">#E2755F</option>'+
													// 		'<option data-class="red2" value="#E04141">#E04141</option>'+
													// 		'<option data-class="red3" value="#D15B47">#D15B47</option>'+
													// 		'<option data-class="orange" value="#FFC657">#FFC657</option>'+
													// 		'<option data-class="purple" value="#7E6EB0">#7E6EB0</option>'+
													// 		'<option data-class="pink" value="#CE6F9E">#CE6F9E</option>'+
													// 		'<option data-class="dark" value="#404040">#404040</option>'+
													// 		'<option data-class="grey" value="#848484">#848484</option>'+
													// 		'<option data-class="default" value="#EEE">#EEE</option>'+
													// 	'</select>'+
													// '</div>'+
												'</div>'+

												'<div class="widget-body">'+
													'<div class="widget-main no-padding"></div>'+
            "<div class='row'><div class='col-sm-12 col-xs-12'><div class='tabbable'>"
										+"<ul class='nav nav-tabs padding-12 tab-color-blue background-blue' id='myTab"+tab_name[1]+"'></ul>"
                                        +"<div class='tab-content' id='MyTabCont"+tab_name[1]+"'>"
                                        +"</div></div></div></div>"
            "<div align='center' id='Budget'></div><div id='contentGr'></div><br><div id='contentTB'></div>"+
            "</div></div></div></div></div>";
            
        $(this.content).empty().append(layout);
        for(var i=0;i < this.numTab;i++){
            $("#myTab"+tab_name[1]).append($("<li id='"+tab_name[1]+"l"+i+"'><a data-toggle='tab' href='#"+tab_name[1]+"c"+i+"'>ชื่อ tab "+i+"</a></li>"));
            
			$(".tab-content#MyTabCont"+tab_name[1]).append($("<div id='"+tab_name[1]+"c"+i+"' class='tab-pane'><p>เนื้อหา "+i+"</p></div>"));
			if(i==0){$("#"+tab_name[1]+"l0").addClass("active");$("#"+tab_name[1]+"c0").addClass("in active");}
			
        }
    }
}