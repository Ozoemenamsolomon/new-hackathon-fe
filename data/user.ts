export type UserType = {
	id: number;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: Role;
	profilePicture: string;
	jobTitle: string;
	phone: string;
	hireDate: string;
	skills: {
		name: string;
		type: SkillType;
	}[];
	projects: {
		name: string;
		description: string;
		startDate: string;
		endDate: string;
	}[];
	interests: {
		name: string;
	}[];
};

export enum SkillType {
	HARD = 'hard',
	SOFT = 'soft',
}

export enum Role {
	ADMIN = 'admin',
	USER = 'user',
	GUEST = 'guest',
}

// create fake user data with roles and fake profile picture

export const users: UserType[] = [
	{
		id: 1,
		email: 'admin@msg.group',
		password: 'admin',
		firstName: 'Admin',
		lastName: 'User',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
		jobTitle: 'CEO',
		phone: '1234567890',
		hireDate: '2009-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'Kommunikationsfähigkeit',
				type: SkillType.SOFT,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Organisationstalent',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Stock Value Prediction',
				description: 'Stock Value Prediction with Linear Regression',
				startDate: '2022-11-01',
				endDate: '2022-11-09',
			},
			{
				name: 'Enron Investigation',
				description:
					'Enron Investigation with focus on social network analyses, using graph theory',
				startDate: '2022-11-23',
				endDate: '2022-12-01',
			},
			{
				name: 'Chatbots',
				description: 'enhanced functions of the msg chatbot',
				startDate: '2022-11-23',
				endDate: '2022-12-05',
			},
			{
				name: 'Online Assignment Plagiarism Checker',
				description:
					'This plagiarism detector used the text mining method. In this software, users can register by login by creating a valid login id and password.',
				startDate: '2022-11-15',
				endDate: '2022-11-20',
			},
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Real-Time Chat Application',
				description: 'A full-fledged real-time chat application',
				startDate: '2022-11-20',
				endDate: '2022-11-25',
			},
			{
				name: 'Predict Housing Price',
				description: 'Predict selling prices of new houses in Boston',
				startDate: '2022-12-02',
				endDate: '2022-12-20',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 2,
		email: 'user@msg.group',
		password: 'user',
		firstName: 'Normal',
		lastName: 'User',
		role: Role.USER,
		profilePicture: 'https://randomuser.me/api/portraits/men/33.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'C++',
				type: SkillType.HARD,
			},
			{
				name: 'Kreativ',
				type: SkillType.SOFT,
			},
			{
				name: 'Haskell',
				type: SkillType.HARD,
			},
			{
				name: 'Java',
				type: SkillType.HARD,
			},
			{
				name: 'React',
				type: SkillType.HARD,
			},
			{
				name: 'Teamfäigkeit',
				type: SkillType.SOFT,
			},
			{
				name: 'Kommunikationsfähigkeit',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Enron Investigation',
				description:
					'Enron Investigation with focus on social network analyses, using graph theory',
				startDate: '2022-11-23',
				endDate: '2022-12-01',
			},
			{
				name: 'Chatbots',
				description: 'enhanced functions of the msg chatbot',
				startDate: '2022-11-23',
				endDate: '2022-12-05',
			},
			{
				name: 'Online Assignment Plagiarism Checker',
				description:
					'This plagiarism detector used the text mining method. In this software, users can register by login by creating a valid login id and password.',
				startDate: '2022-11-20',
				endDate: '2022-12-20',
			},
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Real-Time Chat Application',
				description: 'A full-fledged real-time chat application',
				startDate: '2022-11-20',
				endDate: '2022-11-25',
			},
			{
				name: 'Personality Prediction System via CV Analysis',
				description:
					'This project aims to create advanced software that can provide a legally justified and fair CV ranking system',
				startDate: '2022-12-21',
				endDate: '2022-12-31',
			},
			{
				name: 'Facial Emotion Recognition and Detection',
				description:
					'pioneering modern application of Deep Learning – facial emotion recognition',
				startDate: '2022-12-05',
				endDate: '2022-12-25',
			},
			{
				name: 'Stock Price Prediction',
				description: 'predict 6-month price movements of a stock',
				startDate: '2022-12-02',
				endDate: '2022-12-05',
			},
		],
		interests: [
			{
				name: 'React'
			}
		]
	},
	{
		id: 3,
		email: 'judith.sims@msg.group',
		password: 'wwwwww',
		firstName: 'Judith',
		lastName: 'Sims',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/71.jpg',
		jobTitle: 'Frontend Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'OCaml',
				type: SkillType.HARD,
			},
			{
				name: 'C++',
				type: SkillType.HARD,
			},
			{
				name: 'Kreativ',
				type: SkillType.SOFT,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
			{
				name: 'Vue.js',
				type: SkillType.HARD,
			},
			{
				name: 'Durchsetzungsvermögen',
				type: SkillType.SOFT,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
			{
				name: 'C++',
				type: SkillType.HARD,
			},
			{
				name: 'Kreativ',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Chatbots',
				description: 'enhanced functions of the msg chatbot',
				startDate: '2022-11-23',
				endDate: '2022-12-05',
			},
			{
				name: 'Online Assignment Plagiarism Checker',
				description:
					'This plagiarism detector used the text mining method. In this software, users can register by login by creating a valid login id and password.',
				startDate: '2022-11-20',
				endDate: '2022-12-20',
			},
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Real-Time Chat Application',
				description: 'A full-fledged real-time chat application',
				startDate: '2022-11-20',
				endDate: '2022-11-25',
			},
			{
				name: 'Personality Prediction System via CV Analysis',
				description:
					'This project aims to create advanced software that can provide a legally justified and fair CV ranking system',
				startDate: '2022-12-21',
				endDate: '2022-12-31',
			},
			{
				name: 'Facial Emotion Recognition and Detection',
				description:
					'pioneering modern application of Deep Learning – facial emotion recognition',
				startDate: '2022-12-05',
				endDate: '2022-12-25',
			},
		],
		interests: [
			{
				name: 'TypeScript'
			}
		]
	},
	{
		id: 4,
		email: 'ana.gauthier@msg.group',
		password: 'babylove',
		firstName: 'Ana',
		lastName: 'Gauthier',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/30.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Swift',
				type: SkillType.HARD,
			},
			{
				name: 'C#',
				type: SkillType.HARD,
			},
			{
				name: 'VHDL',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran 90',
				type: SkillType.HARD,
			},
			{
				name: 'C++',
				type: SkillType.HARD,
			},
			{
				name: 'Kreativ',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Online Assignment Plagiarism Checker',
				description:
					'This plagiarism detector used the text mining method. In this software, users can register by login by creating a valid login id and password.',
				startDate: '2022-11-20',
				endDate: '2022-12-20',
			},
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Real-Time Chat Application',
				description: 'A full-fledged real-time chat application',
				startDate: '2022-11-20',
				endDate: '2022-11-25',
			},
			{
				name: 'Personality Prediction System via CV Analysis',
				description:
					'This project aims to create advanced software that can provide a legally justified and fair CV ranking system',
				startDate: '2022-12-21',
				endDate: '2022-12-31',
			},
		],
		interests: [
			{
				name: 'Java'
			}
		]
	},
	{
		id: 5,
		email: 'samuel.kyllonen@msg.group',
		password: 'firefigh',
		firstName: 'Samuel',
		lastName: 'Kyllonen',
		role: Role.USER,
		profilePicture: 'https://randomuser.me/api/portraits/men/99.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2020-01-01',
		skills: [
			{
				name: 'Ruby',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'C++',
				type: SkillType.HARD,
			},
			{
				name: 'Kreativ',
				type: SkillType.SOFT,
			},
			{
				name: 'C',
				type: SkillType.HARD,
			},
			{
				name: 'SQL',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Empathie',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Heart Disease Prediction Project',
				description:
					'This project is beneficial from the medical perspective since it is designed to provide online medical consultation and guidance to patients suffering from heart diseases. Patients often complain that they cannot find good doctors to support their medical needs, which further aggravates their situation. This heart disease prediction application will help combat the issue. ',
				startDate: '2022-11-20',
				endDate: '2022-12-20',
			},
			{
				name: 'Online Assignment Plagiarism Checker',
				description:
					'This plagiarism detector used the text mining method. In this software, users can register by login by creating a valid login id and password.',
				startDate: '2022-11-20',
				endDate: '2022-12-20',
			},
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Banking Bot ',
				description:
					'The banking bot is an Android application. Like a chatbot, it is trained to process the users’ queries/requests and understand what services or information they are looking for. The bot will communicate with users like another human being. So, no matter how you ask a question, the bot can answer it and, if required, even escalate issues to human executives. ',
				startDate: '2022-12-21',
				endDate: '2023-01-01',
			},
		],
		interests: [
			{
				name: 'trees'
			}
		]
	},
	{
		id: 6,
		email: 'aubrey.robertson@msg.group',
		password: 'fowler',
		firstName: 'Aubrey',
		lastName: 'Robertson',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/62.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'PHP',
				type: SkillType.HARD,
			},
			{
				name: 'Objective-C',
				type: SkillType.HARD,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
			{
				name: 'Python',
				type: SkillType.HARD,
			},
			{
				name: 'SQL',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Empathie',
				type: SkillType.SOFT,
			},
			{
				name: 'Teamfähig',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Grocery List',
				description:
					'Hungry? Let’s go some grocery shopping with our grocery list. This is a cool app using which you can keep a list of items you need to buy, you just have to add the items needed. You can also delete the item/items which are not required. ',
				startDate: '2022-11-25',
				endDate: '2022-12-01',
			},
			{
				name: 'JavaScript Form Validation',
				description:
					'Many websites utilize form validation for client-side validation of user details, card details, address details, and other information. If a mandatory input field name exists, the user can type a number, leave the field blank, type only one letter, and so on.',
				startDate: '2022-12-01',
				endDate: '2022-12-10',
			},
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Real-Time Chat Application',
				description: 'A full-fledged real-time chat application',
				startDate: '2022-11-20',
				endDate: '2022-11-25',
			},
		],
		interests: [
			{
				name: 'nature'
			}
		]
	},
	{
		id: 7,
		email: 'david.martin@msg.group',
		password: 'redskin',
		firstName: 'David',
		lastName: 'Martin',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/50.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'VHDL',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran 90',
				type: SkillType.HARD,
			},
			{
				name: 'Rust',
				type: SkillType.HARD,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Real-time Weather app',
				description:
					'Our weather app will display weather data from the API like this: an icon that represents the current weather status, the temperature value (18°C) in Celsius units, the weather description (clear sky), and finally the user’s city and country (London, GB).',
				startDate: '2022-11-30',
				endDate: '2022-12-03',
			},
			{
				name: 'Movie App',
				description:
					'This is a movie app made with HTML, CSS, JavaScript, jQuery, and Bootstrap using API calls from The Movie Database. It uses API calls to get movies from The Movie Database. Users can view the most popular movies, arrange them by genre, or use the search function to find other titles.',
				startDate: '2022-12-04',
				endDate: '2022-12-12',
			},
			{
				name: 'Real-Time Chat Application',
				description: 'A full-fledged real-time chat application',
				startDate: '2022-11-20',
				endDate: '2022-11-25',
			},
			{
				name: 'File Sharing App',
				description:
					'Utilization of the Virgil Crypto Library in JavaScript to construct a secure file-sharing app. You can download, decrypt, and view encrypted media files from a browser after completing the procedures in the setup section.',
				startDate: '2022-11-26',
				endDate: '2022-11-30',
			},
			{
				name: 'Chat App',
				description:
					'A chat app using firebase, authentication, firebase real-time database management.',
				startDate: '2022-11-10',
				endDate: '2022-12-01',
			},
			{
				name: 'E-Commerce Website',
				description: 'A E-Commerce Website using Sveltestarp and Svelte.',
				startDate: '2022-12-04',
				endDate: '2022-12-10',
			},
		],
		interests: [
			{
				name: 'cars'
			}
		]
	},
	{
		id: 8,
		email: 'ysmyn.shylyrd@msg.group',
		password: 'hewitt',
		firstName: 'یاسمین',
		lastName: 'سهيلي راد',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/95.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'x86 Assembly',
				type: SkillType.HARD,
			},
			{
				name: 'ARM Assembly',
				type: SkillType.HARD,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Real-Time Chat Application',
				description: 'A full-fledged real-time chat application',
				startDate: '2022-11-20',
				endDate: '2022-11-25',
			},
			{
				name: 'File Sharing App',
				description:
					'Utilization of the Virgil Crypto Library in JavaScript to construct a secure file-sharing app. You can download, decrypt, and view encrypted media files from a browser after completing the procedures in the setup section.',
				startDate: '2022-11-26',
				endDate: '2022-11-30',
			},
			{
				name: 'Chat App',
				description:
					'A chat app using firebase, authentication, firebase real-time database management.',
				startDate: '2022-11-10',
				endDate: '2022-12-01',
			},
			{
				name: 'E-Commerce Website',
				description: 'A E-Commerce Website using Sveltestarp and Svelte.',
				startDate: '2022-12-04',
				endDate: '2022-12-10',
			},
			{
				name: 'Pricing Component',
				description: 'Responsive Services Section using CSS Flexbox',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
		],
		interests: [
			{
				name: 'plane'
			}
		]
	},
	{
		id: 9,
		email: 'hugo.velasco@msg.group',
		password: 'sadie1',
		firstName: 'Hugo',
		lastName: 'Velasco',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/77.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'GO',
				type: SkillType.HARD,
			},
			{
				name: 'PHP',
				type: SkillType.HARD,
			},
			{
				name: 'Perl',
				type: SkillType.HARD,
			},
			{
				name: 'Zielorientiert',
				type: SkillType.SOFT,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Portfolio Website',
				description:
					'Classic, dynamic, & multifunctional portfolio website. This site showcases your projects and portfolio.',
				startDate: '2022-11-15',
				endDate: '2022-11-25',
			},
			{
				name: 'Meme Generator',
				description:
					'Users need to enter the required text for the meme and create memes with ease.',
				startDate: '2022-11-26',
				endDate: '2022-12-01',
			},
			{
				name: 'Chat App',
				description:
					'A chat app using firebase, authentication, firebase real-time database management.',
				startDate: '2022-11-10',
				endDate: '2022-12-01',
			},
			{
				name: 'E-Commerce Website',
				description: 'A E-Commerce Website using Sveltestarp and Svelte.',
				startDate: '2022-12-04',
				endDate: '2022-12-10',
			},
			{
				name: 'Pricing Component',
				description: 'Responsive Services Section using CSS Flexbox',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
		],
		interests: [
			{
				name: 'React'
			}
		]
	},
	{
		id: 10,
		email: 'amy.beck@msg.group',
		password: 'cheyenne',
		firstName: 'Amy',
		lastName: 'Beck',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/0.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'JavaEE',
				type: SkillType.HARD,
			},
			{
				name: 'Python',
				type: SkillType.HARD,
			},
			{
				name: 'C',
				type: SkillType.HARD,
			},
			{
				name: 'Empathie',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Chat App',
				description:
					'A chat app using firebase, authentication, firebase real-time database management.',
				startDate: '2022-11-10',
				endDate: '2022-12-01',
			},
			{
				name: 'E-Commerce Website',
				description: 'A E-Commerce Website using Sveltestarp and Svelte.',
				startDate: '2022-12-04',
				endDate: '2022-12-10',
			},
			{
				name: 'Pricing Component',
				description: 'Responsive Services Section using CSS Flexbox',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'IP Address Tracker',
				description: ' IP Tracking application.',
				startDate: '2022-12-10',
				endDate: '2022-12-15',
			},
			{
				name: 'Landing Page Design',
				description: 'Landing Page design using HTML and CSS',
				startDate: '2022-12-11',
				endDate: '2022-12-23',
			},
		],
		interests: [
			{
				name: 'health'
			}
		]
	},
	{
		id: 11,
		email: 'janina.verspeek@msg.group',
		password: 'owen',
		firstName: 'Janina',
		lastName: 'Verspeek',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/women/60.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Visual Basic',
				type: SkillType.HARD,
			},
			{
				name: 'Pascal',
				type: SkillType.HARD,
			},
			{
				name: 'Basic',
				type: SkillType.HARD,
			},
			{
				name: 'Selbstdiszipiln',
				type: SkillType.SOFT,
			},
			
		],
		projects: [
			{
				name: 'Content Management System',
				description:
					'CMS with features like blog post, add elements, delete elements.',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Pricing Component',
				description: 'Responsive Services Section using CSS Flexbox',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'IP Address Tracker',
				description: ' IP Tracking application.',
				startDate: '2022-12-10',
				endDate: '2022-12-15',
			},
			{
				name: 'Landing Page Design',
				description: 'Landing Page design using HTML and CSS',
				startDate: '2022-12-11',
				endDate: '2022-12-23',
			},
			{
				name: 'Job listings with filtering',
				description:
					'Job Listings using DOM concept, including Different types of job filtering and an option to save the list, etc.',
				startDate: '2022-12-04',
				endDate: '2023-01-05',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 12,
		email: 'kelly.fowler@msg.group',
		password: 'benton',
		firstName: 'Kelly',
		lastName: 'Fowler',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/70.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Lisp',
				type: SkillType.HARD,
			},
			{
				name: 'LUA',
				type: SkillType.HARD,
			},
			{
				name: 'Flexibel',
				type: SkillType.SOFT,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
			{
				name: 'M',
				type: SkillType.HARD,
			},
			{
				name: 'Organisationstalent',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'MSG Music Player',
				description:
					'MSG Music Player with features like Track loading, Track Art, Track details, shuffle play, repeat play, Playlists, and random background color change.',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Pricing Component',
				description: 'Responsive Services Section using CSS Flexbox',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'IP Address Tracker',
				description: ' IP Tracking application.',
				startDate: '2022-12-10',
				endDate: '2022-12-15',
			},
			{
				name: 'Landing Page Design',
				description: 'Landing Page design using HTML and CSS',
				startDate: '2022-12-11',
				endDate: '2022-12-23',
			},
			{
				name: 'URL shortening API landing page',
				description:
					'API integration and the JavaScript libraries like VUE and React',
				startDate: '2022-12-03',
				endDate: '2022-12-06',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 13,
		email: 'ahmet.tokgoz@msg.group',
		password: 'potato',
		firstName: 'Ahmet',
		lastName: 'Tokgöz',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'VHDL',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran 90',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'PostScript',
				type: SkillType.HARD,
			},
			{
				name: 'Kritikfähig',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Pricing Component',
				description: 'Responsive Services Section using CSS Flexbox',
				startDate: '2022-11-01',
				endDate: '2022-12-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'IP Address Tracker',
				description: ' IP Tracking application.',
				startDate: '2022-12-10',
				endDate: '2022-12-15',
			},
			{
				name: 'Landing Page Design',
				description: 'Landing Page design using HTML and CSS',
				startDate: '2022-12-11',
				endDate: '2022-12-23',
			},
		],
		interests: [
			{
				name: 'React'
			}
		]
	},
	{
		id: 14,
		email: 'maya.walker@msg.group',
		password: 'spam',
		firstName: 'Maya',
		lastName: 'Walker',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/14.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Joy',
				type: SkillType.HARD,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
			{
				name: 'M',
				type: SkillType.HARD,
			},
			{
				name: 'Organisationstalent',
				type: SkillType.SOFT,
			},
			{
				name: 'ML',
				type: SkillType.HARD,
			},
			{
				name: 'OPAL',
				type: SkillType.HARD,
			},
			{
				name: 'Teamfähigkeit',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Blog Page Design',
				description: 'MSG Blogpage design using HTML and CSS',
				startDate: '2022-11-18',
				endDate: '2022-12-01',
			},
			{
				name: 'Project 1',
				description: 'Project 1 description',
				startDate: '2019-01-01',
				endDate: '2019-01-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'IP Address Tracker',
				description: ' IP Tracking application.',
				startDate: '2022-12-10',
				endDate: '2022-12-15',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 15,
		email: 'nina.williams@msg.group',
		password: 'nikki1',
		firstName: 'Nina',
		lastName: 'Williams',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/8.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'D',
				type: SkillType.HARD,
			},
			{
				name: 'Visual Basic',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran',
				type: SkillType.HARD,
			},
			{
				name: 'VHDL',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran 90',
				type: SkillType.HARD,
			},
			{
				name: 'Eigeninitiative',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'User Authentication System',
				description:
					'Authentication in NodeJS with PassportJS, Creating a Login system in PHP',
				startDate: '2022-11-18',
				endDate: '2022-11-29',
			},
			{
				name: 'Proxy Server Project',
				description: 'Proxy Server of MSG Employee Database',
				startDate: '2022-12-01',
				endDate: '2023-01-01',
			},
			{
				name: 'Project 1',
				description: 'Project 1 description',
				startDate: '2019-01-01',
				endDate: '2019-01-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 16,
		email: 'rishaan.prabhakaran@msg.group',
		password: 'tanker',
		firstName: 'Rishaan',
		lastName: 'Prabhakaran',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/men/41.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'VHDL',
				type: SkillType.HARD,
			},
			{
				name: 'Fortran 90',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
			{
				name: 'Stressresitent',
				type: SkillType.SOFT,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
			{
				name: 'M',
				type: SkillType.HARD,
			},
			{
				name: 'Organisationstalent',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Book Rentals Application',
				description: 'Book Rentals Application for MSG library',
				startDate: '2022-11-19',
				endDate: '2022-12-01',
			},
			{
				name: 'Project 1',
				description: 'Project 1 description',
				startDate: '2019-01-01',
				endDate: '2019-01-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'Web Crawler Application',
				description:
					'An application for MSG that can crawl the web for the purpose of web indexing or gathering data.',
				startDate: '2022-12-25',
				endDate: '2022-12-26',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 17,
		email: 'dragomir.radanovic@msg.group',
		password: 'tongue',
		firstName: 'Dragomir',
		lastName: 'Radanović',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/51.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'Bliss',
				type: SkillType.HARD,
			},
			{
				name: 'Oberon',
				type: SkillType.HARD,
			},
			{
				name: 'Strukturierte Arbeitsweise',
				type: SkillType.SOFT,
			},
			{
				name: 'M',
				type: SkillType.HARD,
			},
			{
				name: 'Organisationstalent',
				type: SkillType.SOFT,
			},
			{
				name: 'CLIST',
				type: SkillType.HARD,
			},
			{
				name: 'Kommunikativ',
				type: SkillType.SOFT,
			},
		],
		projects: [
			{
				name: 'Project 1',
				description: 'Project 1 description',
				startDate: '2019-01-01',
				endDate: '2019-01-01',
			},
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'Road Traffic Prediction',
				description:
					'Road Traffic Prediction for MSG Employees for punctuality',
				startDate: '2022-11-23',
				endDate: '2022-11-26',
			},
			{
				name: 'Backend for the E-Commerce Application MSGazon',
				description:
					'Backend for the E-Commerce Application MSGazon for MSG Employees',
				startDate: '2022-11-25',
				endDate: '2022-11-28',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 18,
		email: 'ruben.thomas@msg.group',
		password: 'miller1',
		firstName: 'Ruben',
		lastName: 'Thomas',
		role: Role.GUEST,
		profilePicture: 'https://randomuser.me/api/portraits/men/40.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
		],
		projects: [
			{
				name: 'MSG CLI application',
				description: 'CLI application for MSG Software Projects',
				startDate: '2022-11-16',
				endDate: '2022-11-21',
			},
			{
				name: 'Road Traffic Prediction',
				description:
					'Road Traffic Prediction for MSG Employees for punctuality',
				startDate: '2022-11-23',
				endDate: '2022-11-26',
			},
			{
				name: 'Project 1',
				description: 'Project 1 description',
				startDate: '2019-01-01',
				endDate: '2019-01-01',
			},
			{
				name: 'Backend for the E-Commerce Application MSGazon',
				description:
					'Backend for the E-Commerce Application MSGazon for MSG Employees',
				startDate: '2022-11-25',
				endDate: '2022-11-28',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
	{
		id: 19,
		email: 'carmen.lozano@msg.group',
		password: 'jeanette',
		firstName: 'Carmen',
		lastName: 'Lozano',
		role: Role.ADMIN,
		profilePicture: 'https://randomuser.me/api/portraits/women/23.jpg',
		jobTitle: 'Software Engineer',
		phone: '1234567890',
		hireDate: '2019-01-01',
		skills: [
			{
				name: 'HTML',
				type: SkillType.HARD,
			},
			{
				name: 'CSS',
				type: SkillType.HARD,
			},
			{
				name: 'JavaScript',
				type: SkillType.HARD,
			},
		],
		projects: [
			{
				name: 'Detecting Parkinson’s Disease',
				description:
					'Application Detecting Parkinson’s Disease for the health of MSG Employees',
				startDate: '2022-11-10',
				endDate: '2022-11-30',
			},
			{
				name: 'Air Pollution Prediction',
				description:
					'Air Pollution Prediction for better lung condition of MSG Employees',
				startDate: '2022-12-01',
				endDate: '2022-12-05',
			},
			{
				name: 'Road Traffic Prediction',
				description:
					'Road Traffic Prediction for MSG Employees for punctuality',
				startDate: '2022-11-23',
				endDate: '2022-11-26',
			},
			{
				name: 'Project 1',
				description: 'Project 1 description',
				startDate: '2019-01-01',
				endDate: '2019-01-01',
			},
		],
		interests: [
			{
				name: 'nextJS'
			}
		]
	},
];

// get user by id
export function getUserById(id: number) {
	return users.find((user) => user.id === id);
}

// login
export function login(email: string, password: string) {
	const user = users.find(
		(user) => user.email === email && user.password === password
	);
	if (!user) return;
	const { password: _, ...userWithoutPassword } = user;
	return userWithoutPassword;
}

// get all users
export async function getAll() {
	return users.map((user) => {
		const { password: _, ...userWithoutPassword } = user;
		return userWithoutPassword;
	});
}

// create user
export function create(user: Omit<UserType, 'id' | 'role'>) {
	// assign user id and a few other properties then save
	const newUser = {
		...user,
		id: users.length + 1,
		role: Role.USER,
	};
	users.push(newUser);
	return newUser;
}

// const userfromRandomUser = await fetch(
// 	'https://randomuser.me/api/?results=20'
// )
// 	.then((response) => response.json())
// 	.then((data) => data.results);

// const usersWithProfilePicture = userfromRandomUser.map((user) => {
// 	return {
// 		id: user.login.uuid,
// 		email: user.email.replace(/\@example.com/, '@msg.group'),
// 		password: user.login.password,
// 		firstName: user.name.first,
// 		lastName: user.name.last,
// 		role: Role.USER,
// 		profilePicture: user.picture.large,
// 		jobTitle: 'Software Engineer',
// 	};
// });

// const userToReturn = [...users, ...usersWithProfilePicture];
