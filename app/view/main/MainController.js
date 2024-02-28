/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("Techno.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",
 

  init: function () {
    const firebaseConfig = {
      apiKey: "AIzaSyCG66qNVfdz3XUNhDwClnDiQJ3JcaKWdLU",
      authDomain: "techno-career.firebaseapp.com",
      projectId: "techno-career",
      storageBucket: "techno-career.appspot.com",
      messagingSenderId: "100520575550",
      appId: "1:100520575550:web:112d34196c8514fb72c76f",
      measurementId: "G-V4QXE874ZG",
    };
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      } else {
        Ext.create("Techno.view.Login").show();
      }
    });

    let myStore = Ext.data.StoreManager.get("mydatastore");

    myStore.load(); // Load data from the database

    myStore.on("datachanged", function () {
      // Handle data changes, e.g., update UI
      console.log("Store data changed:", myStore.getData().getAt(0));
    });
  },

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
});
