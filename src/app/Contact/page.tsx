"use client";

import Link from "next/link";
import FatCat from '../../../public/images/fat-orange-cat.jpg'
import { useState, useLayoutEffect, useRef } from "react";
import emailjs from "@emailjs/browser"
import { FaRegFileAlt, FaRegFolderOpen, FaRegEnvelope } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { inherits } from "util";

export default function Page() {

    const Text = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

        const sendEmail = (e:any) => {
            e.preventDefault();

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: "Jian Hong Li",
                message: message,
            };
            
            emailjs.send(
                "service_rwpdhkz",
                "template_64ua2um",
                templateParams,
                "coQKsVeLVXvF6T4t7"
            )
            
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    alert("Your message was successfully sent :)")
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log("ERROR");
                }
            );
        }

        return (
            <>
                <div className="flex flex-row border-b border-black p-2 relative">
                    <img className="p-10" src={FatCat.src} width='50%'/>
                    <div className="py-10 flex flex-col place-content-center">
                        <p className="text-xl inline-block flex flex-col">
                            Want to contact me? Use the form below and leave a kind message!
                        </p>
                    </div>
                </div>
                <div className="border-b border-black p-10 text-xl">
                    <form method="post" onSubmit={(e)=>{sendEmail(e)}}>
                        Name:
                        <br/>
                            <input className="border border-black" 
                            type="text" name="user_name" value={name}
                            onChange={(e)=>{setName(e.target.value)}}/>
                        <br/>
                        Email:
                        <br/>
                            <input className="border border-black" 
                            type="text" name="user_email" value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                        Comment:
                        <br/>
                            <textarea className="border border-black" 
                            name="message" cols={30} rows={3} value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}/><br/><br/>
                        
                        <input className="border border-black mr-2 p-1 hover:bg-red-200" type="submit" value="Send"/>
                        <input className="border border-black ml-2 p-1 hover:bg-red-200" type="reset" value="Reset"/>
                    </form>
                </div>
            </>
        )
    }



    return (
        <div>
            <div className="wrapper">
                <div className="fixed">
                    <Heading/>
                    <div className="content">
                        <Text/>
                    </div>
                </div>
            </div>
        </div>
        
  );
}

const Heading = () => {

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
            if (perc < 0) perc = 0;
            icon_sz = 15 + 12 * (perc / .65);
            font_sz = 15 + 5 * (perc / .65);
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
                        <Link className="flex flex-row space-x-1" href='../Contact'>
                            <FaRegEnvelope size={icon_sz}/>
                            <div>Contact</div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <MyName/>
            <Navi/>
        </>
    )

}