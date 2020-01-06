// import original module declaration
import "styled-components"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

// and extend it
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    spacing: (factor: number) => string
  }
}
