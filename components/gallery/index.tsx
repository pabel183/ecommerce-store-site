"use client";
import Image from "next/image";
import { Tab,TabGroup,TabList, TabPanel, TabPanels } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps{
    images: ImageType[];
}
const Gallery:React.FC<GalleryProps>=({
    images,
})=>{
    return(
        <TabGroup as="div" className="flex flex-col-reverse">
            <div className="mx-auto w-full mt-6 hidden max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                    {images.map((image)=>(
                        <GalleryTab key={image.id} image={image}/>
                    ))}
                </TabList>
            </div>
            <TabPanels className="aspect-square w-full">
                {images.map((image)=>(
                    <TabPanel key={image?.id}>
                        <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
                        <Image 
                        fill
                        alt=""
                        src={image?.url}
                        className="object-cover object-center"
                        />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    );
}
export default Gallery;