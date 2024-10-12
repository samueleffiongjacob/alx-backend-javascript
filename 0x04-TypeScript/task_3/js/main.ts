/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';
// Create an object called 'row' with type 'RowElement'
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
// Insert the row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);
// Update the row with a new 'age' field
const updatedRow: RowElement = {...row, age: 23};
// Execute the updateRow function
CRUD.updateRow(newRowID, updatedRow);
// Execute the deleteRow function with the newRowID
CRUD.deleteRow(newRowID);
