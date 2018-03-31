import React from 'react';
import Quote from './Quote';
import axios from 'axios';
import $ from 'jquery';
import { fadeIn, fadeOut} from '../utils/utils'

export default class QuoteMachine extends React.Component {
    state = {
        quote: "El sol sale para todos",
        author: "Carlos Garcia"
    };

    componentDidMount() {
        $.ajaxSetup({ cache: false });
        this.handleNewQuote();
    };

    handleNewQuote = () => {

        //'/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        const url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

        $.getJSON(url, ((data) => {
            //console.log(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
            const regExp = new RegExp(/&#[0-9]{2,15};/g);
            let quote = data[0].content
                .replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
                .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
                .replace(/<\/?[^>]+(>|$)/g, "")
                .replace(regExp, '')
                .trim();

            let author = data[0].title
                .replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
                .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
                .replace(/<\/?[^>]+(>|$)/g, "")
                .replace(regExp, '')
                .trim();

            this.setState(() => ({ quote, author}))
        }));
    };

    render() {
        return (
            <div>
                <div className="quote-container">
                    <Quote
                        quote={this.state.quote}
                        author={this.state.author}
                    />
                    <button
                        className="quote-container__button"
                        onClick={this.handleNewQuote}
                    >
                        New Quote
                </button>
                </div>
                <p className="signature">by Carlos Garcia</p>
            </div>
        );
    };
}
