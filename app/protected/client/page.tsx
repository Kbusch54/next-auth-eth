'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SignOut from "@/app/components/signOut";

const ClientProtectedPage=()=>{
  const { status, data:session } = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/auth/signin?callbackUrl=/protected/client')
  }
});



    if (status === "loading") return <div>loading</div>;
    if (status === "authenticated" && session){
    return (
      <div>
        This page is Protected for special people. like{"\n"}
        {JSON.stringify(session.user, null, 2)}
        <SignOut/>
      </div>
    );
    }
};

export default ClientProtectedPage;