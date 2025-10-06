import Link from "next/link";
import Image from "next/image";
const banner = () => {
    return ( <div>
        <Link href="https://recruiting2.ultipro.com/HAS1005HLW/JobBoard/d43ae63f-9557-4817-8bc4-4a941ab5fd79/?q=&o=postedDateDesc&w=&wc=&we=&wpst="><Image src="/images/LEB-Were-hiring-D.png" alt="banner image" width={3000} height={300} className="banner-img"/></Link>
        <Link href="https://recruiting2.ultipro.com/HAS1005HLW/JobBoard/d43ae63f-9557-4817-8bc4-4a941ab5fd79/?q=&o=postedDateDesc&w=&wc=&we=&wpst="><Image src="/images/LEB-Were-hiring-M.png" alt="banner image" width={360} height={100} className="banner-img-m"/></Link>
        </div> );

}
 
export default banner;