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
import { toast } from "sonner"
import axios from "axios"
import { CreateCard, UpdateCard } from "./ActionCards"


export function PendingUsersTable({ users }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription className="flex justify-between">
                    Manage your User and Save their Data.
                <CreateCard ct ={'New'} />
                </CardDescription>

            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead className="md:table-cell">
                                Pin Code
                            </TableHead>
                            <TableHead className="md:table-cell">City</TableHead>
                            <TableHead className="md:table-cell">State</TableHead>
                            <TableHead className="md:table-cell">Franchise Type</TableHead>
                            <TableHead>
                                <span >Actions</span>
                            </TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            (users && users.length > 0) ? (
                                users.map(product => (
                                    <PendingUserRow key={product._id} formId={product._id} city={product.city} state={product.state} name={product.name} email={product.email} phone={product.phone} fType={product.fType} pinCode={product.pinCode} />
                                ))
                            ) : <TableRow><TableCell span='5'>No list</TableCell></TableRow>
                        }
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong> users
                </div>
            </CardFooter>
        </Card>
    )
}
const PendingUserRow = ({ formId, name, email, phone, fType, city, state, pinCode }) => {
     function deleteDoc(){
        console.log(formId)
        axios.put('/api/applications', {no:'no use', formId}).then(res => {
            toast({
                title: res.data.message
            })
            setTimeout(() => {
                const url = new URL(window.location.href);
                url.searchParams.set('deleted', 'true'); // Add or update query parameter
                window.location.href = url.toString();    // Reload the page
            }, 100);
        }).catch(err => {
            console.log(err);
            toast({
                title: err.response?.data?.message || err.message
            })
        })
    }
    return (
        <TableRow>
            <TableCell className="font-medium">
                {name || "No name"}
            </TableCell>
            <TableCell>
                {email || 'use@mail.co'}
            </TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell className="md:table-cell">{pinCode}</TableCell>
            <TableCell className="md:table-cell">
                {city}
            </TableCell>
            <TableCell>
                {state}
            </TableCell>
            <TableCell>
                {fType}
            </TableCell>
            <TableCell className="flex gap-2">
                 <CreateCard formId={formId} />
                 <Button onClick={deleteDoc} variant='destructive'>Delete</Button>
            </TableCell>
        </TableRow>
    )
}



export function SavedUserTable({ products }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                    Manage your User and Save their Data.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead className="md:table-cell">
                                Pin Code
                            </TableHead>
                            <TableHead className="md:table-cell">Id</TableHead>
                            <TableHead className="md:table-cell">Password</TableHead>
                            <TableHead className="md:table-cell">Franchise Type</TableHead>
                            <TableHead className="md:table-cell">Action</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            (products && products.length > 0) ? (
                                products.map(product => (
                                    <SavedUserRow data={product} docid={product._id} key={product._id} id={product.id} password={product.password} city={product.city} state={product.state} name={product.name} email={product.email} phone={product.phone} fType={product.fType} pinCode={product.pinCode}  />
                                ))
                            ) : <TableRow><TableCell span='5'>No list</TableCell></TableRow>
                        }
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}

const SavedUserRow = ({ docid, name, email, phone, fType, pinCode, id, password, data }) => {
    function deleteDoc(){
        console.log(docid)
        axios.patch('/api/user', {no:'no use', docid}).then(res => {
            toast({
                title: res.data.message
            })
            setTimeout(() => {
                location.reload()
            }, 100);
        }).catch(err => {
            console.log(err);
            toast({
                title: err.response?.data?.message || err.message
            })
        })
    }
    return (
        <TableRow>
            <TableCell className="font-medium">
                {name || "No name"}
            </TableCell>
            <TableCell>
                {email || 'use@mail.co'}
            </TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell className="md:table-cell">{pinCode}</TableCell>
            <TableCell className="md:table-cell">
                {id}
            </TableCell>
            <TableCell>
                {password}
            </TableCell>
            <TableCell>
                {fType}
            </TableCell>
            <TableCell className='flex gap-2'>
                <UpdateCard docid={docid} pid={id} pname={name} pemail={email} pphone={phone} prefundamount={data.refundAmount} pstate={data.state} paddress={data.address} ppincode={pinCode} pftype={fType} ppassword={password} pstatus={data.status} pdistrict={data.district} pcity={data.city} pimage={data.image} ppdf={data.pdf} pifc={data.accountInfo?.ifc} pbankName={data.accountInfo?.bankName} paccountNumber={data.accountInfo?.accountNumber} pbranchName={data.accountInfo?.branchName}/>
                <Button onClick={deleteDoc} variant='destructive'>Delete</Button>
            </TableCell>
        </TableRow>
    )
}

