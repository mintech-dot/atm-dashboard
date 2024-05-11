import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithForm() {
  return (
    <>
      
      <Card className="w-container sm:mx-8 md:mx-12 lg:mx-28 my-8">
        <CardHeader>
          <CardTitle>Update User Info</CardTitle>
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="user">User</Label>
                <Input id="name" placeholder="raidsobhi" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input type="email" id="email" placeholder="Mintech@protonmail.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input type="password" id="password" placeholder="enter user's password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Update Password</Label>
                <Input type="password" id="update_password" placeholder=" Update password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Role</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Admin</SelectItem>
                    <SelectItem value="sveltekit">Moderator</SelectItem>
                    <SelectItem value="astro">Writer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Update</Button>
        </CardFooter>
      </Card>
    </>
  );
}
