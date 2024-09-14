import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {interTight,} from '@/lib/font'
export const metadata = {
    title: 'Ekanstech - Top Rated Website Development and Marketing Company',
    description: 'Ekanstech – is a globally top rated Website Design &amp; Development Company. We provide most effective e-commerce websites and marketing strategies to make your business grow online.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${interTight.variable}`}>
            <body>{children}</body>
        </html>
    )
}
