
//<![CDATA[
$(document).ready(function() {
	
	// homepage audio-player
	
	new jPlayerPlaylist({
		jPlayer: "#tr-player",
		cssSelectorAncestor: "#tr-player-wrapper"
	}, [
		{
			title:"Cro Magnon Man",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
		},
		{
			title:"Stirring of a Fool",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
		},
		{
			title:"Your Face",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
		},
		{
			title:"Cyber Sonnet",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
		},
		{
			title:"Tempered Song",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
		},
		{
			title:"Hidden",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
			title:"Lentement",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
		},
		{
			title:"Lismore",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
		},
		{
			title:"The Separation",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
		},
		{
			title:"Beside Me",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
		},
		{
			title:"Bubble",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		
		{
			title:"Partir",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
		},
		{
			title:"Thin Ice",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
		}
	], {
		swfPath: "js/jquery.jplayer.swf",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
	});
	

});

//<![CDATA[
$(document).ready(function(){
    // ========= jPlayer Album Detail Page ==========
    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jplayer",
        cssSelectorAncestor: "#jp-container"
    }, [
        {
            category: "CLIMATE CHANGE", // the category name
            title:"<span>01.</span> Dear Mother Nature", // track title
            mp3:"static/AAI_App/audio/m4a/DearMotherNature.m4a",// m4a path
            oga:"",// oga path
            duration: '2:22'// duration time in playlist
        },
        {
            category: "RELIGION", // the category name
            title:"<span>02.</span> I Can't Lie", // track title
            mp3:"static/AAI_App/audio/mp3/I_can-t_lie.mp3",// m4a path
            oga:"",// oga path
            duration: '2:53'// duration time in playlist
        },
        {
            category: "RELIGION", // the category name
            title:"<span>03.</span> What if You're Wrong", // track title
            mp3:"static/AAI_App/audio/mp3/what_if_you-re_wrong.mp3",// m4a path
            oga:"",// oga path
            duration: '4:02'// duration time in playlist
        },
        // extra_songs.js was here
        
    ], {
        swfPath: "assets/jplayer/jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        size: {width: "100%"}
    });
    // Show The Current Track !!
    $("#jplayer").on($.jPlayer.event.ready, function (event) {
        var current = myPlaylist.current;
        var playlist = myPlaylist.playlist;       
        $.each(playlist, function (index, obj) {
            if (index == current) {
                $("#playing").html("<span class='artist-name'>" + obj.category + "</span>" + "<br>" + "<span class='track-name'>" + obj.title + "</span>");
            }
        });
    });
    $("#jplayer").on($.jPlayer.event.play, function (event) {
        var current = myPlaylist.current;
        var playlist = myPlaylist.playlist;       
        $.each(playlist, function (index, obj) {
            if (index == current) {
                $("#playing").html("<span class='artist-name'>" + obj.category + "</span>" + "<br>" + "<span class='track-name'>" + obj.title + "</span>");
            }
        });
    });

});//]]>


//<![CDATA[
    $(document).ready(function(){
    	// ========= About Page ==========
        $("#music").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
                });
            },
           
        });

        $("#music1").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
                });
            },
            cssSelectorAncestor: '#music-1'
        });

        $("#music2").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
                });
            },
            cssSelectorAncestor: '#music-2'
        });

        $("#music3").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
                });
            },
            cssSelectorAncestor: '#music-3'
        });

        $("#music4").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
                });
            },
            cssSelectorAncestor: '#music-4'
        });

        $("#music5").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
                });
            },
            cssSelectorAncestor: '#music-5'
        });

        $("#music6").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                    oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
                });
            },
            cssSelectorAncestor: '#music-6'
        });
    });//]]> 
  