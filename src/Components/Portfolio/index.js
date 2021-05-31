import React, {Component} from 'react';
import axios from 'axios';
import {PortfolioSection, PortfolioTitle, PortfolioTitleSpan, UlList, ItemList, BoxContent, Image, Overlay, BoxSpan} from './style.js'

class Portfolio extends Component{

    state = {
        portfolio: []
    }

    componentDidMount(){
        axios.get('js/data.json').then(res => {
            this.setState({
                portfolio: res.data.portfolio
            })
        })
    }

    render(){
        const {portfolio} = this.state;
        const theList = portfolio.map((portfolio) => {
            return(
                <BoxContent key = {portfolio.id}>
                        <Image src={portfolio.image} />
                        <Overlay>
                            <BoxSpan>
                                Show Image
                            </BoxSpan>
                        </Overlay>
                    </BoxContent>
            )
        })
        return (
            <PortfolioSection>
                <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
                <UlList>
                    <ItemList active>All</ItemList>
                    <ItemList>HTML</ItemList>
                    <ItemList>Photoshop</ItemList>
                    <ItemList>Wordpress</ItemList>
                    <ItemList>Mobile</ItemList>
                </UlList>
                
                <div className="box">
                    {theList}
                </div>
                
            </PortfolioSection>
        )
    }
}
export default Portfolio;