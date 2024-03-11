import { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
      <div className="grid" key={user.id.value}>
        <AlertDialog >
          <AlertDialogTrigger>
            <Card className="flex justify-center">
              <CardHeader className="flex place-items-center">
                <Avatar className="size-20">
                  <AvatarImage src={user.picture.large} alt="Missing" />
                </Avatar>
                <CardTitle>{user.name.first}</CardTitle>
                <CardDescription>
                  Street:{" "}
                  {user.location.street.name +
                    " " +
                    user.location.street.number}
                </CardDescription>
              </CardHeader>
            </Card>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <Avatar className="size-20">
                  <AvatarImage src={user.picture.large} alt="Missing" />
                </Avatar>
                <h1>{user.name.first + " " + user.name.last}</h1>
              </AlertDialogTitle>
              <AlertDialogDescription>
                Street:{" "}
                {user.location.street.name + " " + user.location.street.number}
                <br />
                Longitude: {user.location.coordinates.longitude}
                <br />
                Latitude: {user.location.coordinates.latitude}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Done</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  });

  return <div className="p-10 grid grid-cols-2">{galary}</div>;
}
