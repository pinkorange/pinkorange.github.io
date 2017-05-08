//JavaScript Document

$(function(){
	$('.banner_right .tk1').on({
		click:function(){
			$('.img1').attr("src","img/slide1-1.jpg");
			$('.img2').attr("src","img/slide1-2.jpg");
			$('.img3').attr("src","img/slide1-3.jpg");
		}
	});
	$('.banner_right .tk2').on({
		click:function(){
			$('.img1').attr("src","img/slide2-1.jpg");
			$('.img2').attr("src","img/slide2-2.jpg");
			$('.img3').attr("src","img/slide2-3.jpg");
		}
	});
	$('.banner_right .tk3').on({
		click:function(){
			$('.img1').attr("src","img/slide3-1.jpg");
			$('.img2').attr("src","img/slide3-2.jpg");
			$('.img3').attr("src","img/slide3-3.jpg");
		}
	});
	$('.banner_right .tk4').on({
		click:function(){
			$('.img1').attr("src","img/slide4-1.jpg");
			$('.img2').attr("src","img/slide4-2.jpg");
			$('.img3').attr("src","img/slide4-3.jpg");
		}
	});
	$('.banner_right .tk5').on({
		click:function(){
			$('.img1').attr("src","img/slide5-1.jpg");
			$('.img2').attr("src","img/slide5-2.jpg");
			$('.img3').attr("src","img/slide5-3.jpg");
		}
	});
	
	$('.img1').on({
		click:function(){
			$(".big").attr("src",function(v){
				return $('.img1').attr('src');
			});
		}
	});
	$('.img2').on({
		click:function(){
			$(".big").attr("src",function(v){
				return $('.img2').attr('src');
			});
		}
	});
	$('.img3').on({
		click:function(){
			$(".big").attr("src",function(v){
				return $('.img3').attr('src');
			});
		}
	});
})





