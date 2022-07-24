$(document).ready(function(){

    $('form').on('submit',function(){
        var item = $('form input');
        var todo = {item: item.val().trim()};
        alert(item.val()+"+");
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success:function(data){
                location.reload();
            }
        });
             
        return false;
    });

    $('li').on('click',function(){
        var item = $(this).text().trim();
        alert(item+"?");
        $.ajax({
            type: 'DELETE',
            url: '/todo/'+item,
            success:function(data){
                location.reload();
            }
        });
          
    });
});