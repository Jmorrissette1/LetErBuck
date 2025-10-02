import Link from "next/link";
import Image from "next/image";
const banner = () => {
    return ( <div>
        <Link href="#"><Image src="/images/LEB-Were-hiring-D.png" alt="banner image" width={3000} height={300} className="banner-img"/></Link>
        </div> );

}
 
export default banner;