import Image from 'next/image'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { JoinUsCard } from './admin/ActionCards'

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center px-6 md:px-12 py-6 shadow-md shadow-gray-50 bg-white">
            {/* Logo */}
            <a href='/' className="flex items-center">
                <Image src="/logo_header_tm.svg" alt="Logo" width={150} height={40} />
            </a>

            {/* Navbar Links */}
            <div className='md:flex items-center hidden gap-8'>
                <div className="hidden md:flex space-x-8 text-[20px] text-gray-500">

                    <NavigationMenu>
                        <NavigationMenuList>
                            <LinkContainer title={'Services'}>
                                <ListedLink title={'Ecommerce & D2C'} href={'/ecommerce'} />
                                <ListedLink title={'Hyperlocal & Quick Commerce'} href={'/hyperlocal-ecommerce'} />

                                <ListedLink title={'SMEs & Personal Courier'} />
                            </LinkContainer>

                            <LinkContainer title={'Company'}>
                                <ListedLink title={'About Us'} href={'/about'} />
                                {/* <ListedLink title={'Careers'} href={'/career'} /> */}
                                <ListedLink title={'Contact'} href={'/contact'} />
                            </LinkContainer>

                            <LinkContainer title={'Resources'}>
                                {/* <ListedLink title={'News'} /> */}
                                <ListedLink title={'Blog'} href={'/home/#blog'} />
                            </LinkContainer>

                            <LinkContainer title={'Partners'}>
                                <ListedLink  href='franchise-partner' title={'Franchise Partners'} />
                                <ListedLink  href='client-partner' title={'Client Partners'} />
                                <ListedLink  href='delivery-partner' title={'Delivery Partners'} />
                            </LinkContainer>

                            <ListedLink title={'Login'} href={'/login'} />

                            <ListedLink title={'Track'} href={'/track'} />
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>

                {/* Contact Button */}
                <JoinUsCard />
            </div>


            <div className='block md:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <Menu className='text-black size-8' />
                    </SheetTrigger>
                    <SheetContent className='bg-white text-black'>
                        <SheetHeader>
                            <SheetTitle>Routes</SheetTitle>


                            {/* Services */}
                            <Collapsible>
                                <CollapsibleTrigger className="flex justify-between text-[18px] py-1 items-center w-full font-medium">
                                    Services <ChevronDown className="size-4" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="flex flex-col gap-2 ml-3 mt-2 text-gray-600">
                                    <a href="/ecommerce">Ecommerce & D2C</a>
                                    <a href="/hyperlocal-ecommerce">Hyperlocal & Quick Commerce</a>
                                    <a href='#'>SMEs & Personal Courier</a>
                                </CollapsibleContent>
                            </Collapsible>

                            {/* Company */}
                            <Collapsible>
                                <CollapsibleTrigger className="flex justify-between text-[18px] py-1 items-center w-full font-medium">
                                    Company <ChevronDown className="size-4" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="flex flex-col gap-2 ml-3 mt-2 text-gray-600">
                                    <a href="/about">About Us</a>
                                    {/* <a href="/career">Careers</a> */}
                                    <a href="/contact">Contact</a>
                                </CollapsibleContent>
                            </Collapsible>

                            {/* Resources */}
                            <Collapsible>
                                <CollapsibleTrigger className="flex justify-between text-[18px] py-1 items-center w-full font-medium">
                                    Resources <ChevronDown className="size-4" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="flex flex-col gap-2 ml-3 mt-2 text-gray-600">
                                    {/* <a>News</a> */}
                                    <a href='/home#blog'>Blog</a>
                                </CollapsibleContent>
                            </Collapsible>

                            {/* Partners */}
                            <Collapsible>
                                <CollapsibleTrigger className="flex justify-between text-[18px] py-1 items-center w-full font-medium">
                                    Partners <ChevronDown className="size-4" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="flex flex-col gap-2 ml-3 mt-2 text-gray-600">
                                    <a href='/franchise-partner'>Franchise Partners</a>
                                    <a href='/client-partner'>Client Partners</a>
                                    <a href='delivery-partner'>Delivery Partners</a>
                                </CollapsibleContent>
                            </Collapsible>

                            <Link href={'/track'} className="text-[18px] py-1 font-medium">Track</Link>

                            <Link href={'/login'} className="text-[18px] py-1 font-medium">Login</Link>

                            {/* <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">
                                Join Us
                            </button> */}
                            <JoinUsCard />

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

function ListedLink({ className, title, children, href }) {
    return (
        <NavigationMenuLink href={href} className={`text-gray-600 text-[18px] text-nowrap hover:text-gray-900 cursor-pointer ${className}`}>
            {/* <Link href={'#'} className='text-gray-600 text-[18px] text-nowrap hover:text-gray-900'>
                {title}
            </Link> */}
            {title}
        </NavigationMenuLink>
    )
}
function LinkContainer({ children, title, className }) {
    return (
        <div>
            <NavigationMenuItem>

                <NavigationMenuTrigger>
                    <p className='text-[18px]'>{title}</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className={`flex flex-col min-w-[250px]  w-fit p-4 justify-start space-x-3 ${className}`}>
                        {children}
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </div>
    )
}

export default NavBar