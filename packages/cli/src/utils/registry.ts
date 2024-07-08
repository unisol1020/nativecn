export const ALL_COMPONENTS = [
  'Avatar',
  'Badge',
  'Button',
  'Card',
  'Checkbox',
  'Input',
  'Label',
  'Progress',
  'RadioGroup',
  'Separator',
  'Skeleton',
  'Switch',
  'Text',
  'Textarea',
  'Toggle',
  'Typography',
];
const baseUrl =
  'https://raw.githubusercontent.com/unisol1020/mono-ui/main';

export async function fetchComponents(components: string[]) {
  try {
    return await Promise.all(
      components.map(async component => {
        const response = await fetch(`${baseUrl}/packages/ui/src/${component}.tsx`);
        const content = await response.text();
        return {
          name: `${component}.tsx`,
          content,
        };
      })
    );
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch components from registry.`);
  }
}
