import { readFile } from 'fs/promises';
import { join } from 'path';
import path from 'path';
export default async function getConfig() {
   const customCssPath = join(path.dirname(new URL(import.meta.url).pathname), 'custom.css');
   const customCss = await readFile(customCssPath, 'utf-8');

   return {
      swaggerOptions: {
         persistAuthorization: true,
         displayRequestDuration: true,
         requestSnippetsEnabled: true,
         docExpansion: 'list',
         defaultModelsExpandDepth: 1,
         operationsSorter: 'method',
         setPreLoadingEnabled: true,
      },
     customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
      customfavIcon: '../assets/image/2.png',
      customSiteTitle: ".M.U.F.A.R.",
      explorer: false,
      deepLinking: true,
      setPreLoadingEnabled: true,
   };
}
