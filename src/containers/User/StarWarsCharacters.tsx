import { Divider, Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { unlink } from "fs";
import React, { useState } from "react";
import { Characters } from "../../models/character.model";

// const StarWarsCharacters = ({ list }: { list: Characters[] }) => {
//   return (
//     <div>
//       <ul>
//         {list.map((character) => {
//           return (
//             <li key={character.nombre}>
//               {character.nombre} , {character.tipo} , {character.gender}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default StarWarsCharacters;
const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    render: (nombre: string) => <strong>{nombre}</strong>,
  },
  {
    title: "Color de piel",
    dataIndex: "skin_color",
    key: "skin_color",
  },
  {
    title: "Sexo",
    dataIndex: "gender",
    key: "gender",
  },
];

interface Paginator {
  current: number;
  pageSize: number;
  total: number;
}

const StarWarsCharacters = ({
  list,
  total,
  currentPage,
  paginate,
}: {
  list: Characters[];
  total: number;
  currentPage: number;
  paginate: (current: number) => void;
}) => {
  const [pagination, _] = useState<Paginator>({
    current: currentPage,
    pageSize: 10,
    total: total,
  });

  const handleTableChange = (pager: TablePaginationConfig) => {
    if (!pager.current) {
      return;
    }
    paginate(pager.current);
  };

  return (
    <div style={{ margin: "10px" }}>
      <Table
        rowKey={(record) => record.name}
        dataSource={list}
        columns={columns}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default StarWarsCharacters;
