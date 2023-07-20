import { LitElement, html, css } from "lit";

export class Bolinhas extends LitElement {
static get properties() {
  return {
    formato: { type: String },
  };
}

  static styles = [
    css`
      :host {
        width: 100px;
        height: 100px;

        display: block;

        display: flex;
        width: 100px;
        height: 100px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
      }

      .inteira {
        -webkit-mask: url("bolinhas.svg.svg") no-repeat center;
        mask: url("bolinhas.svg.svg") no-repeat center;
      }

      .fila-preenchida {
        -webkit-mask: url("linha preenchida.svg") no-repeat center;
        mask: url("linha preenchida.svg") no-repeat center;
      }
      
      .fila-vazia {
        -webkit-mask: url("Bolinhas vazias.svg") no-repeat center;
        mask: url("Bolinhas vazias.svg") no-repeat center;
      }

      .metade {
        -webkit-mask: url("bolinhas-metade.svg") no-repeat center;
        mask: url("bolinhas-metade.svg") no-repeat center;
      }







      .bolinhas {
        width:100%;
        height:100%;
        
        -webkit-mask-size: 100%;
        mask-size: 100%;
        background-color: var(--cor-bolinhas, black);
      }
    `,
  ];

  /**
   * Define o formato das bolinhas
   * @returns Classe do formato
   */
   definirFormato() {
    if (this.formato === "fila-preenchida") {
      return "fila-preenchida";
    }
    if (this.formato === "fila-vazia") {
      return "fila-vazia";
    }
    if (this.formato === "metade") {
      return "metade";
    }
    return "inteira";
   }
  render() {
    return html` <div class=${`bolinhas ${this.definirFormato()}`}></div> `;
  }
}
customElements.define("app-bolinhas", Bolinhas);