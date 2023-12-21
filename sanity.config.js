//this file communicates only with the sanity studio admin you will need another one for connecting to sanity through the api with groq
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "z29yehjg",
  dataset: "production",
  title: "artshop",
  apiVersion: "2023-12-21",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config