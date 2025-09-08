'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
toast
import axios from "axios"
import { toast } from "sonner"
import { SavedUserTable } from "@/components/admin/UserTables"


export default function SavedUsers() {
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
            toast('Please refreach page !')
        })
        axios.get('/api/applications').then(res => {
            setPendingData(res.data.data)
        }).catch(err => {
            console.log(err);
            toast('Please refreach page !')
        })
    }, [])
    return (
        <>
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="pending"  onClick={()=>{location.href='/admin/pending'}}>Pending</TabsTrigger>
                        <TabsTrigger value="saved">Saved</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="all">
                    <SavedUserTable products={data} />
                </TabsContent>
                <TabsContent value="pending">

                </TabsContent>
            </Tabs>
        </>
    )
}

