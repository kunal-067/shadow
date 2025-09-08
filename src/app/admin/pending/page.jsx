'use client'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import axios from "axios"
import { PendingUsersTable } from "@/components/admin/UserTables"


export default function PendingUsers() {
    const [data, setData] = useState([]);
    const [pendingData, setPendingData] = useState([]);
    useEffect(() => {
        let user = { data: { role: 'User' } };
        let Lusr = localStorage.getItem('user')
        // console.log(Lusr)
        if (Lusr && Lusr != 'undefined') {
            user = JSON.parse(localStorage.getItem('user'));
        }
        if (user.data.role !== 'Admin') {
            return window.location.href = '/login'
        }
        axios.get('/api/allApplications').then(res => {
            setData(res.data.data)
        }).catch(err => {
            console.log(err);
            toast({
                title: 'Please refreach page !',
                variant: 'destructive'
            })
        })
        axios.get('/api/applications').then(res => {
            setPendingData(res.data.data)
        }).catch(err => {
            console.log(err);
            toast({
                title: 'Please refreach page !',
                variant: 'destructive'
            })
        })
    }, [])
    return (
        <>
            <Tabs defaultValue="pending" className="w-full">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all" onClick={()=>{location.href='/admin'}}>All</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="saved">Saved</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="all">
                   
                </TabsContent>
                <TabsContent value="pending">
                    <PendingUsersTable users={pendingData} />
                </TabsContent>
            </Tabs>
        </>
    )
}


