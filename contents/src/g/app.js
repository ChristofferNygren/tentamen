//A---------------------------------------------------------------------------------------------------------------------
$.get( "http://demo.edument.se/api/products", function(data) {
    console.log(data);
    let body = $("body");
    let ul = ('<ul>');
    body.prepend(ul);

    for(let key in data){
        let li = $('<li>');
        let product = $(li).prepend($('<p>').text(data[key].Name));
        let image = $(li).append($('<img>',{src:data[key].Image}));
        let btn = $(li).append($('<button>', {
            class: "btn", id: key,
            value: Math.floor(Math.random() * 10 + 1)}).html("Add to Cart"));
        $('body>ul').append(product, image, btn);

    }
        $(function () {
        $(".btn").on('click', function () {
            $(this).attr('id' , function () {
                let res = parseInt($(this).val());
                if(res < 1){
                    console.log("STOP");
                    $(this).prop("disabled",true);
                }
                else{
                    res--;
                    console.log(res);
                    $(this).val(res);
                    $.post( "http://localhost:3000/orders", { productId: $(this).attr('id'), noUnits: 0} );
                }
            })
        });
    });
});
//C---------------------------------------------------------------------------------------------------------------------
