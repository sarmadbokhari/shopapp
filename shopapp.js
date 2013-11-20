$(document).ready(function(){
    var $itemInput = $('input[name=checkListItem]');
    var $list = $('.list');

    function doSubmit(){
        var toAdd = $itemInput.val();
        $list.append("<div class='item'>" + toAdd + "</div>");
    }

    $('#submit').click(doSubmit);

/*Enter button*/
    $itemInput.on("keypress", function(e){
        if(e.keyCode === 13){
            submit();
            return false;
        }
    });

/*remove item*/
    $(document).on('click', '.item', function(){
        $(this).remove();
    });

});