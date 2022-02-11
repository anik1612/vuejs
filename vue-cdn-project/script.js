const App = {
	data() {
		return {
			persons: [
				{
					id: 1,
					person: {
						firstName: 'Anik',
						lastName: 'Sarker',
					},
					education: {
						universityName: 'Yunnan University',
						departmentName: 'Software Engineering',
					},
					img: {
						src: './assets/cartoon-img.png',
					},
					portfolio: {
						link: 'https://anik-sarker.com',
					},
					gender: 'Male',
				},
				{
					id: 2,
					person: {
						firstName: 'Anik',
						lastName: 'Sarker',
					},
					education: {
						universityName: 'Yunnan University',
						departmentName: 'Software Engineering',
					},
					img: {
						src: './assets/cartoon-img.png',
					},
					portfolio: {
						link: 'https://anik-sarker.com',
					},
					gender: 'Male',
				},
				{
					id: 3,
					person: {
						firstName: 'Anik',
						lastName: 'Sarker',
					},
					education: {
						universityName: 'Yunnan University',
						departmentName: 'Software Engineering',
					},
					img: {
						src: './assets/cartoon-img.png',
					},
					portfolio: {
						link: 'https://anik-sarker.com',
					},
					gender: 'Male',
				},
			],
		};
	},
};

Vue.createApp(App).mount('#app');
