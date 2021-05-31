import React, {Component} from 'react';
import axios from 'axios';
import {SocialSection, Social, Icon, Desc, SpanTitle, SpanBody} from './style.js'

class SocialMedia extends Component{

    state = {
        SocialMedias: []
    }

    componentDidMount(){
        axios.get('js/data.json').then(res => {
            this.setState({
                SocialMedias: res.data.social
            })
        })
    }

    render(){
        const {SocialMedias} = this.state;
        const theSocial = SocialMedias.map((social) => {
            return (
                <Social face = {social.id} key = {social.id}>
                    <Icon className={social.icon}></Icon>
                    <Desc>
                        <SpanTitle>{social.title}</SpanTitle>
                        <SpanBody>{social.body}</SpanBody>
                    </Desc>
                </Social>
            )
        })

        return (
            <SocialSection>
               {theSocial} 
            </SocialSection>
        )
    }
}
export default SocialMedia;