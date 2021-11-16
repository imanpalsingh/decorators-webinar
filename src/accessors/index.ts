class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  set x(x: any) {
    this._x = x;
  }
  set y(y: any) {
    this._y = y;
  }
}

/*---------------------------------------------------*/

export function ensurePositive(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.set!;

  descriptor.set = function (value: any) {
    if (value < 0) console.warn("Negative value converted to positive");
    return original.call(this, Math.abs(value));
  };
}

/*---------------------------------------------------*/

const point = new Point(2, 3);
point.x = -10;
point.y = -20;
console.log(point);
