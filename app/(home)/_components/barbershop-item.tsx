import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {Barbershop} from '@prisma/client'
import Image from "next/image";

interface BarbershopItemProps {
barbershop: Barbershop
}


const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    
    return ( 
        <Card className=" min-w-[167px] max-w-[167px] rounded-2xl border-none">
            <CardContent className="px-1">
               <div className="w-full h-[140px] px-1 relative">
               <Image 
                src={barbershop.imageurl}
                fill
                alt={barbershop.name}
               style={{
                objectFit: 'cover'
               }}
                className="rounded-xl"
                />
               </div>

               <div className="px-3">
                <h2 className="flex font-semibold overflow-hidden text-ellipsis text-nowrap">
                    {barbershop.name}
                </h2>
                <p className="text-sm text-gray-400 mt-2 overflow-hidden text-ellipsis text-nowrap">
                    {barbershop.address}
                </p>
                <Button className="w-full mt-2 " variant='outline'>Reservar</Button>
               </div>
         
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;