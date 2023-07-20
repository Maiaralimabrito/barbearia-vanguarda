import { LitElement, html, css } from "lit";

export class Paragrafo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: var(--cor-secundria, #665e57);
        font-family: var(--fonte-corpo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }

      p {
        margin: 0;
      }
    `,
  ];

  render() {
    return html` <p><slot>Parágrafo</slot></p> `;
  }
}
customElements.define("app-paragrafo", Paragrafo);import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<p>Barbearia Vanguarda</p>`;
    }
}
customElements.define('app-home-page', HomePage);