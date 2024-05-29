"use client";

import Link from "next/link";
import { useState, useLayoutEffect } from "react";
import { FaRegFileAlt, FaRegFolderOpen, FaRegEnvelope } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';

export default function Page() {

    const [scrollTop, setScrollTop] = useState(0);
    const height = window.document.documentElement.offsetHeight;
    const width = window.document.documentElement.offsetWidth;
    
    const handleScroll = () => {
        setScrollTop(window.document.documentElement.scrollTop);
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);
    
    const MyName = () => {
        let perc = (height - 2 * scrollTop) / height;
        let pad = 25
        let sz = 50;
        if (perc < 0.7) {
            sz = 20 + 25 * (perc/.7); 
            pad = 25 * (perc/.7);
        }
        return (
            <div className="text-center text-6xl border-b-2 border-black" style={{fontSize:sz, paddingTop: pad, paddingBottom: pad}}>
                Contact
            </div>
        )
    }

    const Navi = () => {
        let perc = (height - 2 * scrollTop) / height;
        let font_sz = 20;
        let icon_sz = 25;
        let pad = 12;
        if (perc < 0.65) {
            icon_sz = 12 + 15 * (perc / .65);
            font_sz = 12 + 8 * (perc / .65);
            pad = 2 + 8 * (perc / .65);
        }

        return (
            <div className="border-b border-black text-center" style={{paddingTop: pad, paddingBottom: pad}}>
                <ul style={{fontSize:font_sz}}>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='../'>
                            <FaRegFolderOpen size={icon_sz}/>
                            <div>Portfolio</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='./'>
                            <FaRegFileAlt size={icon_sz}/>
                            <div>Resume</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='./AboutMe'>
                            <IoPersonOutline size={icon_sz}/>
                            <div>About Me</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='./'>
                            <FaRegEnvelope size={icon_sz}/>
                            <div>Contact</div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }



    return (
        <div>
            <div className="wrapper">
                <div className="fixed">
                    <MyName/>
                    <Navi/>
                    <div className="content">
                    </div>
                </div>
            </div>
        </div>
        
  );
}