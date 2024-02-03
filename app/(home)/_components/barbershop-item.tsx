import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {Barbershop} from '@prisma/client'
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
barbershop: Barbershop
}


const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    
    return ( 
        <Card className=" min-w-[167px] max-w-[167px] rounded-2xl border-none">
            <CardContent className="px-1">
               <div className="w-full h-[140px] px-1 relative">
              <div className="flex absolute top-2 left-0 z-50">
              <Badge variant="secondary" className=" bg-indigo-200 flex items-center opacity-80" color="red">
                    <StarIcon fill="yellow" className=" " size={18} color="yellow"  />
                    <span className=" text-xs " >5,0</span>
                    </Badge>
              </div>
               <Image 
                src={barbershop.imageUrl}
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