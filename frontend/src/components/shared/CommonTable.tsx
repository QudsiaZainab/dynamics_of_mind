import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
type Combined = string | JSX.Element;
interface CommonTableProps {
  headerData: Combined[];
  children: JSX.Element | JSX.Element[];
}

export default function CommonTable({
  headerData,
  children,
}: CommonTableProps) {
  
  return (
    <TableContainer bg="white" rounded="md" >
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            {headerData.map((item, index) => {
              return <Th key={index}>{item}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
}
