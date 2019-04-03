let databaseRef = firebase.database().ref()
let numberOfStudents = databaseRef.child('numberOfStudents')

numberOfStudents.once('value').then(snap => {
	app.numberOfStudents = snap.val()
})