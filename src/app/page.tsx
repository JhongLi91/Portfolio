"use client";

import Link from "next/link";
import { useState, useLayoutEffect } from "react";
import tictactoe from '../../public/images/tictactoe.png';
import Chess from '../../public/images/Chess.jpg';
import umich from '../../public/images/Umich.jpg';
import { FaRegFileAlt, FaRegFolderOpen, FaRegEnvelope } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';

export default function Page() {
    const [scrollTop, setScrollTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    const handleScroll = () => {
        setScrollTop(window.document.documentElement.scrollTop);
    };

    const handleWindowResize = () => {
      setWidth(window.document.documentElement.clientWidth);
      setHeight(window.document.documentElement.clientHeight);
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleWindowResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);
    
    const MyName = () => {
        let perc = (height - 2 * scrollTop) / height;
        let pad = 25
        let sz = 50;
        if (perc < 0.7) {
            if (perc < 0) perc = 0;
            sz = 35 + 15 * (perc/.7); 
            pad = 25 * (perc/.7);
        }
        return (
            <div className="text-center text-6xl border-b-2 border-black" style={{fontSize:sz, paddingTop: pad, paddingBottom: pad}}>
                Jian Hong Li
            </div>
        )
    }

    const Navi = () => {
        let perc = (height - 2 * scrollTop) / height;
        let font_sz = 20;
        let icon_sz = 25;
        let pad = 12;
        if (perc < 0.65) {
            if (perc < 0) perc = 0;
            icon_sz = 15 + 12 * (perc / .65);
            font_sz = 15 + 5 * (perc / .65);
            pad = 2 + 8 * (perc / .65);
        }

        return (
            <div className="border-b border-black text-center" style={{paddingTop: pad, paddingBottom: pad}}>
                <ul style={{fontSize:font_sz}}>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='./'>
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
                        <Link className="flex flex-row space-x-1" href='./Contact'>
                            <FaRegEnvelope size={icon_sz}/>
                            <div>Contact</div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    const Banner = () => {
        let perc = (height - 5.5 * scrollTop) / height;
        return (
            <div style={{marginTop: -1*scrollTop, opacity: perc}}>             
                <img key='umich' src={umich.src}/>
            </div>
        )
    }

    const Project = () => {
        let margin = 0;
        if (scrollTop > 50) margin = -1 * scrollTop + 50;
        return (
            <div className="flex flex-col">
                <div className="text-center text-3xl py-10 bg-slate-100 font-bold border-b-2 border-t-2 border-black" style={{marginTop:margin}}>
                    Projects
                </div>
                <div className="flex flex-row p-10 bg-slate-100">
                     <Link className="inline-block p-10" href='./Projects/TicTacToe'>
                        <img key='tic-tac-toe' src={tictactoe.src} width={width/8}/>
                    </Link>
                     <Link className="inline-block p-10" href='./Projects/Chess'>
                        <img key='Chess' src={Chess.src} width={width/8}/>
                    </Link>
               </div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="fixed">
                <MyName/>
                <Navi/>
                <div className="content">
                    <Banner/>
                    <Project/>
                </div>
            </div>
        </div>
        
  );
}