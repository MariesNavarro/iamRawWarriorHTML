	window.fbAsyncInit = function() {
		FB.init({
		  appId      : '964841436987553',
		  xfbml      : true,
		  version    : 'v2.10'
		});
		FB.AppEvents.logPageView();
		};

		(function(d, s, id){
		 var js, fjs = d.getElementsByTagName(s)[0];
		 if (d.getElementById(id)) {return;}
		 js = d.createElement(s); js.id = id;
		 js.src = "//connect.facebook.net/en_US/sdk.js";
		 fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	setTimeout(function(){
		var cosmicShare1 = _('cosmicShare1').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=0',
						 'og:title': 'Cosmics: Episode 1',
						 'og:description': 'See all episodes on: iamrawwarrior.com',
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic1.jpg'
					}
				})
			}, function(response){});
		}

		var cosmicShare2 = _('cosmicShare2').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=1',
						 'og:title': 'Cosmics: Episode 2',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic2.jpg'
					}
				})
			}, function(response){});
		}

		var cosmicShare3 = _('cosmicShare3').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=2',
						 'og:title': 'Cosmics: Episode 3',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic3.jpg'
					}
				})
			}, function(response){});
		}

		var cosmicShare4 = _('cosmicShare4').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=3',
						 'og:title': 'Cosmics: Episode 4',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic4.jpg'
					}
				})
			}, function(response){});
		}

		var cosmicShare5 = _('cosmicShare5').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=4',
						 'og:title': 'Cosmics: Episode 5',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic5.jpg'
					}
				})
			}, function(response){});
		}

		var cosmicShare6 = _('cosmicShare6').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=5',
						 'og:title': 'Cosmics: Episode 6',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic6.jpg'
					}
				})
			}, function(response){});
		}

		var cosmicShare7 = _('cosmicShare7').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'hhttp://iamrawwarrior.com/cosmics.html?cosmic=6',
						 'og:title': 'Cosmics: Episode 7',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic7.jpg'
					}
				})
			}, function(response){});
		}

		var cosmicShare8 = _('cosmicShare8').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=7',
						 'og:title': 'Cosmics: Episode 8',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic8.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare9 = _('cosmicShare9').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=8',
						 'og:title': 'Cosmics: Episode 9',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic9.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare10 = _('cosmicShare10').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=9',
						 'og:title': 'Cosmics: Episode 10',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic10.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare11 = _('cosmicShare11').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=10',
						 'og:title': 'Cosmics: Episode 11',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic11.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare12 = _('cosmicShare12').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=11',
						 'og:title': 'Cosmics: Episode 12',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic12.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare13 = _('cosmicShare13').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=12',
						 'og:title': 'Cosmics: Episode 13',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic13.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare14 = _('cosmicShare14').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=13',
						 'og:title': 'Cosmics: Episode 14',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic14.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare15 = _('cosmicShare15').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=14',
						 'og:title': 'Cosmics: Episode 15',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic15.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare16 = _('cosmicShare16').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=15',
						 'og:title': 'Cosmics: Episode 16',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic16.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare17 = _('cosmicShare17').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=16',
						 'og:title': 'Cosmics: Episode 17',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic17.jpg'
					}
				})
			}, function(response){});
		}
		var cosmicShare18 = _('cosmicShare18').onclick = function(){
			FB.ui({
				display: 'popup',
				method: 'share_open_graph',
				action_type: 'og.shares',
				action_properties: JSON.stringify({
					object : {
						'og:url': 'http://iamrawwarrior.com/cosmics.html?cosmic=17',
						 'og:title': 'Cosmics: Episode 18',
						 'og:description': 'See all episodes on: iamrawwarrior.com' ,
						 'og:og:image:width': '1300',
						 'og:image:height': '630',
						 'og:image': 'http://iamrawwarrior.com/img/share/cosmic18.jpg'
					}
				})
			}, function(response){});
		}
	},1200);
