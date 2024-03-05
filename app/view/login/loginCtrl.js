Ext.define("Techno.controller.login", {
  extend: "Techno.view.main.MainController",
  alias: "controller.login",

  onGoogleSignInClick: function () {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // User successfully signed in
        console.log("User signed in with Google:", result.user);
        // Close the login window or navigate to another view
        this.getView().close();
        this.successLogin();
      })
      .catch((error) => {
        this.showError(error);
      });
  },

  onLoginClick: function () {
    var form = this.view.down("formpanel");
    var values = form.getValues();
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        this.successLogin();
        this.view.close();
      })
      .catch((error) => {
        this.showError(error);
      });
  },

  onRegisterClick: function () {
    var form = this.view.down("formpanel"); // Reference the form within the window
    var values = form.getValues(); // Get form values (NIE, email, password)
    debugger;

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        // User successfully registered
        console.log("User registered:", userCredential.user);
        // Handle successful registration (e.g., display success message, perform further actions)
        this.view.close();
        this.successLogin();
      })
      .catch((error) => {
        this.showError(error);
      });
  }
});
