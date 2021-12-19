# Classname Reducer

Tired of having to rely on JSS ("Javascript CSS") style solutions to style your React components?

Don't want to use funky string-interpolation to decide on an element's `className`?

For example:
```jsx
 <div 
  className={`container ${props.isLarge? 'large': ''} ${props?.scrollabe? 'scrollable': ''}`} 
>
  { props.children }
 </div>
```

If you want to use good-ol' CSS/SCSS/SASS styling without hassle or mess of including **class-name** logic in your **component** code, this is the package for you!

## About

This (minimal) package takes inspiration from Redux reducers/selectors to generate a string you can directly plug into your React component.

## Usage

Say you've got the following CSS class names:
- `text`: Should always be present
- `super-text`: Should be present only when `props.super` is set
- `foo-bar`: A soon-to-be deprecated class name (to be disabled for now)

Create a `ClassNameSpec`-type object:

```typescript
const standardKey: ClassNameSpec = {
  text: true,                                // Always shows up
  'super-text': (state) => state?.superText, // Only shows up if state.super is true/"truthy"
  'foo-bar': false                           // Never shows up
};
```

Use it with `classNameReducer`:
```typescript
const className = classNameReducer(standardKey, { superText: true });
```

Or, if you're using this in React...
```typescript
const [ makeSuper, setMakeSuper ] = useState(true);

const className = classNameReducer(standardKey, { superText: makeSuper });
```