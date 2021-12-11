import React, { Component } from 'react';


class Browser extends Component {
    valueRef = React.createRef();
    handle = (e) => {
        e.preventDefault();
        const valueInput = this.valueRef.current.value;
        this.props.valueBrowser(valueInput);
    }

    render() {
        return (
            <form onSubmit={this.handle}>
                <div className="row">
                    <div className="form-group col-md-10">
                        <input ref= {this.valueRef} type="text" className="form-control form-control-md" placeholder="example: coffe"/>
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" className="btn btn-md btn-danger btn-block" value="search"/>
                        <br></br>
                       
                    </div>
                </div> 
            </form> 
        );
    }
}

export default Browser