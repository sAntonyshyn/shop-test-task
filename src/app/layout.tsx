import './globals.css'
import Navigation from "@/components/Navigation";
import CartProvider from "@/components/CartProvider";
import {Inter} from 'next/font/google'
import {Metadata} from 'next';
import SnackbarProvider from "@/components/SnackbarProvider";
import SidebarProvider from "@/components/SidebarProvider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <CartProvider>
            <SnackbarProvider>
                <SidebarProvider>
                    <div className={'container mx-auto'}>
                        <Navigation/>
                    </div>
                    {children}
                </SidebarProvider>
            </SnackbarProvider>
        </CartProvider>
        </body>
        </html>
    )
}
