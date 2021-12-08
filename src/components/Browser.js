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
                    <div className="form-group col-md-8">
                        <input ref= {this.valueRef} type="text" className="form-control form-control-lg" placeholder="Search"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="search..."/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Browser