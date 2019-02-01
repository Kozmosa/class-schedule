Vue.component('a-class', {
	props: ['class'],
	template: "<li class='mdui-btn mdui-color-theme mdui-ripple'> {{ class.name }} | {{ class.teacher }} </li>"
})