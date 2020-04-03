import React, { Component } from 'react'

class News extends Component {
    constructor(props){
        super(props)

        this.state = {
            articles : [],
            searchResults : ""                                                  //// <<<<------- OUR KEYS USED 
        }
    }
    //------------------------------------
    componentDidMount = (params) => {
        let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(news => {
                this.setState({
                    articles: news.articles
                })
            })
    }
    handleChange = (e) => {
        this.setState({
            searchResults : e.target.value                                         //<<<<-------- THIS METHOD GRABS THE SEARCH-RESULTS KEY
        })
    }
    
    //^^ THIS GETS CALLED AUTOMATICALLY ^^


    render() {                                                                   // <<<----- Render IS WHEN THINGS GET REDRAWN ON THE PAGE
        // let articleList = this.state.articles.map((article, index) => {
        //     return <li>
        //         <h4>{article.title}</h4>
        //         <br />
        //         <img src={article.urlToImage} height="150px" />
        //         <p>{article.description}</p>
        //     </li>
        // })

        let filteredList = this.state.articles.filter((article, index)=>{
                return article.title.toLowerCase().includes(this.state.searchResults.toLowerCase())    // <<<----- WE  FILTERED THE SEARCH TO ONLY ONLY RETURN THE MATCHING ARTICLES
        })
        //-------BELOW WE LOOPED THROUGH THE FILTERED LIST AND RETURNED IT IN OUR DESIRED FORMAT--------------
        let articleList = filteredList.map((article, index)=>{
                return <li>
                    <h4>{article.title}</h4>
                    <br />
                    <img src={article.urlToImage} height="150px" />                                 
                    <p>{article.description}</p>
                </li>
        })
        //---------------------------------------------------------------------
        return (
            <>
            <input type="text" onChange={this.handleChange}  />
            <ul>
                {articleList}
            </ul>
            </>
        )
    }
}

export default News
