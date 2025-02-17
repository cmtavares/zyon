"use client";

import { Button } from "../../_components/ui/button";
import { logout } from "../../(public)/auth/sign-in/_actions/logout";

export default function Page() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Button className="mr-2" onClick={() => logout()}>
          Sair
        </Button>
      </div>
    </>
  );
}
