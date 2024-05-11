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
import Link from "next/link";

export default function TableDemo() {
  return (
    <>
      <div className="flex items-center sm:mx-8 md:mx-12 lg:mx-16">
        <h1 className="text-lg font-semibold md:text-2xl ">collections</h1>
      </div>
      <div className="flex border border1 items-center justify-center sm:mx-8 md:mx-12 lg:mx-16">
        <Table>
          <TableHeader className="w-[50px] bg-muted/80">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Entries</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                {" "}
                <Link href="/cp/articles" className="hover:text-primary">
                  {" "}
                  Blog Articles{" "}
                </Link>
              </TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Link href="/" className="hover:text-primary">
                  {" "}
                  Pages{" "}
                </Link>
              </TableCell>
              <TableCell>5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
