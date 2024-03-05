/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("Techno.view.main.MainController", {
    extend: "Ext.app.ViewController",
    alias: "controller.main",


    successLogin:function(){
      debugger
    },

    onLogoutClick: function () {
      let me = this;
      firebase
        .auth()
        .signOut()
        .then(() => {
          me.getViewModel().set("isLoggedIn", false);
        })
        .catch((error) => {
          me.showError(error);
        });
    },
  
    showError: function (message) {
      Ext.toast({
        title: "Error",
        message: "<pre>" + message + "</pre>",
        align: "t",
        toastType: "error", // Set toast type to 'error'
        closable: true,
        slideIn: true,
        slideOut: true,
        timeout: 5000,
      });
    },
  });
   