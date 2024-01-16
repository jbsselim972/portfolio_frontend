export { default as images } from './images'
export const projects: IProject[] = [
    {
        id: 'spotify',
        title: 'Spotify',
        description: "This is a clone of spotify's web application",
        projectLink: 'https://spotify-clone-jbsselim972.vercel.app',
        codeLink: 'https://github.com/jbsselim972/spotify-clone',
        imgUrl: 'spotify',
        tags: ['nextjs', 'reactjs', 'spotify', 'frontend'],
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Website',
        description:
            'This E-commerce website is made using Nextjs as Frontend and Sanity as Backend',
        projectLink: 'https://ecommerce-demo-jbsselim.vercel.app',
        codeLink: 'https://github.com/jbsselim972/ecommerce-demo',
        imgUrl: 'ecommerce',
        tags: ['nextjs', 'reactjs', 'sanity', 'fullstack', 'ecommerce'],
    },
    {
        id: 'instagram',
        title: 'Instagram',
        description: "This is a clone of instagram's web application",
        projectLink: 'https://instaclone-jbsselim972.vercel.app',
        codeLink: 'https://github.com/jbsselim972/instaclone',
        imgUrl: 'instagram',
        tags: ['nextjs', 'reactjs', 'firebase', 'fullstack'],
    },
    {
        id: 'gpt3',
        title: 'GPT-3',
        description: 'This is a UI/UX website made with Reactjs',
        projectLink: 'https://gpt3-jbsse.vercel.app',
        codeLink: 'https://github.com/jbsselim972/gpt3_jbsse',
        imgUrl: 'gpt3',
        tags: ['reactjs', 'uiux', 'frontend'],
    },
    {
        id: 'krypt',
        title: 'Krypt',
        description:
            'This is an example of an exchange for cryptocurrencies working with Metamask and Ethereum blockchain',
        projectLink: 'https://krypt-jbsse.vercel.app',
        codeLink: 'https://github.com/jbsselim972/web3.0example',
        imgUrl: 'krypt',
        tags: ['reactjs', 'web3', 'uiux', 'fullstack'],
    },
    {
        id: 'medium',
        title: 'Medium',
        description:
            "This is a clone of Medium's website with some blog functionnalities made with ReactJS and Backend by Sanity",
        projectLink: 'https://jbsmedium.vercel.app',
        codeLink: 'https://github.com/jbsselim972/jbsmedium',
        imgUrl: 'medium',
        tags: ['nextjs', 'reactjs', 'sanity', 'fullstack'],
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
    {
        id: 'netflix',
        title: 'Netflix',
        description:
            'This is a Netflix clone made with ReactJS with payment by Stripe and Backend by Firebase',
        projectLink: 'https://netflix-clone-b773f.web.app',
        codeLink: '',
        imgUrl: 'netflix',
        tags: ['reactjs', 'stripe', 'fullstack'],
    },
    {
        id: 'amazon',
        title: 'Amazon',
        description: "This is an Amazon's website clone made with NextJS",
        projectLink: 'https://amazon-jbsselim972.vercel.app',
        codeLink: 'https://github.com/jbsselim972/amazon',
        imgUrl: 'amazon',
        tags: ['nextjs', 'reactjs', 'frontend', 'ecommerce'],
    },
    {
        id: 'airbnb',
        title: 'Airbnb',
        description: "This is an Airbnb's website clone made with NextJS",
        projectLink: 'https://airbnb-jbsselim.vercel.app',
        codeLink: 'https://github.com/jbsselim972/airbnb',
        imgUrl: 'airbnb',
        tags: ['nextjs', 'reactjs', 'frontend'],
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
                key: 'ricoh',
                name: 'Project Manager - Software Engineer',
                company: 'RICOH France',
                description:
                    'Development of several applications for clients with dematerialization or desktop publishing needs.',
                dateFrom: '2019-11-01',
                dateTo: 'Present',
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
