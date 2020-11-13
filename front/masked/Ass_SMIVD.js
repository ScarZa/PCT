var AssSMIVD = function(content){
    this.content = content;
    this.GetSMIVD = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-success row' id='SMIVpart1'></div>"));
    }
}
