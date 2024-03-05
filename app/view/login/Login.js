Ext.define("Techno.view.Login", {
  extend: "Ext.window.Window",

  controller: "login",
  viewModel: "main",
  modal: true,
  closable: false, // Prevent closing by default
  width: 400,
  height: 500,

  layout: {
    type: "vbox",
    align: "center",
    pack: "center",
  },

  items: [
    {
      xtype: "image",
      width: 350,
      height: 80,
      src: "resources/logo_techno.png",
    },
    {
      xtype: "formpanel",
      defaults: {
        margin: "10 0",
        width: 350,
      },
      items: [
        {
          xtype: "emailfield",
          fieldLabel: "Email",
          name: "email",
        },
        {
          xtype: "passwordfield",
          fieldLabel: "Password",
          name: "password",
        },
        {
          xtype: "checkboxfield",
          boxLabel: "Remember Me",
          name: "rememberMe",
        },
      ],
    },
    {
      xtype: "button",
      text: "Login",
      handler: "onLoginClick",
    },
    {
      xtype: "button",
      text: "Register",
      handler: "onRegisterClick",
    },
    {
      xtype: "button",
      text: "Sign in with Google",
      cls: "google-sign-in",
      iconCls: "custom-google-icon",
      iconAlign: "left",
      handler: "onGoogleSignInClick",
    },
  ]
});
