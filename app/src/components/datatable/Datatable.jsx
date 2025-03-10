import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { userColumns, userRows } from "../../datatable";
import { Link } from "react-router-dom";

const paginationModel = { page: 0, pageSize: 5 };

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{  textDecoration: "none"}}>
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{  textDecoration: "none"}} className="link">
        Add New
        </Link>
      </div>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
          className="dataGrid"
        />
      </Paper>
    </div>
  );
};

export default Datatable;
