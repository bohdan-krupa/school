let databaseRef = firebase.database().ref()
let numberOfStudents = databaseRef.child('numberOfStudents')
let numberOfStudents = databaseRef.child('numberOfTeachers')


numberOfStudents.once('value').then(snap => {
	app.numberOfStudents = snap.val()
})

numberOfTeachers.once('value').then(snap => {
	app.numberOfTeachers = snap.val()
})