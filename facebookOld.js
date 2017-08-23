
	window.fbAsyncInit = function() {
		FB.init({
		  appId      : '1662158640465636',
		  xfbml      : true,
		  version    : 'v2.8'
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


			var gifShare1 = _('gifShare1').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://rawmartesuno.pruebas.link/planetas/planeta30.html',
               'og:title': 'Mr. Glass',
               'og:description': 'Description 1: The righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brothers keeper and the finder of lost' ,
               'og:og:image:width': '1100',
               'og:image:height': '630',
               'og:image': 'http://rawmartesuno.pruebas.link/img/gif1.jpg'
            }
					})
				}, function(response){});
			}

			var gifShare2 = _('gifShare2').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://rawmartesuno.pruebas.link/planetas/planeta30.html',
               'og:title': 'The Righteous Man',
               'og:description': 'Description 2: The righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brothers keeper and the finder of lost' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://rawmartesuno.pruebas.link/img/gif2.jpg'
            }
					})
				}, function(response){});
			}

			var gifShare3 = _('gifShare3').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://rawmartesuno.pruebas.link/planetas/planeta30.html',
               'og:title': 'The Valley of Darkness',
               'og:description': 'Description 3: The righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brothers keeper and the finder of lost' ,
               'og:og:image:width': '1200',
               'og:image:height': '630',
               'og:image': 'http://rawmartesuno.pruebas.link/img/gif3.jpg'
            }
					})
				}, function(response){});
			}
	