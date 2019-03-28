import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

class Home extends React.Component {
    items = [1, 2, 3, 4, 5]

    state = {
        galleryItems: [
            <div className="coinsdetail">
                <p>EOS</p>
                <span>$3.54</span>
                <span className="down">(-2.52%)</span>
            </div>,
            <div className="coinsdetail">
                <p>BNB</p>
                <span>$15.02</span><span className="up">(1.26%)</span>
            </div>,
            <div className="coinsdetail">
                <p>LTE</p>
                <span>$15.02</span><span className="up">(3.26%)</span>
            </div>,
            <div className="coinsdetail">
                <p>SON</p>
                <span>$15.02</span><span className="down">(-1.26%)</span>
            </div>,
            <div className="coinsdetail">
                <p>MOB</p>
                <span>$15.02</span><span className="up">(1.26%)</span>
            </div>]
    }

    thumbItem = (item, i) => (
        <span key={i} onClick={() => this.Carousel._onDotClick(i)}> </span>
    )

    render() {
        let responsive = {
            0: { items: 1 },
            600: { items: 3 },
            1024: { items: 5 },
        };
        return (
            <div className="row mt-3">
                <div className="col-sm-12">
                    <AliceCarousel
                        mouseDragEnabled
                        responsive={responsive}
                        autoPlay={true}
                        playButtonEnabled={false}
                        autoPlayInterval={2000}
                        autoPlayDirection="ltr"
                        buttonsDisabled={true}
                        dotsDisabled={true}
                        items={this.state.galleryItems}
                        ref={(el) => (this.Carousel = el)}
                    />

                    <nav>{this.state.galleryItems.map(this.thumbItem)}</nav>
                    <button className="left-prev" onClick={() => this.Carousel._slidePrev()}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                    <button className="right-next" onClick={() => this.Carousel._slideNext()}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </div>
                <div className="col-sm-9 news-ad-cover">
                    <div className="news-ad d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex justify-content-start">
                            <div className="news-date">
                                2 hours
                </div>
                            <div className="headlines">Legendary Investor and Crypto Skeptic Marc Faber Bought Bitcoin For The First Time.</div>
                        </div>
                        <div className="tickers">Bitcoin</div>
                    </div>
                    <div className="news-ad d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex justify-content-start">
                            <div className="news-date">
                                2 hours
                </div>
                            <div className="headlines">Avalon Miner Maker Canaan Raises ‘Hundreds of Millions’ in New Funding</div>
                        </div>
                        <div className="tickers">Canaan</div>
                    </div>
                    <div className="news-ad d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex justify-content-start">
                            <div className="news-date">
                                2 hours
                </div>
                            <div className="headlines">Legendary Investor and Crypto Skeptic Marc Faber Bought Bitcoin For The First Time.</div>
                        </div>
                        <div className="tickers">Bitcoin</div>
                    </div>
                    <div className="news-ad d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex justify-content-start">
                            <div className="news-date">
                                2 hours
                </div>
                            <div className="headlines">Avalon Miner Maker Canaan Raises ‘Hundreds of Millions’ in New Funding.</div>
                        </div>
                        <div className="tickers">Bitcoin</div>
                    </div>
                    <div className="news-ad d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex justify-content-start">
                            <div className="news-date">
                                2 hours
                </div>
                            <div className="headlines">Legendary Investor and Crypto Skeptic Marc Faber Bought Bitcoin For The First Time.</div>
                        </div>
                        <div className="tickers">Bitcoin</div>
                    </div>
                    <div className="news-ad d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex justify-content-start">
                            <div className="news-date">
                                2 hours
                </div>
                            <div className="headlines">Avalon Miner Maker Canaan Raises ‘Hundreds of Millions’ in New Funding.</div>
                        </div>
                        <div className="tickers">Bitcoin</div>
                    </div>
                    <div className="news-ad d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex justify-content-start">
                            <div className="news-date">
                                2 hours
                </div>
                            <div className="headlines">Legendary Investor and Crypto Skeptic Marc Faber Bought Bitcoin For The First Time.</div>
                        </div>
                        <div className="tickers">Bitcoin</div>
                    </div>

                </div>
                <div className="col-sm-3"></div>
            </div>
        )
    }
}
export default Home;