export default function Calculate({
  handleAC,
  handleDelete,
  changeValue,
  changeOperator,
  handleSubmit,
}) {
  return (
    <>
      <div className="row">
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold bg-opacity-20"
          onClick={handleAC}
        >
          AC
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeOperator("%")}
        >
          %
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={handleDelete}
        >
          DEL
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeOperator("/")}
        >
          /
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("7")}
        >
          7
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("8")}
        >
          8
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("9")}
        >
          9
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeOperator("*")}
        >
          x
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("4")}
        >
          4
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("5")}
        >
          5
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("6")}
        >
          6
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeOperator("-")}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("1")}
        >
          1
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("2")}
        >
          2
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("3")}
        >
          3
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeOperator("+")}
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("00")}
        >
          00
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue("0")}
        >
          0
        </button>
        <button
          className="col btn btn-secondary m-1 rounded-circle fw-bold"
          onClick={() => changeValue(".")}
        >
          ,
        </button>
        <button
          className="col btn btn-warning m-1 rounded-circle fw-bold"
          onClick={handleSubmit}
        >
          =
        </button>
      </div>
    </>
  );
}
