"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import Link from "next/link";
import Image from "next/image";

import styles from "./HamburgerMenu.module.css";

const HamburgerMenu: React.FC = () => {
  return (
    <div className="flex">
      <div>
        <Image
          src="/LEB-Logo.svg"
          alt="Cowboy riding a car"
          width={100}
          height={100}
          className={styles.navLogo}
        ></Image>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent className={styles.sheetBackground}>
            <SheetHeader>
              <SheetTitle>
                {" "}
                <Image
                  src="/LEB-Logo.svg"
                  alt="Cowboy riding a car"
                  width={100}
                  height={100}
                  className={styles.navLogo}
                ></Image>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className={styles.navListItem}>
                        <Link href="/packages">Packages</Link>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        <li>
                          <Link href="/packages">Wash Packages</Link>
                        </li>
                        <li>
                          <Link href="/whyUnlimited">Why Unlimited?</Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className={styles.navListItem}>
                <Link href="/fundraising" className={styles.navLink}>Fundraising</Link>
              </li>
              <li className={styles.navListItem}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <div className={styles.navListItem}>
                        <Link href="/about">About Us</Link>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="https://recruiting2.ultipro.com/HAS1005HLW/JobBoard/d43ae63f-9557-4817-8bc4-4a941ab5fd79/?q=&o=postedDateDesc&w=&wc=&we=&wpst=">Careers</Link></li>
                      <Link href="/faq">FAQ</Link>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className={styles.navListItem}>
                <Link href="/about">Locations</Link>
              </li>

              <li className={styles.navListItem}>
                <Link href="/about"><button>Manage Your Subscription</button></Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HamburgerMenu;
