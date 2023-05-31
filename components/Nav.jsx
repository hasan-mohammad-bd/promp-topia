"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import image_1 from "../public/assets/images/logo.svg";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={image_1}
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p>Promptopia</p>
      </Link>

      {/* Mobile navigation */}
      <div className="sm:flex hidden">
        
      </div>
    </nav>
  );
};

export default Nav;
