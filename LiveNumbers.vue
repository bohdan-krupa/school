<template>
  <div>
    <p class="live-numbers-title">Школа у цифрах</p>
    <div class="live-numbers-container">
        <div class="block-number">
            <p class="live-number-1">{{ students }}</p>
            <p>Учнів</p>
        </div>
        <div class="block-number">
            <p class="live-number-2">{{ teachers }}</p>
            <p>Вчителів</p>
        </div>
        <div class="block-number">
            <p class="live-number-3">{{ years }}</p>
            <p>Років</p>
        </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  let databaseRef = firebase.database().ref()
  let numberOfStudents = databaseRef.child('numberOfStudents')
  let numberOfTeachers = databaseRef.child('numberOfTeachers')

  export default {
    data() {
      return {
        students: null,
        teachers: null,
        years: new Date().getFullYear() - 1990
      }
    },
    created() {
      numberOfStudents.once('value').then(snap => {
        this.students = snap.val()
      })

      numberOfTeachers.once('value').then(snap => {
        this.teachers = snap.val()
      })
    }
  }
</script>