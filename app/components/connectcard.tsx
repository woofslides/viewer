"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function ConnectCardContent() {
  const [srvIp, setSrvIp] = useState("localhost:5677");
  const [ctrlIp, setCtrlIp] = useState("localhost:5678");

  return (
    <CardContent className="grid grid-cols-4 items-center gap-4">
      <Label>Server IP Address</Label>
      <Input
        value={srvIp}
        onChange={(e) => {
          const v = e.target.value;
          setSrvIp(
            v.startsWith("https://") || v.startsWith("http://")
              ? v.split("://")[1]
              : v,
          );
        }}
        placeholder="Enter server IP address"
        className="col-span-3"
      />
      <Label>Controller IP Address</Label>
      <Input
        value={ctrlIp}
        onChange={(e) => {
          const v = e.target.value;
          setCtrlIp(
            v.startsWith("https://") || v.startsWith("http://")
              ? v.split("://")[1]
              : v,
          );
        }}
        placeholder="Enter controller IP address"
        className="col-span-3"
      />
      <Link href={`/present?srv=${srvIp}&ctrl=${ctrlIp}`}>
        <Button>Connect</Button>
      </Link>
    </CardContent>
  );
}
