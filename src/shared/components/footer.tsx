"use client"
import Link from "next/link"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
// import PhoneIcon from "@/assets/icons/phone.svg"
// import MailIcon from "@/assets/icons/email.svg"
// import MapPinIcon from "@/assets/icons/map-pin.svg"

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6">Logo Here</h2>
          <div className="w-full h-px bg-gray-700 mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-[300px_1fr_1fr_1fr_400px] gap-8">
          {/* Reach us */}
          <div className="md:col-span-2 xl:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Reach us</h3>
            <ul className="space-y-4">
              <li className="flex sm:items-center max-sm:flex-col">
                {/* <PhoneIcon className="mr-4 min-w-6" /> */}
                <a href="tel:+10123456789" className="hover:underline">+1012 3456 789</a>
              </li>
              <li className="flex sm:items-center max-sm:flex-col">
                {/* <MailIcon className="mr-4 min-w-6" /> */}
                <a href="mailto:demo@gmail.com" className="hover:underline">demo@gmail.com</a>
              </li>
              <li className="flex items-start max-sm:flex-col">
                {/* <MapPinIcon className="mr-4 mt-1 min-w-6" /> */}
                <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-services">Terms & Services</Link>
              </li>
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/techlabz-keybox">Techlabz Keybox</Link>
              </li>
              <li>
                <Link href="/downloads">Downloads</Link>
              </li>
              <li>
                <Link href="/forum">Forum</Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="bg-white/5 p-6 rounded-lg lg:place-self-center max-xl:col-span-full">
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <div className="flex mb-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 h-auto border-b border-0 py-2 flex-grow focus:outline-none focus:border-white rounded-e-none"
              />
              <Button variant="outline" className="transition-colors bg-black text-white border-0 hover:text-black hover:bg-white rounded-s-none" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">* Will send you weekly updates for your better tool management.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

