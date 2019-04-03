let databaseRef = firebase.database().ref()
let numberOfStudents = databaseRef.child('numberOfStudents')

numberOfStudents.once('value').then(snap => {
	console.log(snap.val())
	app.numberOfStudents = snap.val()
})
console.log(app.numberOfStudends)