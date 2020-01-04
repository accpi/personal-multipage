import React from "react";
import PageHeader from '../components/pageheader'
import PortfolioEntry from '../components/portfolio-item'

const portfolio_entries = [
    {
        title: 'Champion Mastery',
        link: 'https://github.com/accpi/pro-bans',
        description: [
            'Champion Mastery consumes the League of Legends API to search through users to view their ranking and champion mastery to help players consider their bans for pre-made games.',
            'Champion Mastery works within the API rate limits by saving data to an Amazon hosted database. Due to these rate limits, full match-history is unable to be searched.',
            'Further development on the project includes server selection and saving of previously searched teams for easy access.',
            'Current development is on hosting the server through Heroku to push the app to live deployment.'
        ],
        technology: 'React, Express, Node, PostgreSQL, Heroku, Amazon S3 Storage, and Amazon RDS Database Hosting'
    },
    {
        title: 'Gatekeeper Last Night',
        link: 'https://github.com/accpi/gatekeeperlastnight',
        description: [
            'Gatekeepr Last Night is a Discord bot which scrapes Texts from Last Night to combine a random quote onto the image of the Gatekeeper from Fire Emblem Three Houses.',
            'Example images can be found on the project Github page.'
        ],
        technology: 'Flask, Beautiful Soup, Pillow, Heroku, and Discord.py'
    },
    {
        title: 'West Marches D&D Tracker',
        link: 'https://github.com/accpi/wm-db',
        description: [
            'Created during a 48 hour Django learning sprint, the WM Tracker tracks my online community\'s D&D sessions, characters, items, missions, and zones.',
            'Strong relational database typing to create a comprehensive data and metrics tracker for use in analzying the world of West Marches.',
            'This project is on hiatus as the current campaign has finished, and will resume when the new campaign launches, with new items and types to track!'
        ],
        technology: 'Django, Python, SQLite, PostgreSQL, Heroku, and Bootstrap'
    },
    {
        title: 'K-Pop Manager Sim',
        link: 'https://github.com/accpi/kpopManagerExpo',
        description: [
            'Designed and chosen for the Humber College Project EXPO, I presented this app as my program\'s representative.',
            'The user selects members from a pool of randomly generated artists and chooses a musical style, costume theme, and promotional theme to generate an album.',
            'Created as a proof of concept, the project is being ported to React, Express, Node, and PostgreSQL.',
        ],
        technology: 'ASP.NET, PHP, SQL, C#, Javascript, and Bootstrap'
    }
]



function App() {
    return (
        <div id='section'>
            <div id='section-content'>
                <PageHeader title={'Portfolio'} />

                <table id='portfolio'>
                    <col/>

                    <thead></thead>
                    <tbody>
                        {portfolio_entries.map((entry, index) => (
                            <PortfolioEntry
                                key={ index }
                                title={entry.title} link={entry.link} description={entry.description} technology={entry.technology}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>   
    )
}

export default App