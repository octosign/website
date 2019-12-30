// import original module declaration
import "styled-components"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

// and extend it
declare module "styled-components" {
  export interface DefaultTheme extends ThemeOptions {
    spacing: (factor: number) => string
  }
}
