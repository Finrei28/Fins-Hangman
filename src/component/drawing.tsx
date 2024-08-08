import React from "react"

const bottomStand = <div className="bottomStand"/>
const verticalStand = <div className="verticalStand"/>
const topStand = <div className="topStand"/>
const rightLedge = <div className="rightLedge"/>
const leftLedge = <div className="leftLedge"/>
const hanger = <div className="hanger"/>
const head = <div className="head"/>
const body = <div className="body"/>
const rightArm = <div className="rightArm"/>
const leftArm = <div className="leftArm"/>
const rightLeg = <div className="rightLeg"/>
const leftLeg = <div className="leftLeg"/>

type DrawingProps = {
    numberofGuesses: number
}

const drawings = [
    { component: bottomStand, key: 'bottomStand' },
    { component: verticalStand, key: 'verticalStand' },
    { component: topStand, key: 'topStand' },
    { component: rightLedge, key: 'rightLedge' },
    { component: leftLedge, key: 'leftLedge' },
    { component: hanger, key: 'hanger' },
    { component: head, key: 'head' },
    { component: body, key: 'body' },
    { component: leftArm, key: 'leftArm' },
    { component: rightArm, key: 'rightArm' },
    { component: leftLeg, key: 'leftLeg' },
    { component: rightLeg, key: 'rightLeg' }
]

export default function Drawing({ numberofGuesses }: DrawingProps) {
    return (
        <div style={{ position: 'relative' }} className="drawing">
            {drawings.slice(0, numberofGuesses).map(({ component, key }) => (
                React.cloneElement(component, { key })
            ))}
        </div>
    )
}