import { AboutMeListTypes } from "../../config/config";

export const AboutMeConfig = {
    education: {
        mainHeader: 'EDUCATION',
        primaryHeader: 'Complex of Schools and Educational Institutions in Skała',
        secondaryHeader: '2019-2022',
        text: 'During my three year stay at this school, I have gained many interesting, but not connected with programming skills, yet this school helped me polish my English skills which made it easier for me to enter the IT world. My matura exams ended with results:',
        maturaResults: [
            {
                subject: 'Polish basic level',
                score: 76,
            },
            {
                subject: 'English basic level',
                score: 100,
            },
            {
                subject: 'Maths basic level',
                score: 86,
            },
            {
                subject: 'English extended level',
                score: 96,
            },
            {
                subject: 'Maths extended level',
                score: 14,
            },
        ],
    },
    
    skills: {
        header: 'SKILLS',
        skillsList: [
            {
                skill: 'HTML',
                level: 2,
            },
            {
                skill: 'CSS',
                level: 2,
            },
            {
                skill: 'Javascript',
                level: 2,
            },
            {
                skill: 'React',
                level: 2,
            },
            {
                skill: 'Github',
                level: 2,
            },
        ],
    },
    
    achievements: {
        header: 'ACHIEVEMENTS',
        achievementsList: [
            {
                achievement: '6 red stripes on school certificates including 3 during the high school',
            },
            {
                achievement: '2 scholarships from the starost of Krakow',
            },
        ],
    },
    
    hobby: {
        header: 'HOBBY',
        hobbyList: [
            {
                hobby: 'CSS & JS challenges',
            },
            {
                hobby: 'Computer games',
            },
            {
                hobby: 'Walks in the fresh air',
            },
            {
                hobby: 'Long bike rides over 100km',
            },
            {
                hobby: 'Motorbikes',
            },
        ],
    },

    profile: {
        mainHeader: 'Profile',
        sections: [ 
            {
                header: 'A little bit about me',
                text: 'I am a 19 year old high school graduate of which interests at some point turned towards the IT industry. It happened right before my high school started, I wasn\'t feeling completely right with my school choice even though it was a really fun experience. But then I thought to myself that it is not what I really want to do in the future. Because of my cousins proposal I got interested in IT industry and started learning some basic things. As the time was passing by I wanted to know more and more about various things in programming and I still do even when things get hard and don\'t go so smoothly. Yet I know I am still inexperienced in many ways that\'s why I am not giving up and I am open to learn more things that can help me with getting better at this job, do things faster, easier and more correctly.',
                separateParagraphFromHeaders: true,
            },
        ],
    },
    
    experience: {
        mainHeader: 'EXPERIENCE',
        sections: [ 
            {
                header: 'Courses',
                text: 'From the start of my programming journey, I was looking for people, who can help me with getting closer to my goals. On my way I found EDUWEB, Ultimate Courses and many free tutorials on youtube. On EDUWEB I learned about basics and later about more advanced functions of Javascript and on Ultimate Courses I learned about basics of React. In the meantime I watched many youtube courses that helped me with understanding some most basic things like CSS animations HTML semantics etc. Here ore the courses I\'ve done:',
                separateParagraphFromHeaders: true,
                listType: AboutMeListTypes.dotList,
                list: [
                    {
                        course: 'EDUWEB HTML5 & Javascript Basics',
                    },
                    {
                        course: 'EDUWEB HTML5 & Javascript Advanced',
                    },
                    {
                        course: 'Ultimate Courses React Basics',
                    },
                ],
            },
            {
                header: 'Practical mini projects',
                text: 'To understand how HTML CSS and Js works, I made over a dozen of mini projects, in which by using trial and error method I was trying to make my app look identical to the ones already existing using HTML and CSS, or to give it some functionality using JS. Here is the list of my bigger \'mini projects\' :',
                separateParagraphFromHeaders: true,
                listType: AboutMeListTypes.dotList,
                list: [
                    {
                        project: 'Onet - 1 to 1 copy of news site - HTML, CSS',
                    },
                    {
                        project: 'X-kom - 1 to 1 copy of online shop - HTML, BEM, CSS',
                    },
                    {
                        project: 'Memory game - small game which goal is to unfold 2 cards with identical numbers - HTML, BEM, CSS - animations, JS',
                    },
                    {
                        project: 'Slider - slider with appropriate animations of the slides, for example if slide goes left, current slide fades right - HTML, BEM, CSS - animations, JS',
                    },
                    {
                        project: 'Tags - simple template allowing to choose some tag or search it in input if they are too many tags - HTML, BEM, CSS, JS - functional programming',
                    },
                    {
                        project: 'To do list - small program allowing to write some task and save it, change order of tasks when there are many or delete any of them - HTML, BEM, CSS, REACT',
                    },
                    {
                        project: 'Millionaires - fully functional game allowing to chose one of 4 answers to any question, use lifebuoys to get some help, progress through 15 questions up to the end and restart game without refreshing site- HTML, BEM, RWD, CSS - animations, REACT,',
                    },
                ],
            },
            {
                header: 'Entering data on nordski.pl',
                text: 'For a short period of time I was responsible for entering data on nordski site. It wasn\'t a very educational time when it comes to learning programming but it surely helped me with being more open to seeking information from a variety of sources.',
                separateParagraphFromHeaders: true,
            },
        ],
    
    },
    footerContent: 'I consent to the processing of my personal data by TINT (tintup.com) for the purpose of recruitment for the position I am applying.',
};
