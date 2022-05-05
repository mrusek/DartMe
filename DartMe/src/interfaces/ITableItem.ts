export default interface ITableItem {
    id: string;
    getCols: () => Map<string, string>;
}