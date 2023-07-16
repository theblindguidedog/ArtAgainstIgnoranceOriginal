jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    //  backstretch slide for main body
    // -------------------------------------------------------------

    // js_parts/backstretch.js was here instead of the function below
    //(function () { 
        
        //$(".body-background-slider").backstretch([ "static/AAI_App/aai_images/slider/grey-background.jpg"]);

        //$(".body-base-slider").backstretch([ "static/AAI_App/aai_images/slider/slider2.jpg","static/AAI_App/aai_images/slider/slider2.jpg"], {fade: 750,duration: 5000,});  

    //}());


    // -------------------------------------------------------------
    //  Cubeportfolio
    // -------------------------------------------------------------

    
    (function () {

        $('#portfolio-item').cubeportfolio({
            filters: '#portfolio-menu',
            loadMore: '#portfolio-menu',
            animationType: '3dflip',
            gapVertical: 20,
            gapHorizontal: 20,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 992,
                cols: 4
            }, {
                width: 480,
                cols: 3
            }, {
                width: 320,
                cols: 2
            }, {
                width: 0,
                cols: 1
            }],                       

        });            

    }());    


    // -------------------------------------------------------------
    //  Owl Carousel
    // -------------------------------------------------------------

	(function() {

		$(".clients-slider").owlCarousel({
			items:4,
			nav:true,
			autoplay:true,
			dots:false,
			navText: false,
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 2,
                    slideBy:1
                },
                768: {
                    items: 3,
                    slideBy:1
                },
                991: {
                    items: 4,
                    slideBy:1
                },
            }  
		});

		$(".twitter-slider").owlCarousel({
			items:1,
			nav:true,
			autoplay:true,
			dots:false,
			navText:false,                                
   
		});

		$(".products-slider").owlCarousel({
			items:1,
			nav:true,
			autoplay:true,
			dots:false,
			navText: [
    			"<i class='fa fa-angle-left'></i>",
    			"<i class='fa fa-angle-right'></i>"
			],                       
   
		}); 

		$(".slider").owlCarousel({
			items:3,
			nav:true,
			autoplay:true,
			dots:false,
			navText: [
    			"<i class='fa fa-angle-left'></i>",
    			"<i class='fa fa-angle-right'></i>"
			],
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 1,
                    slideBy:1
                },
                768: {
                    items: 2,
                    slideBy:1
                },
                991: {
                    items:3,
                    slideBy:1
                },
            }  
		}); 

		$(".albums-slider").owlCarousel({
			items:4,
			nav:true,
			autoplay:true,
			dots:false,
			navText: [
    			"<i class='fa fa-angle-left'></i>",
    			"<i class='fa fa-angle-right'></i>"
			],
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 2,
                    slideBy:1
                },
                768: {
                    items: 3,
                    slideBy:1
                },
                991: {
                    items:4,
                    slideBy:1
                },
            }   
		});  
	}());      
         
         

	 
	// -------------------------------------------------------------
    //  Video Play Icon
    // -------------------------------------------------------------
	
	(function () {

        $('.jp-play.play-icon').on('click', function() {
           $(this).addClass('icon-hide');   
        });
		
        $('button.jp-play').on('click', function() {
            $('.play-icon.play-icon').removeClass('icon-hide');
        });

    }());

    // -------------------------------------------------------------
    //  MagnificPopup
    // -------------------------------------------------------------

    (function() {
        
        $('.video-link').magnificPopup({type:'iframe'});

    }()); 

    (function() {
        
        $('.showcase-icons.popup a').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });

    }());

    // -------------------------------------------------------------
    // Rating Bar
    // -------------------------------------------------------------
 
	$('.rating-bar').on('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuenow')+'%');
			});
			$(this).off('inview');
		}
	});

    // -------------------------------------------------------------
    //  language Select
    // -------------------------------------------------------------

   (function() {

        $('.category-dropdown').on('click', '.category-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.category-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

    }());    



    // -------------------------------------------------------------
    //   Google Map 
    // -------------------------------------------------------------

   (function(){

        var map;

        map = new GMaps({
            el: '#gmap',
            lat: -34.425072,
            lng: 150.893143,
            scrollwheel:false,
            zoom: 8,
            zoomControl : true,
            panControl : false,
            streetViewControl : true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });


        var image = 'static/AAI_App/images/map-icon.png';
        map.addMarker({
            lat: -34.425072,
            lng: 150.893143,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf',
        });


        var styles = [ 

        {
            "featureType": "road",
            "stylers": [
            { "color": "#979797" }
            ]
        },{
            "featureType": "water",
            "stylers": [
            { "color": "#aaaaaa" }
            ]
        },{
            "featureType": "landscape",
            "stylers": [
            { "color": "#e2e2e2" }
            ]
        },{
            "elementType": "labels.text.fill",
            "stylers": [
            { "color": "#000000" }
            ]
        },{
            "featureType": "poi",
            "stylers": [
            { "color": "#b9b9b9" }
            ]
        },{
            "elementType": "labels.text",
            "stylers": [
            { "saturation": 1 },
            { "weight": 0.1 },
            { "color": "#101010" }
            ]
        }

        ];

        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });

        map.setStyle("map_style");
    }());          


}); // custom js end

