window.ViewPDF3 = window.ViewPDF3 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Guide/#themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if(window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !ViewPDF3.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win8":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    ViewPDF3.app = new DevExpress.framework.html.HtmlApplication({
        namespace: ViewPDF3,
        layoutSet: DevExpress.framework.html.layoutSets[ViewPDF3.config.layoutSet],
        navigation: ViewPDF3.config.navigation,
        commandMapping: ViewPDF3.config.commandMapping
    });
    ViewPDF3.app.router.register(":view/:id", { view: "home", id: undefined });
    ViewPDF3.app.on("navigatingBack", onNavigatingBack);
    ViewPDF3.app.navigate();
});
