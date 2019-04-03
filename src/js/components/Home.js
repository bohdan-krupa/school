Vue.component('intro', {
	template: `<div class="intro-container">
		<div class="intro">
			<img src="/src/images/school-logo.jpg" alt="Лого">
			<h1>Середня загальноосвітня школа №96</h1>
		</div>
		<img class="school-photo" src="/src/images/school.png" alt="Школа">
	</div>`
});

Vue.component('announcement', {
	template: `<div class="announcement-container">
		<div class="announcement-text">
			<p>
				СЗШ №96 ОГОЛОШУЄ НАБІР ДІТЕЙ ДО 1 КЛАСУ!<br><br>
				Школа з поглибленим вивченням англійської мови, математики, вивченням другої іноземної мови (німецької або польської). При школі функціонує басейн, де проводяться уроки плавання. Проводяться заняття в гуртках: шахи, вокальний, плавання, танці. Необхідні документи:<br><br>
				<!-- &nbsp; &thinsp; &ensp; &emsp; -->
				&emsp;1.Копія свідоцтва про народження<br>
				&emsp;2.Заява батьків<br>
				&emsp;3.Медична карта ф.26у<br>
				&emsp;4.Карта профілактичних щеплень.Ф.063<br><br>
				Документи приймаються щоденно з 11.00 до 16.00
			</p>
		</div>
		<div class="announcement-btn">
			Оголошення
			<i class="fa fa-exclamation-circle"></i>
		</div>
	</div>`
});

Vue.component('features', {
	data: () => {
		return {
			features: [
				{
					text: 'Поглиблено вивчаємо англійську мову та другу іноземну мову на вибір (німецька, польська)',
					img: 'book-1'
				},
				{
					text: 'Виховуємо креативність та ініціативність у шкільних проектах та заходах',
					img: 'light-bulb'
				},
				{
					text: 'Поглиблено вивчаємо математику',
					img: 'compass'
				},
				{
					text: 'Розвиваємо «здорове тіло та здоровий дух» під час щоденної ранкової фіззарядки та у шкільних спортивних секціях',
					img: 'sports-ball'
				},
				{
					text: 'Забезпечуємо профільну підготовку в старшій школі за напрямами: суспільно-гуманітарний, природничо-математичний, комп’ютерні науки, фінансова грамота',
					img: 'library'
				},
				{
					text: 'Виховуємо свідомого громадянина України на уроках та національно-патріотичних заходах',
					img: 'ukraine'
				}
			]
		}
	},
	template: `<div>
		<p class="features-title">Наші особливості</p>
		<div class="features-container">
			<div class="feature" v-for="feature in features">
				<img v-bind:src="'src/images/icons/' + feature.img + '.svg'">
				<p>{{ feature.text }}</p>
			</div>
		</div>
	</div>`
});

Vue.component('info', {
	template: `<div>
		<p class="infos-title">Навчальний процес</p>
		<div class="info-container">
			<div class="info">
				<div class="info-text center">
					<p class="title">Розклад дзвінків:</p>
					<p>1 урок 8:30-9:15</p>
					<p>2 урок 9:25-10:10</p>
					<p>3 урок 10:20-11:05</p>
					<p>4 урок 11:25-12:10</p>
					<p>5 урок 12:20-13:05</p>
					<p>6 урок 13:15-14:00</p>
					<p>7 урок 14:10-14:55</p>
				</div>
				<div class="info-image">
					<img src="/src/images/info-1.png" alt="Розклад дзвінків">
				</div>

			</div>
			<div class="info info-reversed">
				<div class="info-text">
					<p class="title">Тривалість уроків:</p>
					<p>у 1-ому класі  – 35 хвилин</p>
					<p>у 2-3 класах – 40 хвилин</p>
					<p>у 5-11 класах – 45 хвилин</p>
					<br />
					<p>Позакласна робота з різних предметів, факультативні заняття, клуби, секції проводяться в позаурочний час до 20.00 та в суботні дні відповідно до графіків ...</p>
				</div>
				<div class="info-btn-1">Читати далі</div>
				<div class="info-full-1">
					<p class="title">Тривалість уроків:</p>
					<br />
					<p>у 1-ому класі  – 35 хвилин</p>
					<p>у 2-3 класах – 40 хвилин</p>
					<p>у 5-11 класах – 45 хвилин</p>
					<br />
					<p>Позакласна робота з різних предметів, факультативні заняття, клуби, секції проводяться в позаурочний час до 20.00 та в суботні дні відповідно до графіків</p>
					<br /><br />
					<p class="title">Графік роботи групи продовженого дня:</p>
					<br />
					<div>12.10 - 13.00 - Організація учнів</div>
					<div>13.00 - 14.00 - Обід</div>
					<div>14.00 - 15.00 - Прогулянка</div>
					<div>15.00 - 16.30 - Виконання домашнього завдання</div>
					<div>16.30 - 18.10 - Розвиваючі ігри та заняття за інтересами</div>
				</div>
				<div class="info-image">
					<img src="/src/images/info-2.png" alt="Тривалість уроків">
				</div>
			</div>
			<div class="info">
				<div class="info-text">
					<p class="title">Режим роботи школи протягом навчального року:</p>
					<p>Заклад працює в одну зміну</p>
					<br />
					<p>Початок навчання о 8:30 год за розкладом</p>
					<br />
					<p>Понеділок – виконання Гімну перед першим уроком</p>
					<br />
					<p>Щодня – фізкультхвилинка о 8:20 ...</p>
				</div>
				<div class="info-btn-2">Читати далі</div>
				<div class="info-full-2">
					<p class="title">Режим роботи школи протягом навчального року:</p>
					<br />
					<p>Заклад працює в одну зміну</p>
					<br />
					<p>Початок навчання о 8:30 год за розкладом</p>
					<br />
					<p>Понеділок – виконання Гімну перед першим уроком</p>
					<br />
					<p>Щодня – фізкультхвилинка о 8:20</p>
					<br />
					<p>Навчальний процес організовано за 5-денним режимом занять</p>
				</div>
				<div class="info-image">
					<img src="/src/images/info-3.png" alt="Режим роботи школи">
				</div>
			</div>
			<div class="info info-reversed">
				<div class="info-text">
					<p class="title">Структура 2017 – 2018 навчального року:</p>
					<p>Навчальний рік розпочинається 1 вересня святом "День знань"</p>
					<br />
					<p class="title">Навчальні заняття організовуються за семестровою системою:</p>
					<p>І семестр - з 01.09 до 25.12.2017 р. ...</p>
				</div>
				<div class="info-btn-3">Читати далі</div>
				<div class="info-full-3">
					<p class="title">Структура 2017 – 2018 навчального року:</p>
					<br />
					<p>Навчальний рік розпочинається 1 вересня святом "День знань"</p>
					<br /><br /><br />
					<p class="title">Навчальні заняття організовуються за семестровою системою:</p>
					<br />
					<div>І семестр - з 01.09 до 25.12.2017 р.</div>
					<div>ІІ семестр - з 15.01 до 25.05.2018 р.</div>
					<br /><br /><br />
					<p class="title">Канікули для учнів протягом навчального року:</p>
					<br />
					<div>Осінні - з 17.10 до 20.10.2017 р.</div>
					<div>Зимові - з 25.12.2017 р. до 12.01.2018 р.</div>
					<div>Весняні - з 05.04 до 13.04.2018 р.</div>
				</div>
				<div class="info-image">
					<img src="/src/images/info-4.png" alt="Структура навчального року">
				</div>
			</div>
		</div>
	</div>`
});

Vue.component('circles', {
	data: () => {
		return {
			circles: [
				'Військово-патріотичного виховання і стрільби',
				'Вокальний',
				'Хореографічний',
				'Турисько-краєзнавчий',
				'Загальнофізичної підготовки',
				'Міні-футбол',
				'Шахи',
				'Квітникарство',
				'Веб-журналістика',
				'Дзюдо',
				'Художня гімнастика',
				'Настільний теніс',
				'Плавання',
				'Бойовий гопак',
				'Боротьба',
				'Танці'
			]
		}
	},
	template: `<div>
		<p class="circles-title">Наші гуртки</p>
		<div class="circles-container">
			<ul>
				<li v-for="circle in circles">{{ circle }}</li>
			</ul>
			<img src="/src/images/collage.png">
		</div>
	</div>`
});

Vue.component('main-events', {
	template: `<div>
		<p class="main-events-title">Головні події</p>
		<div class="events-container"></div>
	</div>`
});

Vue.component('live-numbers', {
	data: () => {
		return {
			// numbersOfTeachers: null
		}
	},
    props: ['numberOfStudents', 'numberOfTeachers'],
	template: `<div>
		<p class="live-numbers-title">Школа у цифрах</p>
		<div class="live-numbers-container">
			<div class="block-number">
				<p class="live-number-1">{{ numberOfStudents }}</p>
				<p>Учнів</p>
			</div>
			<div class="block-number">
				<p class="live-number-2">{{ numberOfTeachers }}</p>
				<p>Вчителів</p>
			</div>
			<div class="block-number">
				<p class="live-number-3">27</p>
				<p>Років</p>
			</div>
		</div>
	</div>`
});

let Home = Vue.component('home', {
	props: ['numberOfStudents', 'numberOfTeachers'],
	template: `<div>
		<intro></intro>
		<announcement></announcement>
		<features></features>
		<info></info>
		<circles></circles>
		<main-events></main-events>
		<live-numbers
			:number-of-students="numberOfStudents"
			:number-of-teachers="numberOfTeachers"
		></live-numbers>
	</div>`
})