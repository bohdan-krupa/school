Vue.component('my-header', {
	data: () => {
		return {
			active: {}
		}
	},
	methods: {
		routeUpdate(to) {
			this.active = {
				home: to == '/' ? 1 : 0,
				events: to == '/events' ? 1 : 0,

				historyAndActivity: to == '/history_and_activity' ? 1 : 0,
				manual: to == '/manual' ? 1 : 0,
				rulesOfAdmission: to == '/rules_of_admission' ? 1 : 0,
				teacherCollective: to == '/teacher_collective' ? 1 : 0,
				studentSelfGovernment: to == '/student_self-government' ? 1 : 0,
				vacancies: to == '/vacancies' ? 1 : 0,

				toParents: to == '/to_parents' ? 1 : 0,
				toStudents: to == '/to_students' ? 1 : 0,
				reports: to == '/reports' ? 1 : 0,
				psychologistAdvice: to == '/psychologist_advice' ? 1 : 0,

				contacts: to == '/contact' ? 1 : 0
			}
		}
	},
	created: function() {
		this.routeUpdate(this.$route.path)
	},
	watch: {
		'$route' (to, from) {
			this.routeUpdate(to.path)
		}
	},
	template: `<div class="header">
		<router-link to="/" class="home parent" :class="{ active: active.home }">ГОЛОВНА</router-link>
		<router-link to="/events" class="events parent" :class="{ active: active.events }">Події</router-link>

		<div class="about-us-container">
			<a class="about-us parent" :class="{ active: active.historyAndActivity || active.manual || active.rulesOfAdmission || active.teacherCollective || active.studentSelfGovernment || active.vacancies }">Про нас</a>
			<div class="about-us-more">
				<router-link to="/history_and_activity" class="children" :class="{ active: active.historyAndActivity }">Історія і діяльність</router-link>
				<router-link to="/manual" class="manual children" :class="{ active: active.manual }">Статут</router-link>
				<router-link to="/rules_of_admission" class="rules-of-admission children" :class="{ active: active.rulesOfAdmission }">Правила прийому</router-link>
				<router-link to="/teacher_collective" class="teacher-collective children" :class="{ active: active.teacherCollective }">Педагогічний колектив</router-link>
				<router-link to="/student_self-government" class="student-self-government children" :class="{ active: active.studentSelfGovernment }">Учнівське самоврядування</router-link>
				<router-link to="/vacancies" class="vacancies children" :class="{ active: active.vacancies }">Вакансії</router-link>
			</div>
		</div>

		<div class="useful-information-container">
			<a class="useful-information parent" :class="{ active: active.toParents || active.toStudents || active.reports || active.psychologistAdvice}">КОРИСНА ІНФОРМАЦІЯ</a>
			<div class="useful-information-more">
				<router-link to="/to_parents" class="children" :class="{ active: active.toParents }">БАТЬКАМ</router-link>
				<router-link to="/to_students" class="to-students children" :class="{ active: active.toStudents }">УЧНЯМ</router-link>
				<router-link to="/reports" class="reports children" :class="{ active: active.reports }">ЗВІТИ</router-link>
				<router-link to="/psychologist_advice" class="psychologist-advice children" :class="{ active: active.psychologistAdvice }">ПОРАДИ ПСИХОЛОГА</router-link>
			</div>
		</div>
		
		<router-link to="/contact" class="contacts parent" :class="{ active: active.contacts }">Контакти</router-link>
	</div>`
});