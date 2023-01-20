import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { urlFromJson } from "../../utils";
import "./index.css";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  let scrimUrl
  let json

  try {
    json = JSON.parse(content)
    scrimUrl = urlFromJson(json)
  } catch {
    console.error("Unable to parse scrim data")
  }

  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  return (
    <Box p={4}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={6}
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          File: {context.path} {language}
        </Box>
        <Box p={4}>
          <iframe src={scrimUrl}></iframe>
          <pre>{JSON.stringify(json, null, 4)}</pre>
        </Box>
      </Box>
    </Box>
  );
}