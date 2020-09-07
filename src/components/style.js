import styled from "styled-components";

export const Style=styled.div`
min-width:100%;
height:100vh;
section {
background-color: rgb(75, 75, 75);
height:10vh;
display:flex;
justify-content:space-around;
align-items:center;
margin:0 ;
padding:0;
box-sizing: border-box;
}
ul {
    ${props => {
    if (props.matches) {
      return `
        display: flex;
    `
    } else if (props.click) {
      return `
        margin:0 ;
        padding:0;
        box-sizing: border-box;
        height: 90vh;
        display: flex;
        justify-content:space-around;
        flex-direction: column;
        min-width:100%;
        padding-left:0;
        position: absolute;
        top:10vh;
        right: 0;
        background-color: rgb(75, 75, 75);
        transition: clip-path 0.5s ease-in;
        // transform: translateX(200%);
        clip-path: circle(0px at 100% 0%);
    `
    } else {
        return `
        margin:0 ;
        padding:0;
        box-sizing: border-box;
        height: 90vh;
        display: flex;
        justify-content:space-around;
        flex-direction: column;
        min-width:100%;
        padding-left:0;
        position: absolute;
        top:10vh;
        right: 0;
        background-color: rgb(75, 75, 75);
        // transform: translateX(0%);
        transition: clip-path 0.5s ease-in;
        clip-path: circle(1000px at 100% 0%);
    `
    }
}};
    list-style:none;
}

@keyframes li {
 from{
  padding:20px;
  font-size:20px;
  color:#fff;
  opacity:0; 
  transform:translateX(200%); 
 }
 to{
  padding:20px;
  font-size:20px;
  color:#fff;
  opacity:1; 
  transform:translateX(0%); 
 }
}

li:nth-child(1) {
    animation: ${props => props.click ?"none" : `li 1s` };
    padding:20px;
    color:#fff;
    font-size:20px;
}
li:nth-child(2) {
    animation: ${props => props.click ?"none" : `li 2s` };
    padding:20px;
    color:#fff;
    font-size:20px;
}
li:nth-child(3) {
    animation: ${props => props.click ?"none" : `li 3s` };
    padding:20px;
    color:#fff;
    font-size:20px;
}
li:nth-child(4) {
    animation: ${props => props.click ?"none" : `li 4s` };
    padding:20px;
    color:#fff;
    font-size:20px;
}
/* qivhwisld */
img {
    width:80px;
}
div {
 display:${props => props.matches ?"none" : "inline-block"};
 color:#fff;
 font-size:30px;
}
`