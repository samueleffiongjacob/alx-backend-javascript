import { RowID, RowElement } from './interface';
// Type declaration for the insertRow function
export function insertRow(row: RowElement): number;
// Type declaration for the deleteRow function
export function deleteRow(rowId: RowID): void;
// Type declaration for the updateRow function
export function updateRow(rowId: RowID, row: RowElement): number;
