import React from 'react';
import useImage from 'use-image';
import { Image } from 'react-konva';


const AvatarImage = ({ x, y, imageHeight, imageWidth, avatarName }) => {
    const [image] = useImage(require(`../assets/${avatarName}.png`).default);
    return <Image image={image} width={imageWidth} height={imageHeight} x={x} y={y} />;
};

export default AvatarImage;