Ext.define("Techno.view.Login", {
  extend: "Ext.form.Panel",

  controller: "login",

  title: "Login",
  bodyPadding: 10,

  buttons: [
    {
      xtype: "button",
      text: "Sign in with Google",
      cls: "google-sign-in",  
      handler: "onGoogleSignInClick",
      style: {
        backgroundColor: "#ffffff",  
        color: "#000000", 
        padding: "10px 20px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      iconCls: "fa fa-home",  
      iconAlign: "left",
    },
  ],
});
