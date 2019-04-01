// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Keeps track of the length of the 'likes' child list in a separate property.
/*exports.documentWriteListener = 
    functions.firestore.document('/emplois')
    .onWrite((change, context) => {

    if (!change.before.exists) {
        // New document Created : add one to count
        db.doc(docRef).get().then(snap => {
            db.doc(docRef).update({numberOfDocs: snap.data().numberOfDocs + 1});
            return;
        });

    } else if (change.before.exists && change.after.exists) {
        // Updating existing document : Do nothing
        return;

    } else if (!change.after.exists) {
        // Deleting document : subtract one from count
        db.doc(docRef).get().then(snap => {
           db.doc(docRef).update({numberOfDocs: snap.data().numberOfDocs - 1});
           return;
        });
    }
    console.log("OK!")

});*/

exports.addMessage = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database().ref('/emplois').push({original: original}).then((snapshot) => {
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      return res.redirect(303, snapshot.ref.toString());
    });
  });
  
