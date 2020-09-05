import styled from "styled-components";

export const Style=styled.div`
background-color: rgb(75, 75, 75);
width:100%;
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
        display:none;
    `
    } else {
        return `
        display:flex;
        flex-direction: column;
        height: 250px;
        min-width:40%;
        padding-left:0;
        position: absolute;
        top:55px;
        right: 0;
        background-color: rgb(75, 75, 75);
    `
    }
}};
    list-style:none;
}

li {
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