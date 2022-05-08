
// homepage-audio.js was here


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
            title:"<span>02.</span> I Can't Lie To Myself", // track title
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


// aboutpage-audio.js was here
