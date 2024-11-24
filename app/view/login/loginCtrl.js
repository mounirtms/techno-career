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

    debugger
    fetch(Ext.magentoApiUrl + '/integration/admin/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.email,
        password: values.password,
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        // Successfully logged in, save token to local storage
        localStorage.setItem('magento_token', data);
        document.getElementById('login-popup').style.display = 'none'; // Hide login popup
        Toast.showToast("Login Successful!", "success");
      })
      .catch(error => {
        // Show error toast
        Toast.showToast("Error: " + error.message, "error");
      })
      .finally(() => {


      });


    /*
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
          */
  },

  onRegisterClick: function () {
    var form = this.view.down("formpanel"); // Reference the form within the window
    var values = form.getValues(); // Get form values (NIE, email, password)
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
