import type ISerializable from "src/interfaces/ISerializable";

export default class BaseTableItem implements ISerializable{
  //nameof<T>(name: Extract<keyof T, string>): string => name;
  varExtractor: RegExp = new RegExp("return (.*);");
  nameof<T>(name: () => T) {
    var m = this.varExtractor.exec(name + "");
    if (m == null) throw new Error("The function does not contain a statement matching 'return variableName;'");
    return m[1];
  }

}