"use client";

import Link from "next/link";
import { FaRegFileAlt, FaRegFolderOpen, FaRegEnvelope } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { Game } from './Game'

export default function Home() {
    
    const Title = () => {
        return (
            <div className="text-center text-6xl border-b-2 border-black py-5">
                Tic-Tac-Toe
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
                        <Link className="flex flex-row space-x-1" href='../'>
                            <FaRegFileAlt size={25}/>
                            <div>Resume</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='../AboutMe'>
                            <IoPersonOutline size={25}/>
                            <div>About Me</div>
                        </Link>
                    </li>
                    <li className="navList">
                        <Link className="flex flex-row space-x-1" href='../Contact'>
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
            <div className="flex flex-row place-content-center py-20 bg-slate-100">
                <Game/>
            </div>
        )
    }

    return (
        <div>
            <div className="wrapper">
                <div className="fixed w-full">
                    <Title/>
                    <Navi/>
                    <div className="content">
                        <Project/>
                    </div>
                </div>
            </div>
        </div>
        
  );
}


