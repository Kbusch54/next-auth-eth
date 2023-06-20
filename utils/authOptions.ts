import { NextAuthOptions } from "next-auth";
import { ethers } from "ethers";
import Credentials from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
    providers: [
          Credentials({
              name: "credentials",
              credentials: {
                account: { label: "Account" },
                signature: { label: "Signature" },
                message: { label: "Message" },
                messageRaw: { label: "Message Raw" }, 
                },
                // @ts-ignore
        authorize(credentials,req) {
            // const { account, signature,message,messageRaw } = credentials as any;
            // console.log("credentials", credentials);
            // const messageHash = ethers.utils.arrayify(messageRaw);
            // console.log("messageHash", messageHash);
            // const verified = ethers.utils.verifyMessage(
            //     messageHash,
            //     signature
            // );
            // console.log("verified", verified);
            // const user = verified === account ? { account: account } : null;
            
    
            if(credentials?.account === '0x0000000') {
                return {
                    account: '0x0000000',
                    name: '0x0000000',
                };
            }
                // throw new Error("invalid credentials");
                return null;
        },
    }), 
        
        ],
    
    //   callbacks: {
    //   //@ts-ignore
    //       async jwt({ token, user }) {
    //           return { ...token, ...user };
    //       },
    //       async session({ session, token }: { session: Session; token: any }) {
    //     console.log("session", session);
    //           return { ...session, user: token };
    //       },
    //   },
    //   session: {
    //       strategy: "jwt",
    //   maxAge:2 * 60 * 60, // 2 hours
    //   },
  
    // pages: {
    //   signIn: "/auth/signin",
    //   error: '/auth/error',
    //   // signOut: '/auth/signout'
    // },
    
  //   callbacks: {
  //     jwt(params) {
  //       // update token
  //       if (params.user?.role) {
  //         params.token.role = params.user.role;
  //       }
  //       // return final_token
  //       return params.token;
  //     },
  //   },
  };