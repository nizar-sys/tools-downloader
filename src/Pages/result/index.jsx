import React, { Component, Fragment } from 'react'

class ResultPage extends Component{
    constructor(props){
        super(props)
    }
    render() {
        const {data} = this.props
        return (
            <Fragment>
                {data}
            </Fragment>
        )
    }
}
export default ResultPage;