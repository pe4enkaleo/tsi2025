import React, { Component } from 'react'
import Button from '../components/Button';

class Home extends Component {
    render(){
        return(
            <Container>
                    <h2>Home</h2>
                    <Button type="primary" size="large" title = "Подтвердить"/>
                    <Button type="secondary" size="medium" title = "Удалить"/>
                    <div className="w-full h-full flex items-center justify-center bg-red-500 text-lg">HEllo</div> 
            </Container>
            
        );
    }
}

export default Home