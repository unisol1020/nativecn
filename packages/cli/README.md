# nativecn

A CLI for adding components to your project.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies and adds a basics: 

- `tailwind.config.js`
- `global.css`
- `babel.config.js`
- `nativewind-env.d.ts`
- `metro.config.js`

Also, if you don’t have a components and lib folders, it will create them for you.

```bash
npx nativecn init
```

### After initialization, ensure to include: **`global.css`** inside the root layout.

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx nativecn add [Component]
```

### Example

```bash
npx nativecn add Text
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx nativecn add
```
