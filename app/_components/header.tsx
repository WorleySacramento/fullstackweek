'use client'
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from './ui/sheet';
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import SideMenu from "./sidemenu";

const Header = () => {
    const {data, status} = useSession();
    const handleLogin = async () =>{
        await signIn();
    }
    const handleLogout = async () =>{
        await signOut();
    }
    return ( 
        <Card>
            <CardContent className="p-1  justify-between flex flex-row items-center">
            <Image className="object-cover h-16 w-24" src="/logo.jpeg" alt="Barber Shop" height={12} width={120}/>
            <Sheet>
                <SheetTrigger className="h-8 w-8" asChild>
                <MenuIcon size="small"/>
                </SheetTrigger>
                
                <SheetContent className="p-2 bg-slate-300 h-auto" side={"top"}>
                <SideMenu/>
                </SheetContent>
            </Sheet>        
            </CardContent>
        </Card>
     );
}
 
export default Header;