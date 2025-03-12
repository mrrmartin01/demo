import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

type SlideData = {
  id: string;
  title: string;
  subtitle: string;
  description: JSX.Element;
};

export const slides: SlideData[] = [
  {
    id: "slide-1",
    title: "Multi-currency",
    subtitle: "accounts for Africans",
    description: (
      <p>
        Transact at home and abroad - create, send, hold and receive money in
        African and foreign currencies. Send money to and from Africa,
        seamlessly.
      </p>
    ),
  },
  {
    id: "slide-2",
    title: "Choose from several",
    subtitle: "payment methods",
    description: (
      <p>
        With Bomba, you get to choose how you send and receive money; send at
        your own rate with &lsquo;{" "}
        <span className="text-emerald-500">Swap</span>&rsquo;, send and receive
        instantly with &lsquo; <span className="text-emerald-500">Express</span>
        &rsquo;, or make free local transfers with &lsquo;{" "}
        <span className="text-emerald-500">Withdraw Money</span>&rsquo;
      </p>
    ),
  },
  {
    id: "slide-3",
    title: "Accept and create offers",
    subtitle: "with Swap",
    description: (
      <p>
        You can send money internationally at your preferred rate on our
        <span className="text-emerald-500">Peer-to-peer Marketplace</span> by
        choosing or accepting an offer. Created offers get accepted within an
        average time of 30 minutes.
      </p>
    ),
  },
  {
    id: "slide-4",
    title: "Make instant transfers",
    subtitle: "with Express",
    description: (
      <p>
        When you send money using &lsquo;{" "}
        <span className="text-emerald-500">Express</span>
        &rsquo; - it&apos;s sent at Bomba exchange rate and your transaction is
        completed instantly.
      </p>
    ),
  },
  {
    id: "slide-5",
    title: "Review and confirm",
    subtitle: "your transaction",
    description: (
      <p>
        Review your transaction, ensure that the provided details are correct,
        then click the send button!
      </p>
    ),
  },
  {
    id: "slide-6",
    title: "Completed!",
    subtitle: "Fast, easy and secure",
    description: (
      <div className="flex flex-col">
        <p>
          Money on its way! Send money today to your friends, family or make
          payment to a business.
        </p>
        <Link href="#" className="flex items-center">Get started <ArrowRight className="text-emerald-500 w-3 h-3"/></Link>
      </div>
    ),
  },
];
