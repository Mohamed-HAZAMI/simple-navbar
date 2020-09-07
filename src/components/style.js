import styled from "styled-components";

export const Style=styled.div`
background-color: rgb(75, 75, 75);
min-width:100%;
height:80px;
section {
    width:80%;
    height:80px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
ul {
    ${props => {
    if (props.matches) {
      return `
        display: flex;

    `
    } else if (props.click) {
      return `
        display:flex;
        flex-direction: column;
        height: 250px;
        min-width:100%;
        padding-left:0;
        position: absolute;
        top:55px;
        right: 0;
        background-color: rgb(75, 75, 75);
        transition: transform 0.5s ease-in;
        transform: translateX(200%);
    `
    } else {
        return `
        display:flex;
        flex-direction: column;
        height: 250px;
        min-width:100%;
        padding-left:0;
        position: absolute;
        top:55px;
        right: 0;
        background-color: rgb(75, 75, 75);
        transform: translateX(0%);
        transition: transform 0.5s ease-in;
    `
    }
}};
    list-style:none;
}

@keyframes li {
 from{
  padding:20px;
  color:#fff;
  opacity:0; 
  transform:translateX(200%); 
 }
 to{
  padding:20px;
  color:#fff;
  opacity:1; 
  transform:translateX(0%); 
 }
}

li:nth-child(1) {
    animation: ${props => props.click ?"none" : `li 1s` };
    padding:20px;
    color:#fff;
}
li:nth-child(2) {
    animation: ${props => props.click ?"none" : `li 2s` };
    padding:20px;
    color:#fff;
}
li:nth-child(3) {
    animation: ${props => props.click ?"none" : `li 3s` };
    padding:20px;
    color:#fff;
}
li:nth-child(4) {
    animation: ${props => props.click ?"none" : `li 4s` };
    padding:20px;
    color:#fff;
}
img {
    width:80px;
}
div {
 display:${props => props.matches ?"none" : "inline-block"};
 color:#fff;
 font-size:30px;
}
`