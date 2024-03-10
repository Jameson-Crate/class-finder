import { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from 'next/router'

export default async function UserGalary({
  count,
  boolage,
}: {
  count: Number;
  boolage: Number;
}) {
  const users: Array<any> = await fetchUsers();

  async function fetchUsers() {
    const resp = await fetch(`https://randomuser.me/api/?results=${count}`, {
      cache: "no-store",
    });
    const data = await resp.json();
    return data.results;
  }

  let galary: Array<ReactNode> = users.map((user) => {
    return (
      <div>
        <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src={user.picture.large} alt="Missing"/>
            </Avatar>
            <CardTitle>{user.name.first}</CardTitle>
            <CardDescription>Street: {user.location.street.name + " " + user.location.street.number}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  });

  return <div>{galary}</div>;
}
