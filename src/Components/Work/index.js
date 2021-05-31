import React, {Component} from 'react';
import axios from 'axios';
import {WorkSection, WorkTitle, Span, WorkPart, WorkPartIcon, WorkPartTitle, Line, WorkPartDesc} from './style.js';

class Work extends Component{

    state = {
        works: []
    }    

    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                works: res.data.works
            })
        })
    }

    render(){
        const {works} = this.state;
        const workList = works.map((work) => {
            return (
            <WorkPart key = {work.id} first = {work.id}>
                <WorkPartIcon className = {work.icon_name}></WorkPartIcon>
                <WorkPartTitle>{work.title}</WorkPartTitle>
                <Line />
                <WorkPartDesc>
                    {work.body}
                </WorkPartDesc>
            </WorkPart> 
            )
        })
        return(
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {workList}
                </div>
            </WorkSection>
        )
    }
}
export default Work;