import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;


  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.homeContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a{
    color: #f5f5f5
}

p{
  font-size: 9px;
}
.box{
  padding: 8px;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;

  border: 3px solid;
  font-size: 12px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  
  cursor: pointer;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

}

.form{
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 5px;
  margin: 0px;
}

.password {
  padding:15px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  
}

button:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
  text-transform: lowercase;
}

.red{
  opacity: 1;
  color: red;
}

.green{
  background-color:green;
}

.hall{
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 22px;
}

.btnContainer{
  background-color: black;
  padding: 0;
}
@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
`;
