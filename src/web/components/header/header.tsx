import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import Link from "../link/link";
import { SearchMobile } from "../search/search";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons/icons";
import { PopupButton } from "@typeform/embed-react";
import { useLocation } from "react-router-dom";
import { CloseIcon } from "../icons/icons";

function MobileNavItem({
  href,
  children,
  classNames,
}: {
  href: string;
  children: React.ReactNode;
  classNames: string;
}) {
  return (
    <li>
      <Popover.Button
        classNames={`block pt-5 pr-5 pb-5 font-harman ${classNames}`}
        as={Link}
        to={href}
      >
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center px-4 py-2 text-sm font-medium text-zinc-800">
        <div className="block">
          <div aria-hidden="true" className="h-0.5 w-5 bg-current"></div>
          <div aria-hidden="true" className="h-0.5 w-5 bg-current mt-2"></div>
          <div aria-hidden="true" className="h-0.5 w-5 bg-current mt-2"></div>
        </div>

        <div className="ml-4">
          <img
            src="https://devnotnull-ui-production.s3.eu-west-2.amazonaws.com/media/logo.png"
            alt="avatar"
            className="h-10"
          />
        </div>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="-translate-y-10 opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel
            focus
            className="fixed z-50 top-0 left-0 w-full	h-full bg-white p-8"
          >
            <div className="flex items-center justify-between">
              <Popover.Button aria-label="Close menu" className="">
                <CloseIcon className="h-10 w-10 text-zinc-500" />
              </Popover.Button>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                <MobileNavItem
                  href="/"
                  classNames="animate-fade-down animate-once animate-delay-50 animate-ease-in-out animate-normal"
                >
                  About
                </MobileNavItem>
                <MobileNavItem
                  href="/blog"
                  classNames="animate-fade-down animate-once animate-delay-100 animate-ease-in-out animate-normal"
                >
                  Blog
                </MobileNavItem>
                <MobileNavItem
                  href="/blog/tags"
                  classNames="animate-fade-down animate-once animate-delay-150 animate-ease-in-out animate-normal"
                >
                  Tags
                </MobileNavItem>
                <div className="flex justify-end flex-1">
                  <div className="pointer-events-auto">
                    <ul className="flex px-3">
                      <li>
                        <Link to="https://github.com/devisnotnull">
                          <GitHubIcon className="h-10 pl-2 pt-2 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://github.com/devisnotnull">
                          <LinkedInIcon className="h-10 pl-2 pt-2 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
                        </Link>
                      </li>
                      <li>
                        <PopupButton
                          id="HTs3mlXH"
                          style={{
                            fontSize: 20,
                            margin: 0,
                            padding: 0,
                            border: 0,
                            width: "100%",
                          }}
                        >
                          <MailIcon className="h-10 pl-2 pt-2 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
                        </PopupButton>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function NavItem({
  href,
  children,
  isActive,
}: {
  href: string;
  children?: JSX.Element | JSX.Element[] | string;
  isActive?: boolean;
}) {
  return (
    <li>
      <Link
        to={href}
        classNames={`relative block p-3 transition hover:text-orange-500 font-harman ${
          isActive ? "border-b-2 border-orange-500" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  const location = useLocation();

  return (
    <nav {...props}>
      <ul className="flex px-3 font-medium text-zinc-800">
        <NavItem href="/" isActive={location.pathname === "/"}>
          About
        </NavItem>
        <NavItem href="/blog" isActive={location.pathname.includes("/blog")}>
          Blog
        </NavItem>
        <NavItem
          href="/blog/tags"
          isActive={location.pathname.includes("/blog/tags")}
        >
          Tags
        </NavItem>
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 pt-3 pb-3 md:pt-6 md:pb-6">
        <div>
          <div className="relative flex">
            <div className="grow md:flex-1">
              <div className="ml-4">
                <img
                  src="https://devnotnull-ui-production.s3.eu-west-2.amazonaws.com/media/logo.png"
                  alt="avatar"
                  className="hidden md:block h-10"
                />
                <MobileNavigation className="pointer-events-auto md:hidden" />
              </div>
            </div>
            <div className="md:flex md:flex-1 md:justify-center">
              <DesktopNavigation className="pointer-events-auto hidden md:block flex" />
            </div>
            <div className="flex md:flex-1 justify-end">
              <div className="pointer-events-auto">
                <ul className="flex px-3">
                  <li className="inline-block">
                    <SearchMobile />
                  </li>
                  <li className="hidden md:inline-block">
                    <Link to="https://github.com/devisnotnull">
                      <GitHubIcon className="h-10 pl-2 pt-2 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
                    </Link>
                  </li>
                  <li className="hidden md:inline-block">
                    <Link to="https://github.com/devisnotnull">
                      <LinkedInIcon className="h-10 pl-2 pt-2 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
                    </Link>
                  </li>
                  <li className="hidden md:inline-block">
                    <PopupButton
                      id="HTs3mlXH"
                      style={{
                        fontSize: 20,
                        margin: 0,
                        padding: 0,
                        border: 0,
                        width: "100%",
                      }}
                    >
                      <MailIcon className="h-10 pl-2 pt-2 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
                    </PopupButton>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
