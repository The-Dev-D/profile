import React from 'react'

export default function Icons(props) {
    return (
        <div className="iconwrap">
            <a href={props.url} target="_blank" rel="noreferrer">
                <div className="roundbtn">
                    <i class={props.icon}></i>
                </div>
                <div className="icontitle">
                {props.title}
                </div>
            </a>
        </div>
    )
}
