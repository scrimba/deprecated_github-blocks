import { FolderBlockProps, GetFileContent } from "@githubnext/blocks";
import { Box } from "@primer/react";
import { urlFromJson } from "../utils";
let scrims = []
let isScrim = /\.scrim$/i



export default function (props: FolderBlockProps) {
  scrims = props.tree.filter( (item) => {
    return isScrim.test(item.path) ? true : false
  })
  console.log(scrims)

  return (
    <Box p={4}>
      <h1>Scrims to display</h1>
      {scrims.map((item, index) => (
        <li>{item.path}</li>
      ))}
      <p>Just need to find the file content first.. GetFileContent is just a type..</p>
    </Box>
    
  );
}