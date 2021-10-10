import React, { Component } from 'react';
import { Stage, Layer, Text, Circle } from 'react-konva';
import AvatarImage from './AvatarImage';

class CanvasAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 40
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            count: this.state.count + 1
        });
    }

    getCircles = () => {
        const { numberOfPeople, orbitRadius, circleRadius, friends } = this.props;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerWidth / 2;
        const circles = [];
        for (var i = 0; i < numberOfPeople; i++) {
            const x = centerX + (orbitRadius) * Math.cos(2 * Math.PI / numberOfPeople * i + Math.PI / 2160 * this.state.count);
            const y = centerY + (orbitRadius) * Math.sin(2 * Math.PI / numberOfPeople * i + Math.PI / 2160 * this.state.count);
            const circle = <Circle x={x} y={y} radius={circleRadius} fill={`#${friends[i]["avatarColor"]}`} />
            circles.push(circle);
        }
        return circles;
    }

    getImages = () => {
        const { friends } = this.props;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerWidth / 2;
        const images = [];
        const { numberOfPeople = 0, orbitRadius, imageWidth, imageHeight } = this.props;
        for (var i = 0; i < numberOfPeople; i++) {
            const x = centerX + (orbitRadius) * Math.cos(2 * Math.PI / numberOfPeople * i + Math.PI / 2160 * this.state.count);
            const y = centerY + (orbitRadius) * Math.sin(2 * Math.PI / numberOfPeople * i + Math.PI / 2160 * this.state.count);
            const image = <AvatarImage avatarName={friends[i]["avatarName"]} x={x - imageWidth / 2} y={y - imageHeight / 2} imageHeight={imageHeight} imageWidth={imageWidth} />
            images.push(image);
        }
        return images;
    }

    getTexts = () => {
        const { friends } = this.props;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerWidth / 2;
        const texts = [];
        const { numberOfPeople = 0, orbitRadius, circleRadius } = this.props;
        for (var i = 0; i < numberOfPeople; i++) {
            const x = centerX + (orbitRadius) * Math.cos(2 * Math.PI / numberOfPeople * i + Math.PI / 2160 * this.state.count);
            const y = centerY + (orbitRadius) * Math.sin(2 * Math.PI / numberOfPeople * i + Math.PI / 2160 * this.state.count);
            const text = <Text text={friends[i]["email"]} x={x - circleRadius / 2 - 5} y={y + 28} height={18} width={40} ellipsis="true" align="center" fontFamily="Dosis" fontStyle="bold" />
            texts.push(text);
        }
        return texts;
    }


    getUserCircle = () => {
        const { title = "" } = this.props;
        return <Layer>
            <Text text={title} x={window.innerWidth / 2 - 125} y={20} fontSize={18} height={18} width={250} ellipsis="true" align="center" fontFamily="Dosis" fontStyle="bold" />
            <Circle x={window.innerWidth / 2} y={window.innerWidth / 2} radius={35} fill={`#${this.props.user.avatarColor}`} />
            <AvatarImage avatarName={this.props.user.avatarName} x={window.innerWidth / 2 - 25} y={window.innerWidth / 2 - 25} imageHeight={50} imageWidth={50} />
            {/* <Text text="Me" x={window.innerWidth / 2 - 10} y={window.innerWidth / 2 + 36} height={24} fontSize={16} width={40} fontFamily="Dosis" fontStyle="bold" /> */}

        </Layer>
    }

    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerWidth}>
                {this.getUserCircle()}
                <Layer>
                    <Circle x={window.innerWidth / 2} y={window.innerWidth / 2} radius={this.props.orbitRadius} fill={"#3b82f610"} />
                    {this.getCircles().map(circle => circle)}
                    {this.getImages().map(image => image)}
                    {this.getTexts().map(text => text)}
                </Layer>
            </Stage>
        );
    }
};

export default CanvasAnimation;