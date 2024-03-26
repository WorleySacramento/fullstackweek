'use client'

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface ServiceItemsProps {
    service: Service;
    isAuthenticated: boolean;
}

const ServiceItems = ({ service, isAuthenticated }: ServiceItemsProps) => {


const handleBookingClick = ()=>{
    if(!isAuthenticated){
      return signIn('google')
    }

    // abrir modal de agendamento 
}


    return (
        <Card >
            <CardContent className=" p-2">
                <div className="flex gap-4 w-full">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px] rounded-lg">
                    <Image
                        src={service.imageUrl}
                        alt="Service image"
                        fill
                        style={{
                            objectFit: 'contain'
                        }}
                        className=" rounded-lg"
                        />
                        </div>

                        <div className="flex flex-col w-full">
                            <h1 className=" font-bold">{service.name}</h1>
                            <p className="text-sm text-ellipsis text-wrap">{service.description}</p>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-md font-bold">{Intl.NumberFormat("pt-BR",{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(Number(service.price))}
                              
                                </p>
                                <Button variant='outline' className=" "  onClick={handleBookingClick}>Reservar</Button>
                                </div>
                        </div>

                </div>
            </CardContent>

        </Card>
    );
}

export default ServiceItems;