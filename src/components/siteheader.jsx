import React from 'react'

function Component(props) {
    return (
        <header>
            <div id='header-title'>
                <h1>Nelson Kim</h1>
                <h2>Software Developer // Cool Dude 😎</h2>
            </div>

            <div id='header-contact-info'>
                <h2><a href='mailto:nelson@starcatcafe.com' target='_blank' rel="noopener noreferrer">nelson@starcatcafe.com</a></h2>
                <div id='header-social-links'>
                    <ul>
                        <a href="mailto:nelson@starcatcafe.com" target="_blank" rel="noopener noreferrer">
                            <img id="mailImage" src={require('../images/email.png')} alt="Email Picture" 
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                        <a href="https://github.com/accpi" target="_blank" rel="noopener noreferrer">
                            <img id="githubLogo" src={require('../images/github.png')} alt="Github Logo" 
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                        <a href="https://twitter.com/starcatcafe" target="_blank" rel="noopener noreferrer">
                            <img id="twitterLogo" src={require('../images/twitter.png')} alt="Twitter Logo"
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/nelson-kim-540b9973/" target="_blank" rel="noopener noreferrer">
                            <img id="linkedInLogo" src={require('../images/linkedin.png')} alt="LinkedIn Logo"
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Component