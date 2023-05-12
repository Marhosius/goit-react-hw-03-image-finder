import React, { Component } from 'react';
import { getPhoto, getByID } from "../../api/apiFetch";
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
    state = {
        page: 1,
        hits: []
    }

    componentDidUpdate = async (prevProps, now) => {
        if (prevProps !== this.props) {
            const { data: { hits } } = await getPhoto(this.props.searchingValue, this.state.page)
            this.setState(({ hits }))
        }
        return
    }

    render() {
        return (
            <ul className="gallery">
                {this.state.hits.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />)}
            </ul>
        )
    }
}

export default ImageGallery
