import Link from "next/link";
import Image from "next/image";
const banner = () => {
    return ( <div>
        <Link href="#"><Image src="/images/bca/LEB-BCA-D.png" alt="beast cancer awareness 2025" width={3000} height={300} className="banner-img"/></Link>
        <Link href="#"><Image src="/images/bca/LEB-BCA-M.png" alt="breast cancer awareness 2025"width={360} height={100} className="banner-img-m"/></Link>
        </div> );

}
 
export default banner;