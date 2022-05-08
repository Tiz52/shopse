import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Link from "next/link";
import {TransitionBox} from "../ui";

const rows: GridRowsProp = [
  {id: 1, fullname: "Carlos Murillo", paid: "No Pagado", order: "1243"},
  {id: 2, fullname: "Carlos Murillo", paid: "No Pagado", order: "1245"},
];

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 50,
  },
  {
    field: "fullname",
    headerName: "Nombre Completo",
    flex: 1,
    minWidth: 300,
  },
  {
    field: "paid",
    headerName: "Pagado",
    minWidth: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <div className="flex items-center justify-center w-24 h-8 text-green-600 border-2 border-green-600 rounded-full">
          <span className="font-semibold">Pagado</span>
        </div>
      ) : (
        <div className="flex items-center justify-center w-24 h-8 text-red-600 border-2 border-red-600 rounded-full">
          <span className="font-semibold">No Pagado</span>
        </div>
      );
    },
  },
  {
    field: "order",
    headerName: "Orden",
    minWidth: 150,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <Link href={`/orders/${params.row.order}`} passHref>
          <a className="font-semibold underline text-primary">Ver Orden</a>
        </Link>
      );
    },
  },
];

export const HistorySection = () => {
  return (
    <section className="px-[24px] pt-[72px] lg:px-12">
      <TransitionBox />
      <div className="py-12">
        <h1 className="text-2xl capitalize md:text-3xl text-primary">
          Historial de Ordenes
        </h1>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "black",
            color: "white",
            fontSize: 16,
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
      />
    </section>
  );
};
