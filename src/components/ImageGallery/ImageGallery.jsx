import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import css from "./ImageGallery.module.css";
import propTypes from 'prop-types';
import Notiflix from 'notiflix';

export class ImageGallery extends Component {
    state = {
        modal: false,
        modalURL: "",
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.modal !== this.state.modal) {
            Notiflix.Loading.dots()
            Notiflix.Loading.remove(200)
        }
    }

    modalTogle = () => { this.setState(state => ({ modal: !state.modal })); }
    modalURLHandler = (newUrl) => this.setState({ modalURL: newUrl })



    render() {
        const { modalTogle, modalURLHandler } = this
        const { modal, modalURL } = this.state
        const { hits, loadMore, handleNextPage } = this.props
        return (
            <div>
                <ul className={css.ImageGallery}>
                    {hits.length >= 1 && hits.map(({ id, webformatURL, largeImageURL }) =>
                        <ImageGalleryItem
                            key={id}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            modalTogle={modalTogle}
                            modalURLHandler={modalURLHandler} />)}
                </ul>
                {loadMore && (<Button handleNextPage={handleNextPage}></Button>)}
                {modal && (<Modal modalTogle={modalTogle} modalURL={modalURL}></Modal>)}
            </div>

        )
    }
}

ImageGallery.propTypes = {
    handleNextPage: propTypes.func.isRequired,
    loadMore: propTypes.bool.isRequired,
    hits: propTypes.array.isRequired,
}

export default ImageGallery
