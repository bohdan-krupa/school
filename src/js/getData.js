let databaseRef = firebase.database().ref()
let numberOfStudents = databaseRef.child('numberOfStudents')
let numberOfTeachers = databaseRef.child('numberOfTeachers')
let events = databaseRef.child('events')



numberOfStudents.once('value').then(snap => {
	app.numberOfStudents = snap.val()
})

numberOfTeachers.once('value').then(snap => {
	app.numberOfTeachers = snap.val()
})

events.once('value').then(snap => {
	console.log(snap.val())
	let target = snap.val()
	target.push('sdf')
	console.log(target)
})

// [
// 	{
// 		"title": "Річниця Чорнобильської трагедії",
// 		"photo": "https://lh3.googleusercontent.com/kJKF4PBvYF4GILSychMWUIJVOu5YRYBrzIrpY50hiKsWXJabtmIMJIY3YgLESKfvtltSqtdYLDjWXNy4pspeAMrGT4M8xvL2AkgxRlJLwzRPxS4gGn4ymUcLTIc0Fwriu8yrh4GiA9Ee98lLILT9Cv3lseQLKJSu0TEodh7JTmvfnW9lERooyWl53QKSnDcpg2e5KLJt47LtK-5cMyHZnLX3LtXuUCSQfRJDLKBBtOkH3sEZA-EujgZy3-GeUx3cvL1W74SMGN5tKFESiCcVjtn7GLtYUvelei3UYvidpYGdBqfXeg6rWnjts4yceHlYWijCI-lWcZzJg9vdliq2PlM4em6uRnQ2gd3Fl3zyxlWWhCFlUiUMxA8_TQuIZCsz8ZaDdixtEDSeaMnjyZ89DfYQb5-AX2hVlX-GcqOIanBk0C95c7k7iK2xaB0XFzzrwLmKNVJDR93LAP2Mh-o6mcOrma7IrhqXvw0kGTTIRLp286EbcHcW2_t8sgj0oqxT8JsNAIH1nzUsLoujvErOzntCNsFafqUjT-HWD-Ghb4o-rTe6plsSnHXIQeq1MlOUponXfuw_O8ODBfZ1WZW6IQrSt0swBpnmuWltKm4=w1079-h809-no",
// 		"text": "26 квітня в актовому залі школи відбувся захід з нагоди Річниці Чорнобильської трагедії для учнів 8 - 9 класів. Захід організували вчитель біології Беля О. Ф. та вчитель географії Чернець І. М., які задіяли у виступі учнів різних вікових категорій - від 5 до 11 класу. На святі лунали пісні, вірші, учні дивилися відеоролики про вибух на Чорнобильській АЕС та евакуацію населення, всі присутні вшановували загиблих ліквідаторів пожежі хвилиною мовчання. Захід пройшов на одному диханні. Це була нагода ще раз пригадати собі ту подію та переусвідомити її, щоб уникати подібного в майбутньому.",
// 	},
// 	{
// 		"title": "КВК",
// 		"photo": "https://lh3.googleusercontent.com/7_xkPsrAE08wHV8vgnCfFqryn410VlYRQzcFOxWW1N_k0i8BC8YPLms9qU6a8JhVJvIh_c2csEhVlVcQ-Rw5X9CYii_V0RDtjGlfKgw0gIFqvtcz5_W6wRrvsW4rkGfLGjnQiFT_oRdpvCgEIZLAsO5TsrVIkjuUKeXEJAeSMD2DV7nBc85uCOEa4dDibziGkFKJBs2cgZk2_SqOahWHnb4xRcq4__9VYG4zaa8QlOKwZdNuwtmSwcM-bvVR6YAnHzD79SGSVI-8CIsIH_Lw-bCDS6MTb1eqsm8uhyDRXPhZCMNEi7c-FQAcVMxAmetj9vhgEHBy_rGt0wtu3P63MWgKntsMkQRF9Qi1iAm9KKrXwMFFK9rp5biJ_6cXTwi07XemW5UedOqwa893x25KWLSaj2tgKTKeL-Nvn9BG_dfS1V54AvN0fZkeVx2oonR4TssQhP751e9vUJPKMBkdsVNXdqdhMsgsSQ6cRxOCV0Dcv7fkpTz2pPiIsKkgOSIjq69m-ZzOnjakCBh2g3NrqpS9q3OKiuuZlXsC5R1Vg6gkreHuw5S30H-XhBzStiEtRW9Lgyes4YNyLn_gLjn5V7R2wrZyzLEU4whLp6w=w1079-h809-no",
// 		"text": "7 травня у СЗШ №96 відбулось змагання учнівської ліги КВК Сихівського району м. Львова. Організаторами змагань виступили Сихівський учнівський парламент (координатор Карлаш О.) та учнівське самоврядування СЗШ №96 (координатор Тимчишин С.) за підтримки Відділу освіти Сихівського та Личаківського районів, Центру дитячої та юнацької творчості МЖК-1.\n\nУ змаганнях брало участь 6 команд Сихова: &quot;Без назви&quot; (СЗШ №96), &quot;Особові займенники&quot; (НВК &quot;Школа-садок &quot;Софія&quot;&quot;), &quot;Зайці з БАМУ&quot; (СЗШ №86), &quot;Онуки Загорецької&quot; (СЗШ №1), &quot;Море по коліна&quot; (НВК &quot;Школа-ліцей &quot;Оріяна&quot;&quot;) та &quot;Одинадцять з десяти&quot; (СЗШ №95).\n\nКонкурс складався з трьох частин: І - &quot;Візитка&quot;, ІІ - &quot;Імпровізація&quot; (бліц, на якому оцінювались смішні та оригінальні відповіді команд), ІІІ - музичний номер на тему &quot;Моя майбутня професія&quot;. \n\nОцінювали конкурс судді: Логін Н. (головний спеціаліст ВО), Москва Т. (методист НМЦО м. Львова) і Товарницька Н. (методист Центру дитячої та юнацької творчості МЖК-1).\n\nРезультати конкурсу:\n\nІ місце - &quot;Особові займенники&quot; (НВК &quot;Школа-садок &quot;Софія&quot;&quot;);\n\nІІ місце - &quot;Онуки Загорецької&quot; (СЗШ №1);\n\nІІІ місце - &quot;Зайці з БАМУ&quot; (СЗШ №86).\n\nВсі учасники отримали грамоти, а переможці - солодкі подарунки.",
// 	},
// 	{
// 		"title": "Свято Останнього дзвоника 2018",
// 		"photo": "https://lh3.googleusercontent.com/2fOhHsOGkgnzBYwoAEWP5GWxhWW_JOHApdgLTV8_KS2QW7h10sNSkCH7norW_sL25kg2mtI0_O6Yz6FOgdl4OqM3qDVwc4pca9wXGCothZAozgF57lW6GpOD1CewtWuUOEjRnuo1kGi9zIntgNrPHg5Myhv6XYf66Po13fIm_Arx5MXr1wapJITd8hzppmgdLtSiyD_uih_mB6c4x8AwIO5vKHlNgZexotKkikQeocwjtCOc26ICCzoE551V_5MDune9mAOc32n6zGJ6KT4oJm15VIaxyEG65SYBTOML6lFXKzzu6kypE42IHhU9LLkXbS_KOLG2JDCWO8WRjYw3vWeTa2BhmjS5Guhvs16UJJbQ7w3rpm7RNPANMjPa7qi6dKPy8Tud09-amBqomOAvhIe2p3L99hs9jnHH3W2aBYhZPyemPLbi8d4hLlu0efyed_J6kKfarso51_yHSX7e4itoPb-1wHvTJu_klFcfDBCGJsdqh45EOr1uskFjxBgG2ZpKHBDjhGEOWPtOEKPpH448-vXNwp5ngllXqQ-oqRfNlE8rDD96D_JyxHRiDPyDD_7qZWOiTeAeyeDARacERGTuk-AI3Ehq3u6OAXymyOltaq_s1DTWFU7ZoOW9cKyLbeDryjTEC6m_9w3bRHfe2fbBLbRFFmRHtA=w462-h346-no",
// 		"text": "Свято Останнього дзвоника у СЗШ №96 відбулося у формі традиційної святкової лінійки 25 травня 2018 р. Відмінники отримали похвальні листи, пролунали вітання від директора школи Шостак Б. Є., гостя з ОУМ &quot;Спадщина&quot;, завітали на свято маленькі бджілки-трудівниці з 1 класу, щоб привітати одинадцятикласників із закінченням школи, а також лунали зворушливі слова та пісні від самих випускників. Цього року школу закінчують вихованці Когут Г. Є. і Трухим К. Є. Бажаємо їм щасливої життєвої дороги, а іншим учням школи - гарного радісного літнього відпочинку!",
// 	}
// ]