import React, { Component } from 'react'


export default class Header extends Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </div>
        )
    }
}