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
                          <Link href="#">Wash Packages</Link>
                        </li>
                        <li>
                          <Link href="#">Why Unlimited?</Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className={styles.navListItem}>
                <Link href="/fundraising">Fundraising</Link>
              </li>
              <li className={styles.navListItem}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <div className={styles.navListItem}>
                        <Link href="/packages">About Us</Link>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="#">Wash Packages</Link>
                      <Link href="#">Why Unlimited?</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className={styles.navListItem}>
                <Link href="/about">Locations</Link>
              </li>

              <li className={styles.navListItem}>
                <Link href="/about">Manage Your Subscription</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HamburgerMenu;
