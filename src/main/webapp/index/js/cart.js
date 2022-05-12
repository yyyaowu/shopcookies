
/**
 * 加入购物车
 */
function buy(goodid){

	$.post("/shopcookies_war_exploded/index/buy", {goodid:goodid}, function(data){
		if(data=="ok"){
			layer.msg("操作成功!", {time:800}, function(){
				location.reload();
			});
		}else if(data=="login"){
			alert("请登录后购买!");
			location.href="login.jsp";
		}else if(data=="empty"){
			alert("库存不足!");
			location.reload();
		}else{
			alert("请求失败!");
		}
	});
}
/**
 * 购物车减去
 */
function lessen(goodid){
	$.post("/shopcookies_war_exploded/index/lessen", {goodid:goodid}, function(data){
		if(data=="ok"){
			layer.msg("操作成功!", {time:800}, function(){
				location.href="http://localhost:8080/shopcookies_war_exploded/index/cart";
			});
		}else if(data=="login"){
			alert("请登录后操作!");
			location.href="login.jsp";
		}else{
			alert("请求失败!");
		}
	});
}
/**
 * 购物车删除
 */
function deletes(goodid){
	$.post("/shopcookies_war_exploded/index/delete", {goodid:goodid}, function(data){
		if(data=="ok"){
			layer.msg("删除成功!", {time:800}, function(){
				location.href="http://localhost:8080/shopcookies_war_exploded/index/cart";
			});
		}else if(data=="login"){
			alert("请登录后操作!");
			location.href="login.jsp";
		}else{
			alert("请求失败!");
		}
	});
}