export { default as images } from './images'
export const projects: IProject[] = [
    {
        id: 'trello',
        title: 'Trello Clone',
        description:
            'This Trello clone website was made using Nextjs, Clerk, PostgreSQL with Supabase and Stripe for payment subscription. It is a fullstack project and use organization management from clerk to create and manage organization and projects like Trello.',
        projectLink: 'https://jbsselim-trello.netlify.app',
        codeLink: 'https://github.com/jbsselim972/trello-demo',
        imgUrl: 'trello',
        tags: ['nextjs', 'fullstack', 'vercel'],
    },
    {
        id: 'discord',
        title: 'Discord Clone',
        description:
            'This Discord clone website was made using Nextjs, Clerk, Supabase, Socket.io for the chat and Livekit Cloud for managing Video and Audio feed for conversations. It is a fullstack project, you can manage servers, users and roles like Discord. You can start text,video and audio channels and chat with other users',
        projectLink: 'https://jbsselim-discord.vercel.app',
        codeLink: 'https://github.com/jbsselim972/discord-clone',
        imgUrl: 'discord',
        tags: ['nextjs', 'fullstack', 'websockets', 'vercel'],
    },
    {
        id: 'ecommercefullstack',
        title: 'E-Commerce FullStack Website',
        description:
            'This E-commerce website was made using Nextjs for frontend with an admin backend to manage multiple stores and their respective products.',
        projectLink: 'https://nextjs-ecommerce-store.vercel.app',
        codeLink: 'https://github.com/jbsselim972/nextjs-ecommerce-store',
        imgUrl: 'ecommercefullstack',
        tags: ['nextjs', 'reactjs', 'fullstack', 'ecommerce', 'vercel'],
    },
    {
        id: 'mernfoodapp',
        title: 'Food APP MERN',
        description:
            'This web application is made with the MERN Stack and is a food delivery management application. It is a fullstack project where frontend and backend are respectively made with React and Node.js with Auth0 for authentication and MongoDB for the database.',
        projectLink: 'https://mern-food-app-frontend-9qqp.onrender.com',
        codeLink: 'https://github.com/jbsselim972/mern-food-app-frontend',
        imgUrl: 'mernfoodapp',
        tags: ['reactjs', 'nodejs', 'fullstack', 'render'],
    },
    {
        id: 'flexibble',
        title: 'Flexibble',
        description: 'This Dribble clone website was made using Nextjs',
        projectLink: 'https://flexibble-jbsselim.vercel.app',
        codeLink: 'https://github.com/jbsselim972/flexibble',
        imgUrl: 'flexibble',
        tags: ['nextjs', 'reactjs', 'fullstack'],
    },
    {
        id: 'spotify',
        title: 'Spotify',
        description: "This is a clone of spotify's web application",
        projectLink: ' https://jbsselim-spotify.netlify.app',
        codeLink: 'https://github.com/jbsselim972/spotify-clone',
        imgUrl: 'spotify',
        tags: ['nextjs', 'reactjs', 'spotify', 'frontend'],
    },
    {
        id: 'gpt3',
        title: 'GPT-3',
        description: 'This is a UI/UX website was made with React',
        projectLink: 'https://gpt3-jbsse.vercel.app',
        codeLink: 'https://github.com/jbsselim972/gpt3_jbsse',
        imgUrl: 'gpt3',
        tags: ['reactjs', 'uiux', 'frontend'],
    },
    {
        id: 'krypt',
        title: 'Krypt',
        description:
            'This is a demo of an exchange for cryptocurrencies working with Metamask and connect to Ethereum blockchain with a Solidity contract',
        projectLink: 'https://krypt-jbsse.vercel.app',
        codeLink: 'https://github.com/jbsselim972/web3.0example',
        imgUrl: 'krypt',
        tags: ['reactjs', 'web3', 'uiux', 'fullstack'],
    },
    {
        id: 'nftplatform',
        title: 'NFT Platform',
        description:
            'This is a NFT exchange project with wallet connect from Thirdweb and Backend by Sanity',
        projectLink: 'https://nftplatform.vercel.app',
        codeLink: 'https://github.com/jbsselim972/nftplatform',
        imgUrl: 'nftplatform',
        tags: ['nextjs', 'reactjs', 'sanity', 'fullstack', 'web3'],
    },
]

export const skills: ISkill[] = [
    {
        name: 'HTML',
        bgColor: '#fef4f5',
        icon: 'html',
        progress: 90,
    },
    {
        name: 'CSS',
        bgColor: '#fef4f5',
        icon: 'css',
        progress: 90,
    },
    {
        name: 'Javascript',
        bgColor: '#fef4f5',
        icon: 'javascript',
        progress: 80,
    },
    {
        name: 'Typescript',
        bgColor: '#fef4f5',
        icon: 'typescript',
        progress: 60,
    },
    {
        name: 'React',
        bgColor: '#fef4f5',
        icon: 'react',
        progress: 70,
    },
    {
        name: 'NextJS',
        bgColor: '#fef4f5',
        icon: 'nextjs',
        progress: 60,
    },
    {
        name: 'Node.js',
        bgColor: '#fef4f5',
        icon: 'node',
        progress: 60,
    },
    {
        name: 'MongoDB',
        bgColor: '#fef4f5',
        icon: 'mongodb',
        progress: 70,
    },
    {
        name: 'Git',
        bgColor: '#fef4f5',
        icon: 'git',
        progress: 90,
    },
    {
        name: 'GraphQL',
        bgColor: '#fef4f5',
        icon: 'graphql',
        progress: 40,
    },
    {
        name: 'Linux',
        bgColor: '#fef4f5',
        icon: 'linux',
        progress: 70,
    },
    {
        name: 'C++',
        bgColor: '#fef4f5',
        icon: 'cpp',
        progress: 70,
    },
    {
        name: 'Python',
        bgColor: '#fef4f5',
        icon: 'python',
        progress: 60,
    },
    {
        name: 'Ruby',
        bgColor: '#fef4f5',
        icon: 'ruby',
        progress: 60,
    },
    {
        name: 'PHP',
        bgColor: '#fef4f5',
        icon: 'php',
        progress: 70,
    },
]

export const workExperiences: IExperience[] = [
    {
        works: [
            {
                key: 'freelance',
                name: 'Freelance - Fullstack Engineer',
                company: 'Freelance',
                description: 'Development of website and web applications.',
                dateFrom: '2024-06-01',
                dateTo: 'now',
            },
        ],
        year: '2024',
    },
    {
        works: [
            {
                key: 'ricoh',
                name: 'Project Manager - Software Engineer',
                company: 'RICOH France',
                description:
                    'Development of several applications for clients with dematerialization or desktop publishing needs.',
                dateFrom: '2019-11-01',
                dateTo: '2024-03-30',
            },
        ],
        year: '2019',
    },
    {
        works: [
            {
                key: 'afihweb',
                name: 'Web developer',
                company: 'A.F.I.H',
                description:
                    'Development of new internal CRM functionalities.Development of an API linked to the internal CRM linking the mobile application for the sales fleet.Development of a statistics for the commercial fleet.',
                dateFrom: '2017-12-01',
                dateTo: '2019-03-01',
            },
        ],
        year: '2017',
    },
    {
        works: [
            {
                key: 'ricohintern',
                name: 'Intern',
                company: 'RICOH France',
                description:
                    'Development of a physical mail sending application  and development of a file sending solution. ',
                dateFrom: '2016-09-01',
                dateTo: '2017-02-01',
            },
        ],
        year: '2016',
    },
    {
        works: [
            {
                key: 'tech4team',
                name: 'Intern',
                company: "Tech'4'Team",
                description: 'Development of a web application to improve stadium ticket sales.',
                dateFrom: '2014-03-01',
                dateTo: '2014-08-01',
            },
        ],
        year: '2014',
    },
]
