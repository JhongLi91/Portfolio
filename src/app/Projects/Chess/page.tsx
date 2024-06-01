"use client";

import Link from "next/link";
import { FaRegFileAlt, FaRegFolderOpen, FaRegEnvelope } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import chessBoard from '../../../../public/images/board-background.jpg';
import style from './Chess.module.css'
import Game from './Game'

export default function Home() {
    
    const Title = () => {
        return (
            <div className="text-center text-6xl border-b-2 border-black py-5">
                Chess 
            </div>
        )
    }

    const Navi = () => {
        return (
            <div className="border-b border-black text-center py-3">
                <ul style={{fontSize:20}}>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='../../'>
                            <FaRegFolderOpen size={25}/>
                            <div>Portfolio</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='./'>
                            <FaRegFileAlt size={25}/>
                            <div>Resume</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='./'>
                            <IoPersonOutline size={25}/>
                            <div>About Me</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='./'>
                            <FaRegEnvelope size={25}/>
                            <div>Contact</div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    const Project = () => {
        return (
            <div className="flex place-content-center">
                <div style={{  backgroundImage: `url(${chessBoard.src})`, 
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '92%',
                }}>
                    <Game/>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.fixed}>
                    <Title/>
                    <Navi/>
            <div className={style.content}>
                <Project/>
            </div>
                </div>
            </div>
        </>
  );
}


