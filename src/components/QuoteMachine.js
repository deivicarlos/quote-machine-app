import React from 'react';
import Quote from './Quote';
import axios from 'axios';
import $ from 'jquery';
import { getRandomColor, cleanHtmlString } from '../utils/utils'

const URL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
/*const AXIOSconfig = {
    headers: {
        'Accept': 'HEAD, GET, POST',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Cache-Control': 'no-cache',
       // 'Connection': 'keep-alive',
        //'Content-Length': '4',
        'Content-Type': 'application/json; charset=UTF-8'
    }
};
*/

export default class QuoteMachine extends React.Component {
    state = {
        quote: "El sol sale para todos",
        author: "Carlos Garcia",
        backgroundColor: undefined
    };



    componentDidMount() {
        $.ajaxSetup({ cache: false });
        //this.handleNewQuote();

    };

    handleNewQuote = () => {

        /*axios.get(URL, AXIOSconfig).then((response) => {
            this.setState(() => ({
                quote: cleanHtmlString(response.data[0].content),
                author: cleanHtmlString(response.data[0].title),
                backgroundColor: getRandomColor
            }))

        });*/
        $.getJSON(URL, ((response) => {
            this.setState(() => ({
                quote: cleanHtmlString(response[0].content),
                author: cleanHtmlString(response[0].title),
                backgroundColor: getRandomColor()
            }))

            document.body.style.backgroundColor = this.state.backgroundColor;
        }));
        console.log(this.state.backgroundColor);
    };

    render() {
        return (
            <div>
                <div className="quote-container">
                    <Quote
                        quote={this.state.quote}
                        author={this.state.author}
                        color={this.state.backgroundColor}
                    />
                    <button
                        id="quote-container__button"
                        className="quote-container__button"
                        onClick={this.handleNewQuote}
                        style={{ background: this.state.backgroundColor }}
                    >
                        New Quote
                </button>
                </div>
                <p className="signature">by Carlos Garcia</p>
            </div>
        );
    };
}
