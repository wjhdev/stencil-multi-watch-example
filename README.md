# stencil-multi-watch-example
 
Example of external module changing not rebundling a running compiler

Steps:

1. `cd package1/ ; npm install ; npm run build`
2. `cd package2/ ; npm install ; npm run start`
3. While the package2 compiler is watching, edit `/package1/src/my-component.tsx` (add something additional to render)
4. rebuilt package1: `cd package1/ ; npm run build`

What's odd is this will cause the running compiler from step 2 to initiate a rebuild, but it appears the changes to package1 are not then re-bundled.

Quit the compiler and restart it. Changes from step 3 should now be reflected.
