// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp>", () => {
  // test('debe de mostrar Hola soy Vegeta Insecto', () => {
  //     const saludo='Hola soy Vegeta Insecto';
  //     const {getByText}=render(<PrimeraApp saludo={saludo}/>);
  //     expect(getByText(saludo)).toBeInTheDocument();

  //     // const ren=render(<PrimeraApp saludo={saludo}/>);
  //     // expect(ren.getByText(saludo)).toBeInTheDocument();
  // })

  test("debe de mostrar <PrimeraApp> correctamente", () => {
    const saludo = "Hola soy Vegeta Insecto";

    const wrapper = shallow(<PrimeraApp saludo={saludo}></PrimeraApp>);
    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <h1>
           
          Hola soy Vegeta Insecto
          !!! 
        </h1>
        <p>
          Soy un subtitulo
        </p>
      </Fragment>
    `);
  });
  test("debe de mostrar un subtitulo enviado por props", () => {
    const saludo = "Hola soy vegeta Insecto";
    const subTitulo = "Soy el principe de los monos";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo}></PrimeraApp>
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subTitulo);
  });
});
