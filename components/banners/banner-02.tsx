'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Pencil } from 'lucide-react'
import { useState } from 'react'

export default function Banner02({ title, description, image, cta, background }: BannerProps) {
    const [data, setData] = useState({
        title: title,
        description: description,
        image: image,
        cta: cta,
        background: background
    })
    return (
        <div className='aspect-square bg-cover p-5 relative flex flex-col gap-2 items-center justify-center max-w-sm' style={{ backgroundImage: `url(${background})` }}>

            <h1 className='text-2xl font-bold'>{data.title}</h1>
            <img src={data.image} alt="Banner Image" className='w-52 object-cover' />
            <p className='text-balance max-w-sm text-center'>
                {data.description}
            </p>
            <Button type="submit" className='w-min bg-rose-600'>{data.cta}</Button>
            <Sheet>

                <SheetTrigger>

                    <span className='bg-neutral-400/50 p-2 absolute top-5 right-5'>
                        <Pencil className='h-4 w-4' />
                    </span>
                </SheetTrigger>
                <SheetContent side={'bottom'}>
                    <SheetHeader>
                        <SheetTitle>Edit Banner</SheetTitle>
                        <SheetDescription>
                            <div className='grid grid-cols-4'>

                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="title">Banner Title</Label>
                                    <Input type="text" id="title" placeholder="Enter your email" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="description">Banner Description</Label>
                                    <Input type="text" id="description" placeholder="Enter your email" value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="image">Banner Image</Label>
                                    <Input type="text" id="image" placeholder="Enter your email" value={data.image} onChange={(e) => setData({ ...data, image: e.target.value })} />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="cta">CTA</Label>
                                    <Input type="text" id="cta" placeholder="Enter your email" value={data.cta} onChange={(e) => setData({ ...data, cta: e.target.value })} />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="background">Background</Label>
                                    <Input type="text" id="background" placeholder="Enter your email" value={data.background} onChange={(e) => setData({ ...data, background: e.target.value })} />
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

