
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

			var elementShare1 = _('elementShare1').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://iamrawwarrior.com/elements.html?element=1',
               'og:title': 'RESPONSIBILITY ',
               'og:description': 'We refer to Responsibility as our individual ability to respond to any given context using our tools and resources to perceive, synthesize, and respond to any and all life circumstances.' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://iamrawwarrior.com/img/element1.jpg'
            }
					})
				}, function(response){});
			}

			var elementShare2 = _('elementShare2').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://iamrawwarrior.com/elements.html?element=2',
               'og:title': 'AWARENESS',
               'og:description': 'We refer to Awareness as the space in between stimulus and response. It is here where we are expanded or contracted.' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://iamrawwarrior.com/img/element2.jpg'
            }
					})
				}, function(response){});
			}

			var elementShare3 = _('elementShare3').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://iamrawwarrior.com/elements.html?element=3',
               'og:title': 'WILLINGNESS',
               'og:description': 'We refer to Willingness as converging all elements; the propelling energy towards one’s life meaning and purpose.' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://iamrawwarrior.com/img/element3.jpg'
            }
					})
				}, function(response){});
			}

			var elementShare4 = _('elementShare4').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://iamrawwarrior.com/elements.html?element=4',
               'og:title': 'HUMAN SUSTAINABILITY',
               'og:description': 'We refer to Human Sustainability as a narrative that promotes activation through self-awareness and the organic motivation that it ignites, where collectives are propelled by a shared sense of purpose and meaning, which are built on genuine trust from the individuals that form them.' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://iamrawwarrior.com/img/element4.jpg'
            }
					})
				}, function(response){});
			}

			var elementShare5 = _('elementShare5').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://iamrawwarrior.com/elements.html?element=5',
               'og:title': 'SYNTHESIZING',
               'og:description': 'We refer to Synthesizing as the capacity wherewith an individual perceives, extracts, and converts value from the reality to which he/she is exposed. This is relevant because here lies our capacity to experience life.' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://iamrawwarrior.com/img/element5.jpg'
            }
					})
				}, function(response){});
			}

			var elementShare6 = _('elementShare6').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://iamrawwarrior.com/elements.html?element=6',
               'og:title': 'SOCIAL RESPONSIBILITY',
               'og:description': 'We refer to Social Responsibility as the idea of functional collectives, in which people thrive by sharing a narrative that ignites their individual skills to proactively engage in meaningful and purposeful service for themselves within their group.' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://iamrawwarrior.com/img/element6.jpg'
            }
					})
				}, function(response){});
			}

			var elementShare7 = _('elementShare7').onclick = function(){
				FB.ui({
					display: 'popup',
					method: 'share_open_graph',
					action_type: 'og.shares',
					action_properties: JSON.stringify({
						object : {
							'og:url': 'http://iamrawwarrior.com/elements.html?element=7',
               'og:title': 'CONTINUITY',
               'og:description': 'We refer to Continuity as the ever present, ongoing life force; a flow that exists and travels through us, like a radio signal that we are compelled to tune into, which gives purpose and meaning to our reception.' ,
               'og:og:image:width': '1300',
               'og:image:height': '630',
               'og:image': 'http://iamrawwarrior.com/img/element7.jpg'
            }
					})
				}, function(response){});
			}
