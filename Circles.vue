<template>
  <div>
    <p class="circles-title">Наші гуртки</p>
    <div class="circles-container">
        <ul>
            <li v-for="circle in circles">{{ circle }}</li>
        </ul>
        <img src="/src/images/collage.png">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
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
  }
</script>