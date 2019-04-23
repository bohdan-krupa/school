<template>
  <div>
    <p class="features-title">Наші особливості</p>
    <div class="features-container">
      <div class="feature" v-for="feature in features">
        <img :src="'src/images/icons/' + feature.img + '.svg'">
        <p>{{ feature.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      features: [
        {
          text: 'Поглиблено вивчаємо англійську мову та другу іноземну мову на вибір (німецька, польська)',
          img:  'book-1'
        },
        {
          text: 'Виховуємо креативність та ініціативність у шкільних проектах та заходах',
          img:  'light-bulb'
        },
        {
          text: 'Поглиблено вивчаємо математику',
          img:  'compass'
        },
        {
          text: 'Розвиваємо «здорове тіло та здоровий дух» під час щоденної ранкової фіззарядки та у шкільних спортивних секціях',
          img:  'sports-ball'
        },
        {
          text: 'Забезпечуємо профільну підготовку в старшій школі за напрямами: суспільно-гуманітарний, природничо-математичний, комп’ютерні науки, фінансова грамота',
          img:  'library'
        },
        {
          text: 'Виховуємо свідомого громадянина України на уроках та національно-патріотичних заходах',
          img:  'ukraine'
        }
      ]
    }
  }
</script>