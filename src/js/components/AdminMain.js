let AdminMain = Vue.component('admin-main', {
	data: () => {
		return {
			actions: [
				{ name: 'Додати подію', link: '/add-event/' },
				{ name: 'Редагувати подію', link: '/edit-event/' },
				{ name: 'Видалити подію', link: '/delete-event/' },
				{ name: 'Кількість учнів', link: '/number-of-students/' },
				{ name: 'Кількість вчителів', link: '/number-of-teachers/' },
				{ name: 'Редагувати канікули', link: '/edit-holidays/' }
			]
		}
	},
	template: `<div class="admin-container">
		<router-link v-for="action in actions" :to="action.link">{{ action.name }}</router-link>
	</div>`
})