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

                <SheetContent className="p-2 bg-slate-400 h-auto" side={"top"}>
                {/* <SheetHeader  className="text-left border-b border-solid border-slate-300 p-5">
                    <SheetTitle>Menu</SheetTitle>   
            
                </SheetHeader>
                <div className="flex flex-col p-3">
                    { status === 'authenticated' && (

                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={data.user?.image ?? ""}/>
                        </Avatar>
                        <h2 className=" font-bold z-40">{data.user?.name}</h2>
                    </div>
                    )
                    }
                    <Button variant='outline' className="justify-start mb-2 gap-4">
                        <LogOutIcon/> Logar
                    </Button>
                    <Button variant='outline' className="justify-start mb-2 gap-4"> 
                        <HomeIcon/> Inicio
                    </Button>
                    <Button variant='outline' className="justify-start mb-2 gap-4">
                        <CalendarIcon/> Calendar
                    </Button>
                </div> */}
                <SideMenu/>
                </SheetContent>
            </Sheet>
           
          
            </CardContent>
        </Card>
     );
}
 
export default Header;