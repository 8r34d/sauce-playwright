import { InventoryItemName } from "../enums/inventory-item-name-enum";
import { YourInformation } from "./YourInformation";

export interface Order {
  customerDetails: YourInformation;
  itemNames: Array<InventoryItemName>;
}
