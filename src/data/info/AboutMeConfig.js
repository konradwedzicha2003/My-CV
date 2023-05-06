import { AboutMeListTypes } from "../../config/config";
import challenges from "../../assets/challenges.png"
import bikeRides from "../../assets/bikeRides.png"
import games from "../../assets/games.png"
import motorbike from "../../assets/motorbike.png"


export const AboutMeConfig = {
    education: {
        mainHeader: 'EDUCATION',
        primaryHeader: 'Complex of Schools and Educational Institutions in Skała',
        secondaryHeader: '2019-2022',
        text: 'Graduated with matura final exam results:',
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
                icon: challenges,
            },
            {
                hobby: 'Computer games',
                icon: games,
            },
            {
                hobby: 'Long bike rides over 100km',
                icon: bikeRides,
            },
            {
                hobby: 'Motorbikes',
                icon: motorbike,
            },
        ],
    },

    profile: {
        mainHeader: 'Profile',
        sections: [ 
            {   
                header: 'A little bit about me',
                text: 'I am a 20 years old ambitious high school graduate, who is a self learner with open mind and eager to learn more about IT industry.',
                separateParagraphFromHeaders: true,
            },
        ],
    },
    
    experience: {
        mainHeader: 'EXPERIENCE',
        sections: [ 
                        {
                header: 'Previous jobs',
                separateParagraphFromHeaders: true,
                listType: AboutMeListTypes.dotList,
                list: [
                    {
                        job: 'Intern at TINT (tintup.com) from December 2022 to May 2023',
                    },
                ],
            },
            {
                header: 'Courses',
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
                header: 'Practical projects',
                text: 'These are my own projects that I have done to learn about new things, technologies and to gain confidence in my work:',
                separateParagraphFromHeaders: true,
                listType: AboutMeListTypes.dotList,
                list: [
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
                        project: 'To do list - small program allowing to write some task and save them, change order of tasks when there are many or delete any of them - HTML, BEM, CSS, REACT',
                    },
                    {
                        project: 'Millionaires - fully functional game allowing to chose one of 4 answers to any question, use lifebuoys to get some help, progress through 15 questions up to the end and restart game without refreshing site- HTML, BEM, RWD, CSS - animations, Typescript, REACT',
                    },
                ],
            },
        ],
    
    },
    footerContent: 'I consent to the processing of my personal data by TINT (tintup.com) for the purpose of recruitment for the position I am applying.',
};
