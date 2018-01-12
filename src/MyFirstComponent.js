import React from 'react'; //przkazujemy atrybuty jako obiekt props
const MyFirstComponent = (props) => (
    <div>{/* przkazujemy atrybuty jako obiekt props */}
        Hello World {props.showName ? props.name : null}
    </div>
)

export default MyFirstComponent