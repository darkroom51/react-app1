import React from 'react'
import InnerComponent from './InnerComponent'

const OuterComponent = (props) => (
    <div>
        <InnerComponent text={props.text} />
    </div>
)

export default OuterComponent