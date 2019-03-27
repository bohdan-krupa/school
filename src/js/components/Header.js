Vue.component('my-header', {
	data: () => {
		return {
			active: {
				home: location.pathname == '/' ? 1 : 0,
				events: location.pathname == '/events/' ? 1 : 0,

				historyAndActivity: location.pathname == '/school_history/' ? 1 : 0,
				manual: location.pathname == '/manual/' ? 1 : 0,
				rulesOfAdmission: location.pathname == '/rules_of_admission/' ? 1 : 0,
				teacherCollective: location.pathname == '/teacher_collective/' ? 1 : 0,
				studentSelfGovernment: location.pathname == '/student_self-government/' ? 1 : 0,
				vacancies: location.pathname == '/vacancies/' ? 1 : 0,

				toParents: location.pathname == '/to_parents/' ? 1 : 0,
				toStudents: location.pathname == '/to_students/' ? 1 : 0,
				reports: location.pathname == '/reports/' ? 1 : 0,
				psychologistAdvice: location.pathname == '/psychologist_advice/' ? 1 : 0,

				contacts: location.pathname == '/contacts/' ? 1 : 0
			}
		}
	},
	template: `<div class="header">
		<a href="/" class="home parent" v-bind:class="{ active: active.home }">ГОЛОВНА</a>
		<router-link to="/events" class="events parent" v-bind:class="{ active: active.events }">ПОДІЇ</router-link>

		<div class="about-us-container">
			<a class="about-us parent" v-bind:class="{ active: active.historyAndActivity || active.manual || active.rulesOfAdmission || active.teacherCollective || active.studentSelfGovernment || active.vacancies }">Про нас</a>
			<div class="about-us-more">
				<a href="/history_and_activity/" class="children" v-bind:class="{ active: active.historyAndActivity }">Історія і діяльність</a>
				<a href="/manual/" class="manual children" v-bind:class="{ active: active.manual }">Статут</a>
				<a href="/rules_of_admission/" class="rules-of-admission children" v-bind:class="{ active: active.rulesOfAdmission }">Правила прийому</a>
				<a href="/teacher_collective/" class="teacher-collective children" v-bind:class="{ active: active.teacherCollective }">Педагогічний колектив</a>
				<a href="/student_self-government/" class="student-self-government children" v-bind:class="{ active: active.studentSelfGovernment }">Учнівське самоврядування</a>
				<a href="/vacancies/" class="vacancies children" v-bind:class="{ active: active.vacancies }">Вакансії</a>
			</div>
		</div>

		<div class="useful-information-container">
			<a class="useful-information parent" v-bind:class="{ active: active.toParents || active.toStudents || active.reports || active.psychologistAdvice}">КОРИСНА ІНФОРМАЦІЯ</a>
			<div class="useful-information-more">
				<a href="/to_parents" class="children" v-bind:class="{ active: active.toParents }">БАТЬКАМ</a>
				<a href="/to_students" class="to-students children" v-bind:class="{ active: active.toStudents }">УЧНЯМ</a>
				<a href="/reports" class="reports children" v-bind:class="{ active: active.reports }">ЗВІТИ</a>
				<a href="/psychologist_advice" class="psychologist-advice children" v-bind:class="{ active: active.psychologistAdvice }">ПОРАДИ ПСИХОЛОГА</a>
			</div>
		</div>
		
		<a href="/contacts" class="contacts parent" v-bind:class="{ active: active.contacts }">КОНТАКТИ</a>
	</div>`
});