import styled from 'styled-components';

export const SideBar = styled.aside`
    background-color:#252526;
    flex:1;
    padding:20px;
    text-align:center;
    display:flex;
    flex-direction:row; 
`;

export const Card = styled.div`
    background-color:#fff;
    border-radius:10px;
    padding:10px;
    flex:1;
    display:flex;
    flex-direction:column;
    h1{
        margin:10px 0;
    }
`;

export const ChartContainer = styled.div`
    flex:1;
`

export const CardInformation = styled.section`
    display:flex;
    justify-content:center;
    .totals{       
        flex-wrap:wrap;
        display:flex;        
        margin:10px;
        align-items:center;
        div{
            margin-left:10px;
            display:flex;
            flex-direction:column;

            .total-name{
                font-size:12px;
                font-style:italic;
                color:#333;
            }

            .total-value{
                font-weight:bold;
                margin-top:5px;
            }
        }
    }
`;

export const NoCountry = styled.aside`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    font-weight:bold;
    background-color:#252526;
    color:lightgray;
    flex:1;
`;