/*global $, document*/
$(document).ready(function () {

  "use strict";
  
  // Show Chat Room
  
  $(".chat .chat-header .user-info").on("click", function () {
    
    // Show The Chat
    $(".chat").toggleClass("active-c");
    // Show Ellipisis Icon When Chat Active And Hide When Chat In active
    $(".chat .chat-header .more > i").toggle();
    // Hide Dropdown when user info is hide
    $(".chat .chat-header .more ul").hide()
    
  });
  
  // Show Dropdown
  
  $(".chat .chat-header .more > i").on("click", function () {
    
    $(".chat .chat-header .more ul").toggle(100);
    
  });
  
  // Close Chat On Click In End Chat Button
  
  $(".chat .chat-header .more ul .close-chat-button").on("click", function (e) {
    
    $(".chat").hide();
    
    e.preventDefault();
    
  });
  
  // Options Animation (hide one and show other)
  
  $(".chat .chat-footer textarea").on("focus", function () {
    
    if ($(".chat-footer .typing-area textarea").val() === "") {
      // Hide Last Icon
      $(".chat .chat-footer .options i:last-of-type").removeClass("hide-last");
      // Show First icon
      $(".chat .chat-footer .options i:first-of-type").addClass("hide");
      // Hide File Input To Block User From Upload Any Image When Icon Is Hidden
      $(".chat .chat-footer .options input[type='file']").hide();
    }
    
  }).blur(function () {
    
    if ($(".chat-footer .typing-area textarea").val() !== "") {
      $(".chat .chat-footer .options i:last-of-type").removeClass("hide-last");
      $(".chat .chat-footer .options i:first-of-type").addClass("hide");
      
    } else {
      // on focus instructions (inverse)
      $(".chat .chat-footer .options i:last-of-type").addClass("hide-last");
      // on focus instructions (inverse)
      $(".chat .chat-footer .options i:first-of-type").removeClass("hide");
      // on focus instructions (inverse)
      $(".chat .chat-footer .options input[type='file']").show();

    }
    
  });
  
  // Show Indicators Animation While User Type Letter In Textarea And Remove While Text Area Hasn't Letter
  
  $(".chat .chat-footer .typing-area textarea").on("keyup", function () {
    
    var textarea = document.getElementById("textarea");
        
    if (textarea.value.length === 0) {
      // Hide Message Area.
      $(".chat .message-area").fadeOut();
      
      // Add Class scale-out to hide the image with smooth effect.
      $(".chat .message-area .message-wrapper > img").addClass("scale-out").end();
      
      // required remove the last class to save the smoothy of the animation.
      $(".chat .message-area .message-wrapper > img").removeClass("scale-in").end();
      
      // Add transform: scale property after the animation to save the image from hidden.
      $(".chat .message-area .message-wrapper > img").css("transform", "scale(0)");
      
    } else {
      // Show Message Area.
      $(".chat .message-area").fadeIn();
      
      // Add Class scale-in to show the image with smooth effect.
      $(".chat .message-area .message-wrapper > img").addClass("scale-in").end();
      
      // required remove the last class to save the smoothy of the animation.
      $(".chat .message-area .message-wrapper > img").removeClass("scale-out").end();

      // Add transform: scale property after the animation to save the image from hidden.
      $(".chat .message-area .message-wrapper > img").css("transform", "scale(1)");
    }
    
  });
  
  // Trigger Nice Scroll Plugin
  
  $(".chat .chat-footer .typing-area textarea").niceScroll({
    cursorcolor:"#BD39FF",
    cursorwidth:"10px",
    background:"#DDD",
    cursorborder: 0,
    cursorborderradius:"10px",
    zindex: 9999999
  });
  
});
