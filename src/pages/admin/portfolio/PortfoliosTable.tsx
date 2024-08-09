import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import ConfirmDelete from "@/components/ConfirmDelete";
import { Search } from "@/components/ui/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { TPortfolio } from "@/lib/models";
import EditPortfolio from "./EditPortfolio";

interface Props {
  data: TPortfolio[];
  getPortfolio: () => void;
}

export const columns = (refetch: () => void): ColumnDef<TPortfolio>[] => [
  {
    accessorKey: "number",
    header: "#",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: "image",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Image
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start">
        <img src={row.getValue("image")} alt="image" className="w-10" />
      </div>
    ),
  },
  {
    id: "title",
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start line-clamp-2">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Descriptions",
    cell: ({ row }) => (
      <div className="line-clamp-2">{row.getValue("description")}</div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const portfolio = row.original;

      const [isOpen, setIsOpen] = React.useState<boolean>(false);
      const [isLoading, setIsLoading] = React.useState<boolean>(false);

      const { toast } = useToast();
      const deletePortfolio = async (id: number) => {
        setIsLoading(true);
        try {
          await axiosInstance.delete(`portofolio/${id}`);
          toast({
            title: "Success",
            description: "Portfolio berhasil dihapus",
            variant: "success",
          });
          setIsOpen(false);
          refetch();
        } catch (error) {
          console.log(error);

          toast({
            title: "Error",
            description: "Portfolio gagal dihapus",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <div className="capitalize space-x-1 flex items-center">
          <ConfirmDelete
            actions={() => deletePortfolio(portfolio.id_portofolio)}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <EditPortfolio portfolio={portfolio} getDataPortfolio={refetch} />
        </div>
      );
    },
  },
];

const PortfoliosTable: React.FC<Props> = ({ data, getPortfolio }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns: columns(getPortfolio),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <Search
          placeholder="Cari portfolio..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="gap-1 flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/administrator/portfolio/add-portfolio">
            <Button size="sm">+Add New</Button>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-md border p-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4 px-6 bg-white rounded-md">
        <div className="flex gap-2 items-center w-1/2">
          <p className="text-sm">Row per page</p>
          <Select
            value={String(table.getState().pagination.pageSize)}
            onValueChange={(value: any) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="w-[60px]">
              <SelectValue placeholder="Row perpage" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={String(pageSize)}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="text-sm">from {table.getRowCount()} entries</div>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-4">
          <p className="text-sm">
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()} page
          </p>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfoliosTable;
