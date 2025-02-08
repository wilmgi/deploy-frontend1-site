
import { defineConfig } from 'vite'
import {resolve} from 'path'



export default defineConfig({
  //base: "/tsdemo2/"

 
  build: {
    rollupOptions: {
      input: {
      start: resolve(__dirname, "index.html"),
      contact: resolve(__dirname, "src/contact/index.html"),
      knowledge: resolve(__dirname, "src/knowledge/index.html"),
      refrences: resolve(__dirname, "src/refrences/index.html"),
      portfolio: resolve(__dirname, "src/portfolio/index.html")
      }
    }
  }
  
  
 
})
