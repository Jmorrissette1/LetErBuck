import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import ContentBox from "../components/contentBox/ContentBox";
import SpecialsBanner from "../components/specialsBanner/SpecialsBanner";
import styles from "../page.module.css";

const FAQPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>FAQ</h1>
        </div>
        <div className={styles.contentContainer}>
          <ContentBox>
            <h4 className={styles.contentH4}>
              What should I expect when I arrive?
            </h4>
            <p className={styles.contentP}>
              You’ll be greeted by friendly and professional employees who will
              guide you through the simple process. All you need to do is wait
              for an employee to tell you to put your car in neutral, then sit
              back and relax. We’ll do the rest. We clean the vehicle’s exterior
              with gentle cloth washers and mild cleaning solutions. Your wheels
              and whitewalls will be cleaned, your vehicle will be rinsed and
              gently air dried – all automatically, in four minutes or less!
            </p>
            <h4 className={styles.contentH4}>Should I remain in my vehicle?</h4>
            <p className={styles.contentP}>
              Yes. For safety reasons, there must be a driver at the wheel at
              all times. Let ‘Er Buck Car Wash uses extensive lighting and a lot
              of windows to create a comfortable and open environment. Employees
              are always watching and will be available to answer any questions
              you may have.
            </p>
            <h4 className={styles.contentH4}>Do you hand dry my vehicle?</h4>
            <p className={styles.contentP}>
              We have a custom-designed “drying area” at the end of our wash
              process that uses air to dry your vehicle – without having to
              touch your car. You shouldn’t need to hand-dry your vehicle
              (although if you want to bring along your own towel and give it a
              final detail to catch those “hard to get areas” before you leave,
              feel free to pull into our vacuum area and give your newly-clean
              car some personal attention.)
            </p>
            <h4 className={styles.contentH4}>Do you take credit cards?</h4>
            <p className={styles.contentP}>
              Yes. We accept VISA, MasterCard, and Discover.
            </p>
            <h4 className={styles.contentH4}>
              Do you clean the inside of the car?
            </h4>
            <p className={styles.contentP}>
              Let ‘Er Buck Car Wash offers “exterior-only” service. We do
              provide self-service vacuums. Free use of our ultra high suction
              vacuums is included with the purchase of any level of wash.
            </p>
            <h4 className={styles.contentH4}>
              What kind of cleaning products do you use?
            </h4>
            <p className={styles.contentP}>
              Our cleaning products are specifically created to be effective and
              safe.. They are biodegradable so, not only are they safe for your
              car, they’re safe for the environment! . It’s even possible that
              your vehicle was cleaned with the same products before it was
              delivered to you, since many major manufacturers use the same
              cleaning products, as the final step in the manufacturing process
              or to clean them after shipping.
            </p>
            <h4 className={styles.contentH4}>Do you recycle your water?</h4>
            <p className={styles.contentP}>
              Yes. We proudly reclaim our water.
            </p>
            <h4 className={styles.contentH4}>How do you save water?</h4>
            <p className={styles.contentP}>
              By comparison, a study showed that the average person uses between
              100 and 150 gallons of water when washing a car by hand, while our
              computer-controlled system uses only 35 to 45 gallons of fresh
              water for each wash, in addition to over 100 gallons of recycled
              water.
            </p>
            <h4 className={styles.contentH4}>
              What’s the difference between “brush-less” and “touch-less”?
            </h4>
            <p className={styles.contentP}>
              We employ a brush-less process, using only soft foam that gently
              cleans your car in combination with safe and biodegradable
              shampoos and cleaners. “No Touch” operations, on the other hand,
              don’t use direct-contact cleaning media and may rely, instead, on
              acid-based chemicals. This is hard on the vehicle’s finish and can
              even etch glass and uncoated polished aluminum wheels. Some of
              these chemicals can be as unsafe for customers and employees as
              they are for the environment
            </p>
            <h4 className={styles.contentH4}>Will my vehicle fit?</h4>
            <p className={styles.contentP}>
              Almost every vehicle fits in our car wash! If you ever have any
              questions, please feel free to come by and we will be happy to
              check your vehicle for problem areas.
            </p>
            <h4 className={styles.contentH4}>
              Here is a list of vehicles that might not be able to fit:
            </h4>
            <ul className={styles.contentLi}>
              <li>Vehicles that sit 4.5″ or lower to the ground.</li>
              <li>Vehicles with tires wider than 13″.</li>
              <li>Vehicles taller than 84″.</li>
              <li>Extended Height Full Size Vans (over 84 inches)</li>
              <li>Trucks with Dual Rear Tires</li>
              <li>Vehicles with permanently affixed tripod style mirrors.</li>
              <li>Full Size Hummers.</li>
              <li>
                Open bed pickup trucks with a fuel tank that has a fill nozzle
                and hose attached.
              </li>
              <li>
                Open bed pickup trucks with debris, tools, straps, rope or any
                other loose materials.
              </li>
              <li>1965-69 Cadillacs.</li>
              <li>Trucks/van with ladders.</li>
              <li>Vehicles with large ladder racks.</li>
              <li>
                Vehicles with “rocket boxes” or oversized non-factory luggage
                containers on top.
              </li>
            </ul>
            <h4 className={styles.contentH4}>
              Here is a list of things that sometimes cause problems, and must
              be washed with some caution:
            </h4>
            <ul className={styles.contentLi}>
              <li>
                Previous Damage (loose molding / emblems, blistered or peeling
                paint, etc.)
              </li>
              <li>Cracked Windshields.</li>
              <li>Very Low Profile Tires.</li>
              <li>Objects on Antennas (balls, flags, etc.)</li>
              <li>Receiver Hitches (Best if removed)</li>
              <li>Power antennas that won’t lower.</li>
              <li>Ski and Bike Racks.</li>
              <li>Large “Knobby” Tires.</li>
              <li>Racing Fins and Spoilers.</li>
              <li>
                Any aftermarket parts (parts that are not put on by the
                manufacturer).
              </li>
            </ul>
            <h4 className={styles.contentH4}>
              What types of vehicles can you wash?
            </h4>
            <p className={styles.contentP}>
              We accept most cars, vans, and trucks up to 84 inches in height.
              Unfortunately, we cannot wash trucks with dual wheels. We are safe
              to wash all factory-installed equipment in proper working order.
            </p>
            <h4 className={styles.contentH4}>Can you wash my pickup truck?</h4>
            <p className={styles.contentP}>
              Almost certainly. All we ask is that the pickup bed be empty
              before going through the wash. This is for the safety of your
              vehicle and those of other customers’. Some oversized “trailering”
              side-mirrors are incompatible with our process, and certain types
              of modifications that employ over-sized or off road tires or
              radically raised suspensions may not be compatible.
            </p>
            <h4 className={styles.contentH4}>What about my Receiver Hitch?</h4>
            <p className={styles.contentP}>
              We ask, guests, to remove the hitch for best cleaning, if at all
              possible.
            </p>
            <h4 className={styles.contentH4}>
              Is the wash safe for convertibles?
            </h4>
            <p className={styles.contentP}>
              Yes. Please make sure that the roof is properly latched.
            </p>
            <h4 className={styles.contentH4}>
              Is the wash safe for newly painted cars?
            </h4>
            <p className={styles.contentP}>
              Yes. We use cloth wash materials and mild cleaners; however, the
              paint should be allowed to cure before washing. Consult with your
              body shop for curing times (usually at least 30 days for repainted
              cars and body parts). (Paint on new cars is fully cured before
              delivery.)
            </p>
            <h4 className={styles.contentH4}>
              Is the wash safe for alloy wheels?
            </h4>
            <p className={styles.contentP}>
              Yes. Most carmakers caution against automatic washes that use
              acids on polished aluminum wheels, since these can stain. At Let
              ‘Er Buck we don’t use such acids so your wheels are perfectly
              safe.
            </p>
            <h4 className={styles.contentH4}>
              Will a cracked windshield be safe in the wash?
            </h4>
            <p className={styles.contentP}>
              Yes, however, once the integrity of windshield glass is
              compromised by rock chips (even very small ones), it becomes more
              susceptible to changes in temperature. So, while you may wash your
              vehicle with windshield damage, the cracks or chips may expand.
              It’s always best to repair or replace a damaged windshield
              immediately.
            </p>
            <h4 className={styles.contentH4}>Will my antenna be OK?</h4>
            <p className={styles.contentP}>
              Aftermarket products, such as CB and cell phone antennas, should
              be removed before washing.
            </p>
            <h4 className={styles.contentH4}>Will my bug shield be safe?</h4>
            <p className={styles.contentP}>
              Unfortunately, we can’t be responsible for aftermarket accessories
              made of plastic. Most customers who have bug shields wash their
              vehicles with no incident, however, problems can arise if the
              shield has already been damaged by rock chips, by stress cracks
              around the installation screws (which can be hard to detect), or
              if it is made from low-grade plastic. If you need a new bug
              shield, we recommend products made of Lexan, such as Lund® or
              Deflecta-Shield®, which are virtually indestructible.
            </p>
            <h4 className={styles.contentH4}>What about excessive mud?</h4>
            <p className={styles.contentP}>
              We cannot handle excessive mud caked on the vehicle surface. If
              you are unsure, one of our friendly attendants can help evaluate
              our capabilities.
            </p>
          </ContentBox>
          <SpecialsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
