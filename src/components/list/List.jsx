import React, { Component } from 'react'
import NavigationBarTop from './Navigation_bar_top'
import NavigationBarBottom from './Navigation_bar_bottom'
import '../../styles/list.scss'
import axios from 'axios'
const ApiKey = process.env.REACT_APP_GOREST_KEY

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            currentPage: 1,
            totalItemsCount: null
        }
    }

    componentDidMount() {
        this.getPosts(this.state.currentPage)
    }

    changePage = (page) => {
        this.getPosts(page)
    }
    
    getPosts = async (page) => {
        const res = await axios.get(`https://gorest.co.in/public-api/posts?access-token=${ApiKey}&page=${page}`)
        this.setState({ posts: res.data.result, currentPage: res.data._meta.currentPage, totalItemsCount: res.data._meta.totalCount })
    }

    render() {
        return(
            <div className="center">
                <div className="list">
                    <div>
                        <h2>Últimas postagens</h2>
                        <NavigationBarTop />
                        <div className="list-area">
                            <ul>
                                {this.state.posts.map(post => (
                                    <li key={post.id} className="row">
                                        <ul className="grid-area">
                                            <li className="title">{post.title}</li>
                                            <li className="author">Moovin Plataforma E-commerce</li>
                                            <li className="date">19/05/2019</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <NavigationBarBottom totalPosts={this.state.posts.length} currentPage={this.state.currentPage} totalItemsCount={this.state.totalItemsCount} changePage={()=> this.changePage} />
                </div>
            </div>
        ) 
    }
}