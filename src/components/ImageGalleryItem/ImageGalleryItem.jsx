import React, { Component } from 'react';
import css from "./ImageGalleryItem.module.css";
import propTypes from 'prop-types';
export class ImageGalleryItem extends Component {
    onImgClick = ({ target: { attributes } }) => {
        this.props.modalURLHandler(attributes.js.value)
        this.props.modalTogle()
    }
    render() {
        const { webformatURL, largeImageURL } = this.props
        return (
            <li className={css.ImageGalleryItem}>
                <img onClick={this.onImgClick} js={largeImageURL} src={webformatURL} className={css.ImageGalleryItemImage} alt="" />
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
    modalTogle: propTypes.func.isRequired,
    modalURLHandler: propTypes.func.isRequired,
}
export default ImageGalleryItem

