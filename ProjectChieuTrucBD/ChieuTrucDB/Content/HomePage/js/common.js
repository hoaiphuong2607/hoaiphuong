$(document).ready(function () {
	/*$(".menu>li>ul>li").hover(function(){
		var hfirst = $(this).height();
		var h = $(this).children("ul").height();
		if(h==null){
			$(this).height(hfirst);
		}else{
			$(this).children("ul:first").css({visibility: "visible",display: "none"}).show(300);
			h+= 30;
			$(this).show(300).height(h);
						
		}
				
		},function(){
		     $(this).children('ul:first').css({visibility: "hidden",display: "none"});
			$(this).height('30'); 
		})
				
	$(".menu>li").click(function(e){
		 e.stopPropagation();
	    		var thisis = $(this);
	    		var flag = true;
	    		if($(this).hasClass("open"))
	    			flag = false;
	    		//$(this).toggleClass("active");
	    		//$(this).children("ul:first").css({visibility: "visible",display: "none"}).show(300);
	    		$("#nav li").each(function(key){
	    			if($(this).hasClass("open"))
	    				($(this).removeClass("open"));
	    			else{
	    				if(flag==true)
	    					$(thisis).addClass("open");
	    			}
	    		})
	    		
	    		
	   });

	$(document).click(function(){
		$("#nav li").each(function(key){
			if($(this).hasClass("open"))
				($(this).removeClass("open"));
			
		})
	});*/


    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        $(".view_info").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        $(".view_info").hide();
        return false;
    });

    $(".area").change(function () {
        var id_area = $(this).val();
        $.ajax({
            type: "post",
            url: '/distributor/ajax-province',
            data: { id: id_area },
            cache: false,
            success: function (data) {

                $("#select-province").html(data);

            },
            error: function () {
                alert('CĂ³ lá»—i xáº£y ra');
            }
        });
    })






});
function validEmail(v) {
    var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return (v.match(r) == null) ? false : true;
}
function loadGoogleMap(id) {
    $("#map_result").load("/distributor/detail?id=" + id);
}
function loadGoogleMapWarranty(id) {
    $("#map_result").load("/warranty/detail?id=" + id);
}
function setLang(lang) {
    jQuery.ajax({
        type: "POST", //PhÆ°Æ¡ng thá»©c gá»­i request lĂ  POST hoáº·c GET
        data: "lang=" + lang, //tham sá»‘ gá»­i kĂ¨m
        url: "/ajax/set-lang", //ÄÆ°á»ng dáº«n tá»›i nÆ¡i xá»­ lĂ½ request ajax
        success: function () { //hĂ m gá»i vá» khi thá»±c hiá»‡n thĂ nh cĂ´ng
            // mĂ£ lá»‡nh
            window.location.reload();
        }
    });
}
function actionSearch() {
    var keyword = $("input[name='keyword-search']").val();
    var url = '/product/search';
    if (keyword != '') url = url + '/keyword/' + keyword;
    window.location = url;
}




$(document).ready(function () {
    $('.banner-item').scrollToFixed({ marginTop: 127 });
});