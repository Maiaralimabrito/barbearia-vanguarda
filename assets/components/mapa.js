import { LitElement, html, css } from "lit";

export class Mapa extends LitElement {
  static styles = [
    css`
      *, ::slotted(*)  {
        margin: 0;
      }

      :host {
        display: flex;
        width: 270px;
        height: 200px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        color: #fff;
        font-family: var(--fonte-titulo);
        box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
      }

      address {
        display: flex;
        padding: 10px 12px;
        padding-top: 5px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        border-radius: 0px 0px 8px 8px;
        background: var(--cor-secundria, #665e57);
      }

      .titulo, ::slotted(h2) { 
        text-align: center;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.64px;
      }

      .subtitulo, ::slotted(h3){ 
        text-align: justify;
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.32px;
      }

      figure {
        flex: 1 0 0;
        align-self: stretch;
        display: flex;
        align-items: center;
        overflow: hidden;

        border-radius: 5px 5px 0px 0px;
        border: 4px solid var(--cor-secundria, #665e57);
      }

      .imagem,  ::slotted(img) {
        width: 100%;
      }

    `,
  ];

  render() {
    return html`
      <figure>
        <slot name="imagem"></slot>
        <img class="imagem" src="mapa-1.png" alt="imagem barbearia"
        /></slot>
      </figure>

      <address>
        <slot name="titulo" >
          <h2 class="titulo" >Av. Marcechal Tito 2960</h2>
        </slot>

        <slot name="subtitulo" >
          <h3 class="subtitulo">São Miguel Paulista,São Paulo</h3>
        </slot>
      </address>
    `;
  }
}
customElements.define("app-mapa", Mapa);