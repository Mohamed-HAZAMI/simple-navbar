import React,{useState} from 'react';
import {Style} from "./style";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Nav = () => {
    const matches = useMediaQuery('(min-width:550px)');
    const [click, setClick] = useState(false);
    return (
        <>
        <Style matches={matches} click={click}>
            <section>               
               <img src={require("../assed/react_logo.png")} alt="error"/>
               <div onClick={() =>{setClick(!click)}}>
                  <FontAwesomeIcon icon={faAlignJustify} />
               </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Helps</li>
                </ul>
            </section>
        </Style>     
        </>
    )
}

