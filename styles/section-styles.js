import { css } from "lit";

export const section = css`
  :host {
      width: 100%;
          height: 100svh; /* Smallest View Height */

              display: flex;
                  box-sizing: border-box;
                      flex-direction: column;
                          justify-content: center;
                              align-items: center;
                                  gap: 4.375rem;

                                      padding: 2rem;
                                          overflow: hidden;
                                              position: relative;
                                                }

                                                  button:hover,
                                                        button:active,
                                                              a:hover,
                                                                    a:active {
                                                                            background-color: color-mix(in srgb, white 15%, var(--button-background, var(--tom-2)));
                                                                                    color: var(--tom-1);

                                                                                          }
                                                                                          `;