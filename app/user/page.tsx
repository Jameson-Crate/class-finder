"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserContext } from "@/app/page";
import { useContext } from "react";

export default function User() {
  const user: any = useContext(UserContext);

  if (user != null) {
    return (
      <UserContext.Consumer>
        <div>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src={user.picture.large} alt="Missing" />
              </Avatar>
              <CardTitle>{user.name.first}</CardTitle>
              <CardDescription>
                Street:{" "}
                {user.location.street.name + " " + user.location.street.number}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </UserContext.Provider>
    );
  } else {
    return <div>No User Found</div>;
  }
}
