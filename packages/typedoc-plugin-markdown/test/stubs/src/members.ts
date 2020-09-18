export let declarationMember: string;

export function signatureMember() {}

class NotExportedClass {}
export { NotExportedClass as ReferenceMember };

export class ClassWithAccessorMembers {
  private _private: string;

  get getter(): string {
    return this._private;
  }

  set setter(value: string) {
    this._private = value;
  }
}
