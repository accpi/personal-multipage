import React from "react";
import PageHeader from '../components/pageheader'

function App() {
    return (
        <div id='section'>
            <div id='section-content'>
                <PageHeader title={'Portfolio'} />

                <p>Hi! I'm <span>Nelson</span>, a Toronto based full-stack developer. I've got pretty <span>horrible taste in music</span>, know the <span>best taco place in Toronto</span>, and love <span>local arts and music</span>.</p>
                <p>I work at <span>Note Taking Express</span> as a full-stack developer working on <span>accesibility software</span>.</p>
                <p>I exhibited as the <span>program rep</span> at Humber College's Project Expo with a <span>K-POP Manager Simulation game</span> running on <span>ASP.NET, MySQL, Javascript, and C#</span></p>
                <p>I work primarily with <span>Javascript</span> based technologies (<span>React, Express, Node</span>) and <span>PostgreSQL</span>, but love Python based tech like <span>Django</span>.</p>
            </div>
        </div>   
    )
}

export default App