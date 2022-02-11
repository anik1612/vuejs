const App = {
	data() {
		return {
			person: {
				firstName: 'Anik',
				lastName: 'Sarker',
			},
			education: {
				universityName: 'Yunnan University',
				departmentName: 'Software Engineering',
			},
            img: {
                src: './assets/cartoon-img.png'
            }
		};
	},
};

Vue.createApp(App).mount('#app');
