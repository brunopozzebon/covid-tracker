import styled from 'styled-components';
import {Marker} from 'react-map-gl';

export const Circle = styled(Marker)`
    pointer-events:none;
    div{
        width:${props => props.size+"px"};
        height:${props => props.size+"px"};
        background-color:#ff0000;
        border-radius:50%;
        opacity:0.5;        
        transform:translate(-50%,-50%);
    }
`;