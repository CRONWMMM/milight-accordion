$(function(){

	var menu = $('#main-con');
		arr = [],											// 创建一个数组用来存放需要需要折叠的模块
		canToggle = true;
		miAccordion = $('#milight-accordion'),
		controllers = $('#milight-accordion > li[data-target]');

	controllers.click(function(){
		/**
			var self = this;
			var target = $(this).attr('data-target');
			$(target).slideToggle('fast');
		 */

		
		if(canToggle){
			canToggle = false;
			var self = this,
				 target = $(this).attr('data-target');

			if(arr[0] === target){
				$(arr[0]).slideUp(180,function(){
					arr.pop();
					canToggle = true;
				});
			}else{
				$(arr[0]).slideUp(180,function(){
					arr.pop();
				});
				$(target).slideDown(180,function(){
					arr.push(target);
					canToggle = true;
				});
			}	
		}

	});


	menu.click(function(){
		$('#mi-wrapper').slideToggle(180);
	});


});