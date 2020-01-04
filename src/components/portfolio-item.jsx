import React from 'react'

function Component(props) {
    return (
        <tr>
            <td>
                <ul>
                    <li>
                        <p className={'project-title'}><a href={props.link} target='_blank'>{props.title}</a></p>
                    </li>
                    <li>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <img id="githubLogo" src={require('../images/github.png')} alt="Github Logo" 
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                    </li>
                </ul>
            </td>
            <td>
                {
                    props.description.map((desc) => (
                    <p>{desc}</p>
                    ))
                }
                <p>Written in <span>{props.technology}</span></p>
            </td>
        </tr>
    )
}

export default Component