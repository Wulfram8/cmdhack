type Mods = Record<string, boolean | string>;

function customClasses(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
}

const typesCls = null;
console.log(typesCls);
export default customClasses;
