import React from 'react'

export default function Icons(props) {
    return (
        <div>
            <a href={props.url}>
                <div className="roundbtn">
                    <i class={props.icon}></i>
                </div>
            </a>
        </div>
    )
}
