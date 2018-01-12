import React from 'react'
import MyDay2Comp from './MyDay2Comp'

const Concat = (props) => (
    <div>
        <MyDay2Comp showText={props.showText} text={props.firstText} />
    </div>
)

export default Concat