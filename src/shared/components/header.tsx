"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { Menu, User, X } from "lucide-react"
import { Button } from "@/shared/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import CartIcon from "@/assets/icons/cart.svg"

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile();
  const isExpanded = isMobile && isMenuOpen;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname])

  return (
    <header
      data-expanded={isExpanded}
      className="py-4 sticky top-0 transition-all bg-white data-[expanded=true]:[&_.logo]:invert data-[expanded=true]:bg-black z-15"
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex items-center transition-all">
          <Link href="/" className="text-xl font-bold">
            Logo Here
          </Link>
        </div>
        {/* Main Navigation */}
        <div
          data-expanded={isExpanded}
          className="flex flex-col transition-all origin-top items-stretch max-md:h-[calc(100vh-68px)] max-md:scale-y-[0] data-[expanded=true]:scale-y-[1] md:flex-row md:items-center gap-8 py-4 md:py-0 max-md:absolute top-full left-0 right-0 bg-white max-md:data-[expanded=true]:bg-black md:bg-white text-white md:text-inherit "
        >
          <NavigationMenu viewport={!isMobile} orientation={isMobile ? 'vertical' : 'horizontal'} className="max-w-full items-stretch max-md:flex-col max-md:justify-start max-md:overflow-y-auto max-md:max-h-[calc(100vh-160px)]">
            <NavigationMenuList className="flex-col items-stretch px-4 md:px-0 md:flex-row gap-3 md:gap-6">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="max-md:justify-start max-md:w-full bg-transparent max-md:px-2!">Features</NavigationMenuTrigger>
                <NavigationMenuContent asChild={isMobile}>
                  <ul className="md:grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex md:h-full w-full select-none flex-col justify-end rounded-md md:bg-gradient-to-b from-muted/50 to-muted p-3 md:p-6 no-underline outline-none focus:shadow-md"
                          href="/features"
                        >
                          <div className="md:mb-2 md:mt-4 md:text-lg font-medium">All Features</div>
                          {!isMobile && (
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore all our features and capabilities
                            </p>
                          )}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/features/analytics"
                          title="Analytics"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Analytics</div>
                          {!isMobile && (
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Track user behavior and optimize your product</p>
                          )}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/features/automation"
                          title="Automation"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Automation</div>
                          {!isMobile && (
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Automate repetitive tasks and workflows</p>
                          )}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/features/collaboration"
                          title="Collaboration"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Collaboration</div>
                          {!isMobile && (
                           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Work together with your team in real-time</p>
                          )}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <a
                          href="/features/integrations"
                          title="Integrations"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Integrations</div>
                          {!isMobile && (
                           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Connect with your favorite tools and services</p>
                          )}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink>Blog</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/shop" legacyBehavior passHref>
                  <NavigationMenuLink>Shop</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-8 self-center">
            <Button
              variant="ghost"
              asChild
              className="border border-current flex rounded-full place-center size-8 p-0!"
            >
              <Link href="/account">
                <User size={20} />
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="border border-current flex rounded-full place-center size-8 p-0!"
            >
              <Link href="/cart">
                <CartIcon className="fill-current " />
              </Link>
            </Button>
          </div>
        </div>
        {/* Mobile Menu Trigger */}
        <Button
          variant="ghost"
          className="md:hidden bg-transparent! p-0! size-8 transition-all data-[expanded=true]:text-white"
          onClick={() => setIsMenuOpen(prevState => !prevState)}
          data-expanded={isExpanded}
        >
          {isMenuOpen ? <X  className="size-8" /> : <Menu className="size-8" />}
        </Button>
      </div>
    </header>
  )
}