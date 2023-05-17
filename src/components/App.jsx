import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from "./App.module.css"
import Notiflix from 'notiflix';
import { getPixabay } from "../api/apiFetch";


export class App extends Component {
  state = {
    searchingValue: "",
    page: 1,
    hits: [],
    loadMore: false,
  }

  onSubmit = (searchingValue) => this.setState({ searchingValue })
  handleNextPage = () => this.setState(pr => ({ page: pr.page + 1 }))
  pageReset = () => this.setState({ page: 1 })

  componentDidUpdate = async (prevProps, prevState) => {
    Notiflix.Loading.dots()
    if (prevState.searchingValue !== this.state.searchingValue) {
      this.pageReset()
      this.setState({ hits: [] })

      try {
        const { data } = await getPixabay(this.state.searchingValue, this.state.page);
        const answear = data.hits.map(({ id, webformatURL, largeImageURL }) => { return { webformatURL, largeImageURL, id } })
        this.setState(prevState => ({ hits: [...prevState.hits, ...answear] }))
        if (data.totalHits > 12) {
          this.setState({ loadMore: true })
        }
        if (data.totalHits < 12) {
          this.setState({ loadMore: false })
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (prevState.page !== this.state.page && prevState.searchingValue === this.state.searchingValue) {
      try {
        const { data } = await getPixabay(this.state.searchingValue, this.state.page);
        const answear = data.hits.map(({ id, webformatURL, largeImageURL }) => { return { webformatURL, largeImageURL, id } })
        this.setState(prevState => ({ hits: [...prevState.hits, ...answear] }))
        if (data?.totalHits < ((this.state.hits.length) + 12)) {
          this.setState({ loadMore: false })
        }

      } catch (error) {
        console.log(error)
      }
    }
    Notiflix.Loading.remove(400)
    return
  }



  render() {
    const { onSubmit, handleNextPage } = this
    const { hits, loadMore } = this.state
    return (
      <div className={css.App}>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery hits={hits} handleNextPage={handleNextPage} loadMore={loadMore}></ImageGallery>
      </div>
    );
  };
}
