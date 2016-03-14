$(document).ready(function(){
	
	function storageToLocal(key, items){
		localStorage[key] = JSON.stringify(items);
	};
	
	function getFromLocal(key){
		if(localStorage[key])
			return JSON.parse(localStorage[key]);
		else
			return [];
	}
	
	
	
	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth() + 1;
	var curr_year = d.getFullYear();
	
	
	function loadList(Item){
		$("li").remove();
		for(var i=0; i < Item.length; i++){
			$("#task-list").append("<li>"+ Item[i] + "<span class='data'>" + curr_date+"-"+ curr_month+"-" + curr_year +"</span>"+ "</li>");
		}
	}
	
	
	
	function printMassage(){
		var text = $(".some-text").val();
		item.push(text);
		$(".some-text").val("");
		loadList(item);
		storageToLocal("info", item);
	
	}
	
	var item = getFromLocal("info");
	//var item = [];
	var index;
	
	$(".add").click(function(){
		printMassage();
 	})
	
	$(".some-text").keydown(function(e){
		if(e.keyCode == 13){
			printMassage();
		}
	})
	
	loadList(item);
	
});