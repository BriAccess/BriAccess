## Modifying dialog prompts

### Update tests 
After changing any of the pictograph data, to prevent the CI from failing you'll need to run `npm run test` in the terminal, then in the interactive menu run all tests with `a`, and update any failing snapshots with `u`.

### Upload new image
If your question requires adding an image, upload the new image file to `src/assets/pictographs`. You should try to reduce the file size of the image before uploading.

### Import new image
In `src/pages/Pictograph/constants.js`, you can import the new image you added by path with the format `import myImage from "../../assets/images/pictographs/{filename}";`

### Modify existing prompt
If you're modifying an existing prompt, you can find the relevant pictograph constant by searching searching for the string displayed in the UI. From here, you can add a new image to the array of images or change the `primaryText`. This will change the prompt across all the pages it's used.

### Creating a new prompt
If you're creating a new prompt, you can copy an existing pictograph constant or use the template below to get the shape of the object. Then modify the constant's name, the `primaryText`, and add `images` to  array if you want, though the array can be empty.

### Modify Page content
After adding a new prompt or if you want to remove a prompt, you can modify the `PAGE_RENDER_DATA` in `src/pages/Pictograph/constants.js`. You can add, reorder, or remove pictograph constants from the relevant page in `pictographData`.


## Pictograph constants
These are the objects that hold the dialog prompt data. They can be shared on multiple pictograph pages and they don't need to include any images. They have the shape:

```js
const CONSTANT_NAME = Object.freeze({
  primaryText: "This is the text displayed in the UI",
  images: [ importedImage1, importedImage2 ],
});
```

## Page render data constant
This constant holds the mappings from the page routes to its rendered pictograph content. The list of `pictographData` is rendered in the order it gets added.

```js
export const PAGE_RENDER_DATA = Object.freeze({
  fire: {
    headerText: "Fire",
    pictographData: []
  },
  ems: {
    headerText: "EMS",
    pictographData: [],
  },
  police: {
    headerText: "Police",
    pictographData: [],
  },
  help: {
    headerText: "General Help",
    pictographData: [],
  },
```