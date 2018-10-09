$(function(){
	$(".wxxcx").hover(function(){
		$(".xcx").show();
	},function(){
		$(".xcx").hide()
	});
	$(".wxgzh").hover(function(){
		$(".gzh").show();
	},function(){
		$(".gzh").hide()
	});
	$(".search_btn").click(function(){
		var keyword = $(".keyword").val().trim();
		if(keyword == ""){
            layer.alert('请输入您喜欢的关键词', {
            	title:'友情提示',
                icon: 3,
                skin: 'layer-ext-moon'
            })
			return;
		}
		window.open("http://liexin.zhixie.info/?fr=website&s="+keyword);
	});
	$(".keyword").bind("keyup",function (event) {
		if(event.keyCode == '13'){
            $(".search_btn").click();
		}
    })
})