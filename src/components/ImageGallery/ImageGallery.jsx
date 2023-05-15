import React, { Component } from 'react';
import { getPixabay } from "../../api/apiFetch";
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import css from "./ImageGallery.module.css";
import Notiflix from 'notiflix';
import propTypes from 'prop-types';

export class ImageGallery extends Component {
    state = {
        page: 1,
        hits: [],
        loadMore: false,
        modal: false,
        modalURL: "",
    }

    componentDidUpdate = async (prevProps, prevState) => {
        Notiflix.Loading.dots()
        if (prevProps !== this.props) {
            this.pageReset()
            this.setState({ hits: [] })
        }
        if (prevState.page !== this.state.page) {
            try {
                const { data } = await getPixabay(this.props.searchingValue, this.state.page);
                this.setState(prevState => ({ hits: [...prevState.hits, ...data.hits] }))
                if (data?.totalHits < ((this.state.hits.length) + 12)) {
                    this.setState({ loadMore: false })
                }

            } catch (error) {
                console.log(error)
            }
        }
        if (prevProps !== this.props) {
            try {
                const { data } = await getPixabay(this.props.searchingValue, this.state.page);
                this.setState(prevState => ({ hits: [...prevState.hits, ...data.hits] }))
                if (data.totalHits > 12) {
                    this.setState({ loadMore: true })
                }
            } catch (error) {
                console.log(error)
            }
        }
        Notiflix.Loading.remove(400)
        return
    }





    handleNextPage = () => this.setState(pr => ({ page: pr.page + 1 }))
    pageReset = () => this.setState({ page: 1 })
    modalTogle = () => { this.setState(state => ({ modal: !state.modal })); }
    modalURLHandler = (newUrl) => this.setState({ modalURL: newUrl })



    render() {
        const { hits, loadMore, modal, modalURL } = this.state
        return (
            <div>
                <ul className={css.ImageGallery}>
                    {hits.length >= 1 && hits.map(({ id, webformatURL, largeImageURL }) =>
                        <ImageGalleryItem
                            key={id}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            modalTogle={this.modalTogle}
                            modalURLHandler={this.modalURLHandler} />)}
                </ul>
                {loadMore && (<Button handleNextPage={this.handleNextPage}></Button>)}
                {modal && (<Modal modalTogle={this.modalTogle} modalURL={modalURL}></Modal>)}
            </div>

        )
    }
}

ImageGallery.propTypes = {
    searchingValue: propTypes.string.isRequired,
}

export default ImageGallery
