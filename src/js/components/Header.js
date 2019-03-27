Vue.component('my-header', {
	data: () => {
		return {
			sitePath: '/',
			active: {
				home: this.sitePath == '/' ? 1 : 0,
				events: this.sitePath == '/events' ? 1 : 0,

				historyAndActivity: this.sitePath == '/school_history' ? 1 : 0,
				manual: this.sitePath == '/manual' ? 1 : 0,
				rulesOfAdmission: this.sitePath == '/rules_of_admission' ? 1 : 0,
				teacherCollective: this.sitePath == '/teacher_collective' ? 1 : 0,
				studentSelfGovernment: this.sitePath == '/student_self-government' ? 1 : 0,
				vacancies: this.sitePath == '/vacancies' ? 1 : 0,

				toParents: this.sitePath == '/to_parents' ? 1 : 0,
				toStudents: this.sitePath == '/to_students' ? 1 : 0,
				reports: this.sitePath == '/reports/' ? 1 : 0,
				psychologistAdvice: this.sitePath == '/psychologist_advice' ? 1 : 0,

				contacts: this.sitePath == '/contact' ? 1 : 0
			}
		}
	},
	template: `<div class="header">
		<router-link to="/" class="home parent" v-bind:class="{ active: active.home }">ГОЛОВНА</router-link>
		<router-link to="/events" class="events parent" v-bind:class="{ active: active.events }">Події</router-link>

		<div class="about-us-container">
			<a class="about-us parent" v-bind:class="{ active: active.historyAndActivity || active.manual || active.rulesOfAdmission || active.teacherCollective || active.studentSelfGovernment || active.vacancies }">Про нас</a>
			<div class="about-us-more">
				<router-link to="/history_and_activity/" class="children" v-bind:class="{ active: active.historyAndActivity }">Історія і діяльність</router-link>
				<router-link to="/manual/" class="manual children" v-bind:class="{ active: active.manual }">Статут</router-link>
				<router-link to="/rules_of_admission/" class="rules-of-admission children" v-bind:class="{ active: active.rulesOfAdmission }">Правила прийому</router-link>
				<router-link to="/teacher_collective/" class="teacher-collective children" v-bind:class="{ active: active.teacherCollective }">Педагогічний колектив</router-link>
				<router-link to="/student_self-government/" class="student-self-government children" v-bind:class="{ active: active.studentSelfGovernment }">Учнівське самоврядування</router-link>
				<router-link to="/vacancies/" class="vacancies children" v-bind:class="{ active: active.vacancies }">Вакансії</router-link>
			</div>
		</div>

		<div class="useful-information-container">
			<a class="useful-information parent" v-bind:class="{ active: active.toParents || active.toStudents || active.reports || active.psychologistAdvice}">КОРИСНА ІНФОРМАЦІЯ</a>
			<div class="useful-information-more">
				<router-link to="/to_parents" class="children" v-bind:class="{ active: active.toParents }">БАТЬКАМ</router-link>
				<router-link to="/to_students" class="to-students children" v-bind:class="{ active: active.toStudents }">УЧНЯМ</router-link>
				<router-link to="/reports" class="reports children" v-bind:class="{ active: active.reports }">ЗВІТИ</router-link>
				<router-link to="/psychologist_advice" class="psychologist-advice children" v-bind:class="{ active: active.psychologistAdvice }">ПОРАДИ ПСИХОЛОГА</router-link>
			</div>
		</div>
		
		<router-link to="/contact" class="contacts parent" v-bind:class="{ active: active.contacts }">Контакти</router-link>
	</div>`,
	watch: {
		'$route' (to, from) {
			console.log(to, from)
		}
	}
});