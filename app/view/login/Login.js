Ext.define("Techno.view.Login", {
  extend: "Ext.window.Window",

  controller: "login", // Points to the controller for handling events
  viewModel: "main", // ViewModel to bind data if needed
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
    // Logo
    {
      xtype: "image",
      width: 350,
      height: 80,
      margin:20,
      src: "resources/imgs/logo_techno.png", // Placeholder for logo image
    },

    // Form panel for user credentials
    {
      xtype: "formpanel",
      defaults: {
        margin: "10 0", // Adds margin between fields
        width: 350, // Makes fields the same width
      },
      items: [
        {
          xtype: "emailfield",
          fieldLabel: "Email",
          name: "email",
          allowBlank: false, // Ensures the field is not empty
          placeHolder: "Enter your email address",
        },
        {
          xtype: "passwordfield",
          fieldLabel: "Password",
          name: "password",
          allowBlank: false, // Ensures the password is not empty
          placeHolder: "Enter your password",
        },
        {
          xtype: "checkboxfield",
          boxLabel: "Remember Me",
          name: "rememberMe",
        },
      ],
    },

    // Login button
    {
      xtype: "button",
      text: "Login",
      handler: "onLoginClick", // Action to trigger on login
      scale: "large", // Larger button
      width: "100%",
 
      iconCls: "x-fa fa-sign-in", // Font Awesome login icon
      iconAlign: "left",
      ui: 'action' 
    },

    // Register button
    {
      xtype: "button",
      text: "Register",
      ui: 'action',
      handler: "onRegisterClick", // Action to trigger on register
      width: "100%",
      margin: "10 0",
    
    },

    // Google Sign-in button
    {
      xtype: "button",
      text: "Sign in with Google",
     
      iconCls: "x-fa fa-google", // Font Awesome Google icon
       handler: "onGoogleSignInClick", // Action to trigger on Google sign-in
      ui: 'action', 
      width: "100%",
    },
  ],

  // Listener to automatically focus on the email field when the window is shown
  listeners: {
    afterrender: function () {
      this.down("emailfield").focus();
    },
  },
});
