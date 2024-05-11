import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function TableDemo() {
  return (
    <>
      <div className="flex sm:mx-8 md:mx-12 lg:mx-16">
        <h1 className="text-lg font-semibold md:text-2xl mt-2 ">Taxonomies</h1>
        <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto" variant="outline">Add Tag</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Tag</DialogTitle>
          <DialogDescription>
            Add Tag to your website here. do not forget to add description.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Tag name
            </Label>
            <Input
              id="name"
              defaultValue="cyber security"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
              id="username"
              defaultValue="cyber security in the modern web applications"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>      </div>
      <div className="flex border border1 items-center justify-center sm:mx-8 md:mx-12 lg:mx-16">
        <Table>
          <TableHeader className="w-[50px] bg-muted/80">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Terms</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                {" "}
                <Link href="#" className="hover:text-primary">
                  {" "}
                  Tags {" "}
                </Link>
              </TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Link href="#" className="hover:text-primary">
                  {" "}
                  Tags {" "}
                </Link>
              </TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Link href="#" className="hover:text-primary">
                  {" "}
                  Tags {" "}
                </Link>
              </TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Link href="#" className="hover:text-primary">
                  {" "}
                  Tags {" "}
                </Link>
              </TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Link href="#" className="hover:text-primary">
                  {" "}
                  Tags {" "}
                </Link>
              </TableCell>
              <TableCell>12</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
