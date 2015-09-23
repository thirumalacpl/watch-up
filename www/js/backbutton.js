   function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    // PhoneGap is loaded and it is now safe to call PhoneGap methods
    //
    function onDeviceReady() {
        // Register the event listener http://bit.ly/1KJMTeG http://bit.ly/1iu860Z http://bit.ly/1iu860Z
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    
    function onBackKeyDown() {
      alert("back works");  
    }