/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("Techno.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",

  toggleMenuMode: function () {
    let treelist = this.view.up().down('treelist'),
      treePanel = treelist.up().up(),
      mainLogo = treePanel.items.items[0],
      isMicro = treelist.getMicro();

    if (!isMicro) {
      treePanel.setWidth(64)
      mainLogo.setHtml('<img src="resources/imgs/techno.png" width="64" alt="Logo">')
      treelist.setMicro(true);

    } else {
      treePanel.setWidth(240)
      mainLogo.setHtml('<img src="resources/imgs/logo_techno.png" width="220" alt="Logo">')
      treelist.setMicro(false);

    }
  },
  
  successLogin: function () {

  },

  onLogoutClick: function () {
    let me = this;
    firebase
      .auth()
      .signOut()
      .then(() => {
        Toast.showSuccess('Logged In ');
        me.getViewModel().set("isLoggedIn", false);
      })
      .catch((error) => {
        Toast.showError(error);
      });
  },

  openSettingsWindow: function () {
    Ext.create('Techno.view.main.SettingsWindow').show();
  },
 
});
