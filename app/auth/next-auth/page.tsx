import Link from "next/link";
import React from "react";

const AuthenticationWithNextAuth = () => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <Link
          href="/auth/next-auth/sign-up"
          className="underline underline-offset-4 hover:text-sky-500"
        >
          Sign Up
        </Link>
        <Link
          href="/auth/next-auth/sign-in"
          className="underline underline-offset-4 hover:text-sky-500"
        >
          Sign In
        </Link>
      </div>

      <p>What are used in this page:</p>
      <ul>
        <li>NextAuth.js</li>
        <li>node.bcrypt.js - to hash password</li>
        <li>thunder client - to test API request</li>
      </ul>
    </div>
  );
};

export default AuthenticationWithNextAuth;
