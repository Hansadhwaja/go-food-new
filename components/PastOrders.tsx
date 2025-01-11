
import { getOrders } from "@/lib/actions/order";
import { getUserIdByClerkId } from "@/lib/actions/user"
import mongoose from "mongoose";
import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface CartItem {
    id: mongoose.Schema.Types.ObjectId;
    name: string;
    quantity: number;
    price: number;
    size: string;
}

const PastOrders = async () => {
    const id = await getUserIdByClerkId();
    const orders = await getOrders(id);

    return (
        <section className="flex flex-col gap-2 mb-14">
            {orders.length === 0 ? (
                <p className="text-center">No orders available</p>
            ) : (orders.map(order => {
                const orderCountText = `You have ${order.orders.length} ${order.orders.length === 1 ? 'order' : 'orders'} on`;
                return (
                    <div key={order._id.toString()}>
                        {/* <div className="text-center mb-2">
                            {isToday(new Date(order.createdAt))
                                ? 'Today'
                                : isYesterday(new Date(order.createdAt))
                                    ? 'Yesterday'
                                    : format(new Date(order.createdAt), 'MMMM dd, yyyy h:mm a')}
                        </div> */}
                        <Card className="border dark:border-white">
                            <CardHeader>
                                <CardTitle>{orderCountText}</CardTitle>
                                <CardDescription>{formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                {order.orders.map((item: CartItem) => (
                                    <div className=" flex items-center space-x-4 rounded-md border p-4" key={`${item.id.toString()}-${item.size}`}>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm lg:text-xl font-medium leading-none">
                                                {item.name}
                                            </p>
                                            <div className="flex-between mt-2">
                                                <p className="text-sm text-muted-foreground">
                                                    Size:<span className="ml-1 font-bold">{item.size}</span>
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Quantity:<span className="ml-1 font-bold">{item.quantity}</span>
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Price:<span className="ml-1 font-bold text-red-400">₹{item.price}/-</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter>
                                <span>Total Paid:</span>
                                <span className="ml-1 text-red-500 font-bold text-xl">₹{order.totalPaid}/-</span>
                            </CardFooter>
                        </Card>
                    </div>

                )
            }))}

        </section>
    )
}

export default PastOrders