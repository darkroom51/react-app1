import React from 'react'; //przkazujemy atrybuty jako obiekt props
const MyFirstComponent = (props) => (
    <div>{/* przkazujemy atrybuty jako obiekt props */}
        <h2>Hello World {props.showName ? props.name : null}</h2>
    </div>
)

export default MyFirstComponent