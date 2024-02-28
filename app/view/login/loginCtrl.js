Ext.define('Techno.controller.login', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',


    onGoogleSignInClick: function() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                // User successfully signed in
                console.log('User signed in with Google:', result.user);
                // Close the login window or navigate to another view
                this.getView().close();
            })
            .catch((error) => {
                console.error('Google Sign-in error:', error.code, error.message);
                // Display an error message to the user
            });
    }

});