import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-1  justify-between flex flex-row items-center">
            <Image className="object-cover h-16 w-24" src="/logo.jpeg" alt="Barber Shop" height={12} width={120}/>
            <Button className="h-8 w-8" variant='outline' size='icon'>
                <MenuIcon size="small"/>
            </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;