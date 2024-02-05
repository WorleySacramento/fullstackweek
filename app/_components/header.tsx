'use client'
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const {data} = useSession();
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
            {/* <Button className="h-8 w-8" variant='outline' size='icon'>
                <MenuIcon size="small"/>
            </Button> */}
            {/* <button onClick={handleLogin} className=" bg-blue-500 p-3">login</button> */}
            {
                data?.user ? <div className=" flex flex-col">
                    <h1>{data.user.name}</h1>
                    <button onClick={handleLogout} className=" bg-orange-800 p-3">Sair</button>
                </div> :
                    <button onClick={handleLogin} className=" bg-blue-500 p-3">login</button>
            
            }
            </CardContent>
        </Card>
     );
}
 
export default Header;