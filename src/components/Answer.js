import React, { Component } from 'react'
import Image from './image';

class Answer extends Component {
    showImages = () => {
        const images = this.props.images;
        if(images.length === 0) return null;

        return (
            <React.Fragment>
                <div className="col-12 o-5 row">
                    {images.map(image => (
                        <Image
                            key={image.id}
                            image={image}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        );
    }
}

export default Answer;