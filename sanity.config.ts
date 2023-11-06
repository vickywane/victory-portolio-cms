import {defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { cloudinaryImageSource, cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'oldlace-penguin',

  projectId: 'ymomkzct',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    cloudinarySchemaPlugin()
  ],

  form: {
    image: {
      assetSources: (previousAssetSources, context) => {
        // @ts-ignore
        if (context.currentUser?.roles.includes('cloudinaryAccess')) {
          // appends cloudinary as an asset source
          return [...previousAssetSources, cloudinaryImageSource]
        }

        // @ts-ignore
        if (context.currentUser?.roles.includes('onlyCloudinaryAccess')) {
          return [cloudinaryImageSource]
        }
        // dont add cloudnary as an asset sources
        return previousAssetSources
      },
    },
  },

  schema: {
    types: schemaTypes,
  },
})
