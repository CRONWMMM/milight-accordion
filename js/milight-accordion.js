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
				// 箭头方向改变
				$(self).find('span').css('transform','rotate(0deg)');
			}else{
				$(arr[0]).slideUp(180,function(){
					arr.pop();
				});

				// 箭头方向改变
				$('[data-target=' + arr[0] + ']').find('span').css('transform','rotate(0deg)');


				$(target).slideDown(180,function(){
					arr.push(target);
					canToggle = true;
				});

				// 箭头方向改变
				$(self).find('span').css('transform','rotate(90deg)');
			}	
		}

	});


	menu.click(function(){
		$('#mi-wrapper').slideToggle(180);
	});


	var time = void 0;
	$(window).resize(function(){
		if(time) clearTimeout(time);
		time = setTimeout(function(){
			if(menu.css('display') === 'none'){
				$('#mi-wrapper').show('fast');
			}else{
				$('#mi-wrapper').slideUp('fast');
			}
		},200);
	});


});