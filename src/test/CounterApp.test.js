import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";

describe("Pruebas para componente de <CounterApp>", () => {
  let wrapper = shallow(<CounterApp></CounterApp>);
  beforeEach(() => {
    wrapper = shallow(<CounterApp></CounterApp>);
  });
  test("Debe de mostrar correctamente el <CounterApp> y sus valores por defecto", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <h1>
          CounterApp
        </h1>
        <h2>
           
          10
           
        </h2>
        <button
          onClick={[Function]}
        >
          +1
        </button>
        <button
          onClick={[Function]}
        >
          Reset
        </button>
        <button
          onClick={[Function]}
        >
          -1
        </button>
      </Fragment>
    `);
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}></CounterApp>);

    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe(String(value));
  });

  test("debe de incrementar con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("debe de reducir con el boton -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });
  test("debe de resetear el valor por defecto", () => {
    const wrapper = shallow(<CounterApp value={105}></CounterApp>);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("105");
    // expect(Lo que se recibe).toBe(Lo que se espera)
  });
});
