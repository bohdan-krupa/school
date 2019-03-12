Vue.component('my-footer', {
    template: `<footer>
        <img src="/src/images/logo.png">
        <div class="contacts">
            <p>+38(032) 222 28 42</p><br />
            <p>school-96.lviv@ukr.net</p>
            <p>м.Львів, вул. Довженка, 13</p>
            <p>79070, Україна</p>
        </div>
        <a href="https://www.facebook.com/%D0%9D%D0%B0%D1%88%D0%B0-%D1%83%D0%BB%D1%8E%D0%B1%D0%BB%D0%B5%D0%BD%D0%B0-96-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0-%D0%BC-%D0%9B%D1%8C%D0%B2%D1%96%D0%B2-320650714766394/" class="fa fa-facebook"></a>
    </footer>`
});

new Vue({ el: 'my-footer' });