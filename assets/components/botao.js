import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ::slotted(button),button,::slotted(a) {
        display: inline-flex;
        width: 132px;
        height: 31px;
        padding: 10px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        width: inherit;

        border-radius: 8px;
        background-color: var(
          --button-background,
          color-mix(in srgb, white 20%, var(--tom-2, #b38962))
        );

        box-shadow: 0px 2px 4px 0px #665e57;

        /* tipografia */

        color: var(
          --color,
          color-mix(in srgb, black 20%, var(--tom-3, #664e38))
        );
        text-align: center;
        font-family: var(--fonte-titulo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;
        text-decoration:none;

        transition: all 200s;
        cursor: pointer;
      }
      button:hover button:active {
        background-color: color-mix(
          in srgb,
          white 15%,
          var(--button-background, var (--tom-2))
        );
        color: var(--tom-1);
      }

      
    `,
  ];

  render() {
    return html`<slot><button>Pressione</button></slot>
    
    
  
    `;
  }
}
customElements.define("app-botao", Botao);