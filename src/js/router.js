let router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/events/', component: EventsContainer },
		{ path: '/contact/', component: ContactContainer }
	]
})