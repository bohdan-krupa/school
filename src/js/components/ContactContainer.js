let ContactContainer = Vue.component('contact-container', {
    template: `<div class="contact-container">
        <div class="contact-text">
            <p class="title">Контакти школи:</p>
            <p>вул. Довженка, 13</p>
            <p>м. Львів</p>
            <p>79070</p>
            <p>тел.: (032) 222-28-42</p>
            <p>e-mail: school-96.lviv@ukr.net</p>

            <br><br><b>Гостьова книга:</b><br><br>
            <textarea placeholder="Напишіть нам . . ."></textarea>
            <div class="send-btn btn-1">Відправити</div>
        </div>
        <div class="map"></div>
    </div>`
});