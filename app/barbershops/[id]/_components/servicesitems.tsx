'use client'

import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemsProps {
    service: Service
}

const ServiceItems = ({ service }: ServiceItemsProps) => {
    return (
        <Card>
            <CardContent>
                <div className="flex">
                    <div className="relative h-[110px] w-[110px] rounded-lg">
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


                </div>
            </CardContent>

        </Card>
    );
}

export default ServiceItems;